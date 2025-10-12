
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '@/components/ui/SearchBar';
import AnimatedButton from '@/components/ui/AnimatedButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const mouseX = e.clientX - heroRect.left;
      const mouseY = e.clientY - heroRect.top;
      
      const centerX = heroRect.width / 2;
      const centerY = heroRect.height / 2;
      
      const offsetX = (mouseX - centerX) / 50;
      const offsetY = (mouseY - centerY) / 50;
      
      const bgItems = heroRef.current.querySelectorAll('.parallax-bg');
      const fgItems = heroRef.current.querySelectorAll('.parallax-fg');
      
      bgItems.forEach((item) => {
        const el = item as HTMLElement;
        el.style.transform = `translate(${-offsetX * 0.5}px, ${-offsetY * 0.5}px)`;
      });
      
      fgItems.forEach((item) => {
        const el = item as HTMLElement;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-book-blue/10 blur-3xl parallax-bg"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-book-purple/10 blur-3xl parallax-bg"></div>
        <div className="absolute top-[30%] right-[15%] w-40 h-40 rounded-full bg-book-teal/10 blur-3xl parallax-bg"></div>
      </div>
      
      <div className="container px-4 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              <span className="block">Discover Your</span>
              <span className="block mt-2 text-primary">Next Adventure</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground">
              Explore thousands of books across all genres. From bestsellers to hidden gems, find your perfect read at BookBazaar.
            </p>
            
            <div className="mt-8 lg:hidden">
              <SearchBar />
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Browse Catalog
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg"
              >
                Today's Deals
              </AnimatedButton>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-foreground">50k+</span>
                <span className="text-sm text-muted-foreground">Books</span>
              </div>
              
              <div className="h-8 w-px bg-gray-200"></div>
              
              <div className="text-center">
                <span className="block text-3xl font-bold text-foreground">128k+</span>
                <span className="text-sm text-muted-foreground">Readers</span>
              </div>
              
              <div className="h-8 w-px bg-gray-200"></div>
              
              <div className="text-center">
                <span className="block text-3xl font-bold text-foreground">96%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
            </div>
          </div>
          
          {/* Book Images */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Main Book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] parallax-fg" style={{ transform: 'rotate(5deg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" 
                alt="Featured Book" 
                className="w-full h-auto rounded-lg shadow-elevated"
              />
            </div>
            
            {/* Background Book 1 */}
            <div className="absolute top-[20%] right-[15%] w-[200px] parallax-fg" style={{ transform: 'rotate(-10deg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800" 
                alt="Book" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Background Book 2 */}
            <div className="absolute bottom-[15%] left-[10%] w-[180px] parallax-fg" style={{ transform: 'rotate(8deg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800" 
                alt="Book" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path 
            fill="white" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
