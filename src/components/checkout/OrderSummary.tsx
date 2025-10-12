
import React from "react";
import { useCart } from "@/context/CartContext";
import { formatIndianPrice } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { CreditCard } from "lucide-react";

const OrderSummary: React.FC = () => {
  const { items, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
        {items.map((item) => (
          <div key={item.book.id} className="flex items-center gap-3">
            <div className="w-12 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
              <img
                src={item.book.coverImage}
                alt={item.book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="font-medium line-clamp-1">{item.book.title}</p>
              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">
                {formatIndianPrice(item.book.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span>{formatIndianPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>Included</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{formatIndianPrice(totalPrice)}</span>
        </div>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 border-t pt-4 mt-4">
          <CreditCard size={16} />
          <span>Secure payment processing</span>
        </div>
      </div>
    </div>
  )
};

export default OrderSummary;
