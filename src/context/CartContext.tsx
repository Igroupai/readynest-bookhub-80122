
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

type CartItem = {
  book: Book;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book, quantity?: number) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  
  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('bookbazaar-cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('bookbazaar-cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);
  
  const addToCart = (book: Book, quantity: number = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id);
      
      if (existingItem) {
        // Update quantity if book already exists in cart
        return prevItems.map(item => 
          item.book.id === book.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { book, quantity }];
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  const removeFromCart = (bookId: string) => {
    setItems(prevItems => prevItems.filter(item => item.book.id !== bookId));
    
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
      duration: 3000,
    });
  };
  
  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(bookId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.book.id === bookId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
      duration: 3000,
    });
  };
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = items.reduce((total, item) => {
    return total + (item.book.price * item.quantity);
  }, 0);
  
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
