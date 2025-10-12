
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { books } from '@/lib/data';
import BookCard from '@/components/ui/BookCard';
import AnimatedButton from '@/components/ui/AnimatedButton';

const FeaturedBooks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const featuredBooks = books.filter(book => book.featured);
  const totalTabs = featuredBooks.length > 0 ? 3 : 0;
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalTabs - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalTabs - 1 : prev - 1));
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsSwiping(false);
    }
  };
  
  const handleTouchEnd = () => {
    setIsSwiping(false);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const bestsellers = books.filter(book => book.bestSeller).slice(0, 4);
  const newReleases = books.filter(book => book.newRelease).slice(0, 4);
  const discounted = books.filter(book => book.discount).slice(0, 4);
  
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Collections</h2>
            <p className="mt-3 text-muted-foreground">Discover our handpicked selection of books just for you</p>
          </div>
          
          <div className="flex mt-6 md:mt-0">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 ml-2 rounded-full text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="mb-10 flex justify-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveIndex(0)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeIndex === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
            >
              Bestsellers
            </button>
            <button
              onClick={() => setActiveIndex(1)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeIndex === 1 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
            >
              New Releases
            </button>
            <button
              onClick={() => setActiveIndex(2)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeIndex === 2 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
            >
              Special Offers
            </button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* Bestsellers */}
            <div className="min-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestsellers.map((book) => (
                  <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${parseInt(book.id) * 100}ms` }}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link to="/catalog?filter=bestsellers">
                  <AnimatedButton variant="outline">
                    View All Bestsellers
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            
            {/* New Releases */}
            <div className="min-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newReleases.map((book) => (
                  <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${parseInt(book.id) * 100}ms` }}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link to="/catalog?filter=new-releases">
                  <AnimatedButton variant="outline">
                    View All New Releases
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            
            {/* Special Offers */}
            <div className="min-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {discounted.map((book) => (
                  <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${parseInt(book.id) * 100}ms` }}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link to="/catalog?filter=offers">
                  <AnimatedButton variant="outline">
                    View All Special Offers
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(totalTabs)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
