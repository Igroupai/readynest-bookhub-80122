
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);

  if (items.length === 0) {
    return null; // Will redirect in useEffect
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
                <Link to="/cart" className="text-muted-foreground hover:text-primary">
                  Cart
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                <span className="text-foreground font-medium">Checkout</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
          <div className="mt-8">
            <Link to="/cart" className="flex items-center text-primary hover:underline">
              <ChevronLeft size={16} className="mr-1" /> Return to Cart
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
