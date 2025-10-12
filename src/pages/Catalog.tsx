
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { books, Book } from '@/lib/data';
import BookCard from '@/components/ui/BookCard';
import { ChevronRight } from 'lucide-react';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const category = searchParams.get('category');
  const filter = searchParams.get('filter');
  const author = searchParams.get('author');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter books based on URL parameters
  useEffect(() => {
    let result = [...books];
    
    if (category) {
      // Convert category to lowercase for case-insensitive comparison
      const lowerCategory = category.toLowerCase();
      result = result.filter(book => 
        book.tags.some(tag => tag.toLowerCase() === lowerCategory)
      );
    }
    
    if (filter === 'bestsellers') {
      result = result.filter(book => book.bestSeller);
    } else if (filter === 'new-releases') {
      result = result.filter(book => book.newRelease);
    } else if (filter === 'offers') {
      result = result.filter(book => book.discount);
    }
    
    if (author) {
      result = result.filter(book => 
        book.author.toLowerCase() === author.toLowerCase()
      );
    }
    
    setFilteredBooks(result);
  }, [category, filter, author, location]);
  
  // Generate page title based on filters
  const getPageTitle = () => {
    if (category) {
      return `${category.charAt(0).toUpperCase() + category.slice(1)} Books`;
    }
    
    if (filter === 'bestsellers') {
      return 'Bestselling Books';
    } else if (filter === 'new-releases') {
      return 'New Releases';
    } else if (filter === 'offers') {
      return 'Special Offers & Discounts';
    }
    
    if (author) {
      return `Books by ${author}`;
    }
    
    return 'All Books';
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
                <a href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-muted-foreground" />
                <span className="text-foreground font-medium">{getPageTitle()}</span>
              </li>
            </ol>
          </nav>
          
          <Card className="mb-8 bg-gray-50">
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold">{getPageTitle()}</h1>
              <p className="text-muted-foreground mt-2">
                {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} available
              </p>
            </CardContent>
          </Card>
          
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">No books found</h2>
              <p className="text-muted-foreground">
                Try changing your filters or check back later for new additions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
