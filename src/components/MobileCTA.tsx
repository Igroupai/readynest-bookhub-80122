import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border shadow-editorial animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <Button 
          variant="coral" 
          size="lg" 
          className="w-full"
          onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ShoppingBag className="h-5 w-5" />
          Ver 25% OFF en libros
        </Button>
      </div>
    </div>
  );
};
