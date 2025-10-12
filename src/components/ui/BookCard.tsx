
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Book } from '@/lib/data';
import { cn, formatIndianPrice } from '@/lib/utils';
import AnimatedButton from './AnimatedButton';
import { useCart } from '@/context/CartContext';

interface BookCardProps {
  book: Book;
  className?: string;
  featured?: boolean;
}

const BookCard = ({ book, className, featured = false }: BookCardProps) => {
  const { id, title, author, price, originalPrice, coverImage, rating, reviewCount, bestSeller, newRelease, discount } = book;
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
  };
  
  return (
    <article 
      className={cn(
        "group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-subtle transition-all duration-500 hover:shadow-elevated hover:-translate-y-1",
        featured ? "h-full" : "h-[380px]",
        className
      )}
    >
      {/* Tags */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {bestSeller && (
          <span className="text-xs font-medium px-2 py-1 bg-amber-500 text-white rounded-full animate-fade-in">
            Bestseller
          </span>
        )}
        {newRelease && (
          <span className="text-xs font-medium px-2 py-1 bg-book-purple text-white rounded-full animate-fade-in animation-delay-200">
            New
          </span>
        )}
        {discount && (
          <span className="text-xs font-medium px-2 py-1 bg-book-pink text-white rounded-full animate-fade-in animation-delay-400">
            {discount}% Off
          </span>
        )}
      </div>
      
      {/* Cover Image */}
      <Link to={`/book/${id}`} className="relative overflow-hidden">
        <div className="aspect-[2/3] w-full bg-gray-100 overflow-hidden">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <Link to={`/book/${id}`} className="inline-block">
          <h3 className="font-medium text-lg leading-tight hover:text-primary transition-colors duration-200">
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-1">{author}</p>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  "fill-current",
                  i < Math.floor(rating) ? "text-amber-400" : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            ({reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mt-auto pt-3">
          {originalPrice ? (
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-medium">{formatIndianPrice(price)}</span>
              <span className="text-sm text-muted-foreground line-through">
                {formatIndianPrice(originalPrice)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-medium">{formatIndianPrice(price)}</span>
          )}
        </div>
        
        {/* Add to cart button */}
        <AnimatedButton 
          className="mt-3 w-full" 
          size="sm"
          variant={featured ? "primary" : "outline"}
          onClick={handleAddToCart}
        >
          Add to Cart
        </AnimatedButton>
      </div>
    </article>
  );
};

export default BookCard;
