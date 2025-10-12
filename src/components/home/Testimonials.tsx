
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">What Our Readers Say</h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of satisfied readers who have discovered their next favorite book with us
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-10 opacity-5">
            <Quote size={120} />
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                display: 'flex',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-6"
                  style={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    position: activeIndex === index ? 'relative' : 'absolute',
                  }}
                >
                  <div className="bg-white rounded-xl shadow-subtle p-8 md:p-10">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={cn(
                            "fill-current",
                            i < testimonial.rating ? "text-amber-400" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-foreground italic font-medium mb-8">
                      "{testimonial.message}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-subtle hover:shadow-elevated text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-subtle hover:shadow-elevated text-muted-foreground hover:text-primary transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
