import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Checkout | The Bees Bake House",
  description: "Secure checkout for your delicious handcrafted cakes and desserts from The Bees Bake House.",
};

export default function CheckoutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen max-w-7xl mx-auto px-4 lg:px-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-primary mb-2">Checkout</h1>
        <p className="text-on-surface-variant font-sans">Complete your order securely.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-surface p-6 rounded-2xl border border-surface-variant">
            <h2 className="text-xl font-serif mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
              <div className="space-y-1">
                <label className="text-sm font-medium">First Name</label>
                <input type="text" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Jane" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Last Name</label>
                <input type="text" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Doe" />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Email Address</label>
                <input type="email" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="jane@example.com" />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 98765 43210" />
              </div>
            </div>
          </section>
          
          <section className="bg-surface p-6 rounded-2xl border border-surface-variant">
            <h2 className="text-xl font-serif mb-4">Delivery Details</h2>
            <div className="grid grid-cols-1 gap-4 font-sans">
              <div className="space-y-1">
                <label className="text-sm font-medium">Address</label>
                <input type="text" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="123 Bakery Lane" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">City</label>
                  <input type="text" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" defaultValue="Coimbatore" readOnly />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">PIN Code</label>
                  <input type="text" className="w-full px-3 py-2 border border-surface-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="641001" />
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div>
          <div className="bg-surface p-6 rounded-2xl border border-surface-variant sticky top-28">
            <h2 className="text-xl font-serif mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 text-sm font-sans">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span>₹1,500.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Delivery</span>
                <span>₹50.00</span>
              </div>
              <div className="border-t border-surface-variant pt-4 flex justify-between font-bold text-base text-primary">
                <span>Total</span>
                <span>₹1,550.00</span>
              </div>
            </div>
            <Button className="w-full font-label-lg" size="lg">
              Place Order & Pay
            </Button>
            <p className="text-xs text-center text-on-surface-variant mt-4 font-sans">
              Secure payments powered by standard encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
