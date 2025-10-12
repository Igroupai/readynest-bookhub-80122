
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Book<span className="text-foreground">Bazaar</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary underline-animation",
                  location.pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:block">
            <SearchBar className="w-72" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-medium rounded-full">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
            
            <Link
              to="/login"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="User Account"
            >
              <User size={22} />
            </Link>
            
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        
        <div className="mt-4 lg:hidden">
          <SearchBar className="w-full" />
        </div>
      </div>
      
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 pt-6 px-4 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-100",
                location.pathname === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          
          <div className="pt-4 flex flex-col space-y-4">
            <Link
              to="/login"
              className="text-lg font-medium py-2"
            >
              Login
            </Link>
            
            <Link
              to="/register"
              className="text-lg font-medium py-2"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
