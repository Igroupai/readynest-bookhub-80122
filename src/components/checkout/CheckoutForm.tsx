
import React, { useState } from 'react';
import { CreditCard, Wallet, IndianRupee } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface CheckoutFormProps {
  onOrderPlaced?: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onOrderPlaced }) => {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [upiId, setUpiId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { items } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (!paymentMethod) {
      toast({
        title: "Payment method required",
        description: "Please select a mode of payment.",
        variant: "destructive",
      });
      return;
    }
    if (paymentMethod === 'upi' && !upiId.trim()) {
      toast({
        title: "UPI ID required",
        description: "Please enter a valid UPI ID to continue.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    toast({
      title: "Processing payment",
      description: "Connecting to payment processor...",
    });
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Payment successful",
        description: `Your order has been placed with ${paymentMethod === "cash" ? "Cash on Delivery" : paymentMethod === "card" ? "Card" : "UPI"}. Thank you for your purchase.`,
      });
      if (onOrderPlaced) onOrderPlaced();
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-sm text-muted-foreground mt-1">
            We'll send your receipt to this email
          </p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Payment Method
          </label>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="flex gap-6"
            required
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="cash" id="cash" />
              <label htmlFor="cash" className="flex items-center gap-1 cursor-pointer">
                <Wallet className="w-4 h-4" /> Cash on Delivery
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="card" />
              <label htmlFor="card" className="flex items-center gap-1 cursor-pointer">
                <CreditCard className="w-4 h-4" /> Card
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="upi" id="upi" />
              <label htmlFor="upi" className="flex items-center gap-1 cursor-pointer">
                <IndianRupee className="w-4 h-4" /> UPI
              </label>
            </div>
          </RadioGroup>
          {paymentMethod === "upi" && (
            <div className="mt-4">
              <label htmlFor="upi-id" className="block text-sm font-medium mb-1">UPI ID</label>
              <input
                type="text"
                id="upi-id"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="yourname@bank"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Please enter your UPI ID to proceed.
              </p>
            </div>
          )}
        </div>
        <div className="mt-8">
          <AnimatedButton
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Complete Purchase'}
          </AnimatedButton>
          <p className="text-center text-sm text-muted-foreground mt-4">
            By completing your purchase, you agree to our
            <a href="#" className="text-primary hover:underline mx-1">Terms of Service</a>
            and
            <a href="#" className="text-primary hover:underline mx-1">Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
