import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn, formatIndianPrice } from '@/lib/utils';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex mb-8 text-sm">
              <ol className="flex flex-wrap items-center space-x-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                  <span className="text-foreground font-medium">Cart</span>
                </li>
              </ol>
            </nav>
            
            <div className="py-12 text-center">
              <div className="mb-6 flex justify-center">
                <ShoppingBag size={64} className="text-muted-foreground/50" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any books to your cart yet.
              </p>
              <Link to="/catalog">
                <AnimatedButton>
                  Browse Books
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex mb-8 text-sm">
            <ol className="flex flex-wrap items-center space-x-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                <span className="text-foreground font-medium">Cart</span>
              </li>
            </ol>
          </nav>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <Button 
              variant="ghost" 
              onClick={clearCart}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 size={16} className="mr-1" /> Clear Cart
            </Button>
          </div>
          
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.book.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/book/${item.book.id}`} className="shrink-0">
                    <div className="aspect-[2/3] w-28 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={item.book.coverImage} 
                        alt={item.book.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  
                  <div className="flex-grow">
                    <Link to={`/book/${item.book.id}`}>
                      <h3 className="font-medium text-lg hover:text-primary transition-colors">
                        {item.book.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground">{item.book.author}</p>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="px-2 h-8"
                            onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="px-2 h-8"
                            onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeFromCart(item.book.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 size={16} className="mr-1" /> Remove
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-lg">
                          {formatIndianPrice(item.book.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            {formatIndianPrice(item.book.price)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>{formatIndianPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatIndianPrice(totalPrice)}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <AnimatedButton className="w-full" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </AnimatedButton>
              <Link to="/catalog" className="mt-4 flex justify-center items-center text-primary hover:underline">
                <ChevronLeft size={16} className="mr-1" /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
