
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'You have been subscribed to our newsletter',
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Stay updated with the latest releases, exclusive offers, and personalized recommendations.
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex">
          <div className="relative flex-grow">
            <Mail 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-primary text-white rounded-r-md font-medium transition-colors hover:bg-primary/90 disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
