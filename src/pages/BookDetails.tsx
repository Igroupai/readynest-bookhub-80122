import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { books } from '@/lib/data';
import { cn, formatIndianPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState(books.find(b => b.id === id));
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update book if ID changes
    setBook(books.find(b => b.id === id));
  }, [id]);
  
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the book you're looking for.</p>
            <Link to="/catalog">
              <AnimatedButton>
                Browse All Books
              </AnimatedButton>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(book);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <ol className="flex flex-wrap items-center space-x-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                <Link to="/catalog" className="text-muted-foreground hover:text-primary">
                  Catalog
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                <span className="text-foreground font-medium">{book.title}</span>
              </li>
            </ol>
          </nav>
          
          <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="lg:col-span-1">
              {/* Book Cover Image */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm mb-6">
                <div className="aspect-[2/3] max-w-md mx-auto">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {book.tags.map((tag, index) => (
                  <Link 
                    key={index}
                    to={`/catalog?category=${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-medium hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Book Info */}
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap space-x-2 mb-2">
                  {book.bestSeller && (
                    <span className="px-2 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                      Bestseller
                    </span>
                  )}
                  {book.newRelease && (
                    <span className="px-2 py-1 bg-book-purple text-white rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {book.discount && (
                    <span className="px-2 py-1 bg-book-pink text-white rounded-full text-xs font-medium">
                      {book.discount}% Off
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold">{book.title}</h1>
                
                <div>
                  <Link 
                    to={`/catalog?author=${encodeURIComponent(book.author)}`}
                    className="text-xl text-primary hover:underline"
                  >
                    {book.author}
                  </Link>
                </div>
                
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={cn(
                          "fill-current",
                          i < Math.floor(book.rating) ? "text-amber-400" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {book.rating} ({book.reviewCount} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{formatIndianPrice(book.price)}</span>
                  {book.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatIndianPrice(book.originalPrice)}
                    </span>
                  )}
                  {book.discount && (
                    <span className="text-lg text-green-600 font-medium ml-2">
                      Save {book.discount}%
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-2">Book Description</h2>
                  <p className="text-muted-foreground">
                    {book.description}
                  </p>
                </div>
                
                {/* Add to cart button */}
                <div className="mt-8">
                  <AnimatedButton 
                    className="w-full md:w-auto" 
                    size="lg"
                    icon={<ShoppingCart size={20} />}
                    iconPosition="left"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
