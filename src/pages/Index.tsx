
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import Testimonials from '@/components/home/Testimonials';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from '@/components/ui/AnimatedButton';
import BookCard from '@/components/ui/BookCard';
import { books } from '@/lib/data';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedBooks />
        
        {/* Promotional Banner */}
        <section className="relative bg-gradient-to-r from-book-blue to-book-indigo py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white"></div>
          </div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Reading Sale</h2>
              <p className="text-lg text-white/90 mb-8">
                Enjoy up to 30% off on selected titles across all genres. The perfect time to build your summer reading list!
              </p>
              <Link to="/catalog?filter=offers">
                <AnimatedButton 
                  className="bg-white text-book-blue hover:bg-white/90"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Browse Offers
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Author */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-foreground text-sm font-medium mb-4">
                  Featured Author
                </span>
                <h2 className="text-3xl font-bold mb-4">Yuval Noah Harari</h2>
                <p className="text-muted-foreground mb-6">
                  Yuval Noah Harari is a historian, philosopher, and bestselling author known for his books that explore big history, technology, and philosophy. His works have been translated into 60 languages, with 30 million copies sold worldwide.
                </p>
                <p className="text-muted-foreground mb-8">
                  His groundbreaking books "Sapiens: A Brief History of Humankind" and "Homo Deus: A Brief History of Tomorrow" have become global publishing phenomena, stimulating debate and discussion around the world.
                </p>
                <Link to="/catalog?author=Yuval%20Noah%20Harari">
                  <AnimatedButton 
                    variant="outline"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Explore Author's Books
                  </AnimatedButton>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-book-teal/10 filter blur-3xl"></div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800" 
                  alt="Yuval Noah Harari" 
                  className="relative mx-auto w-60 h-60 rounded-full object-cover shadow-elevated"
                />
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {books.filter(book => book.author === "Yuval Noah Harari").slice(0, 2).map(book => (
                    <div key={book.id}>
                      <BookCard book={book} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* Reading Categories */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">Browse by Genre</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our comprehensive selection of categories to find your next favorite read
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Fiction", icon: "📚", color: "bg-book-blue/10", href: "/catalog?category=fiction" },
                { name: "Mystery", icon: "🔍", color: "bg-book-indigo/10", href: "/catalog?category=mystery" },
                { name: "Science Fiction", icon: "🚀", color: "bg-book-purple/10", href: "/catalog?category=science-fiction" },
                { name: "Biography", icon: "👤", color: "bg-book-pink/10", href: "/catalog?category=biography" },
                { name: "Self-Help", icon: "✨", color: "bg-book-teal/10", href: "/catalog?category=self-help" },
                { name: "History", icon: "🏛️", color: "bg-amber-100", href: "/catalog?category=history" },
                { name: "Romance", icon: "❤️", color: "bg-red-100", href: "/catalog?category=romance" },
                { name: "Cooking", icon: "🍳", color: "bg-orange-100", href: "/catalog?category=cooking" },
                { name: "Business", icon: "💼", color: "bg-emerald-100", href: "/catalog?category=business" },
                { name: "Children", icon: "🧸", color: "bg-cyan-100", href: "/catalog?category=children" },
                { name: "Travel", icon: "✈️", color: "bg-violet-100", href: "/catalog?category=travel" },
                { name: "View All", icon: "🔎", color: "bg-gray-100", href: "/catalog" },
              ].map((category, index) => (
                <Link 
                  key={index}
                  to={category.href}
                  className="flex flex-col items-center p-6 rounded-xl hover-card-effect animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    backgroundColor: category.color
                  }}
                >
                  <span className="text-4xl mb-3" aria-hidden="true">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
