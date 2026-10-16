import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  // Placeholder cart state since we don't have a global state manager setup yet
  const cartItems = [
    {
      id: "1",
      name: "Classic Vanilla Berry Bento",
      price: 650,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST placeholder
  const total = subtotal + tax;

  return (
    <div className="bg-surface min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <h1 className="font-display-sm text-4xl font-serif text-primary mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-2xl">
            <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
            <p className="text-on-surface-variant mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-4 bg-surface-container-low rounded-xl border border-surface-variant relative">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0 bg-surface">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold line-clamp-2 pr-8">{item.name}</h3>
                      <p className="text-primary font-bold mt-1">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-surface-variant rounded-md bg-surface">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none rounded-l-md">
                          <Minus className="w-3 h-3" />
                        </Button>
                        <div className="w-10 text-center text-sm font-bold">{item.quantity}</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none rounded-r-md">
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-surface-container-low rounded-xl p-6 border border-surface-variant sticky top-24">
                <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Tax (GST 18%)</span>
                    <span className="font-bold">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Delivery</span>
                    <span className="text-on-surface-variant italic">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-surface-variant pt-4 mb-8">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full font-label-lg" size="lg">
                  <Link href="/checkout">
                    Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <p className="text-center text-xs text-on-surface-variant mt-4">
                  Secure checkout powered by Stripe.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
