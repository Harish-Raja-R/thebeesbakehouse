import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | The Bees Bake House",
  description: "Learn about our journey, our patisserie in Coimbatore, and our passion for baking.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
              alt="Baking in the kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md mb-6">
              Our Story
            </div>
            <h1 className="font-headline-lg text-4xl lg:text-5xl font-serif text-on-surface mb-6 leading-tight">
              Adding a sweet touch to every memory made.
            </h1>
            
            <div className="space-y-6 font-body-lg text-on-surface-variant text-lg">
              <p>
                Welcome to The Bees Bake House, an artisanal patisserie nestled in the heart of Coimbatore, Tamil Nadu. We believe that every celebration, big or small, deserves a cake that not only looks breathtaking but tastes unforgettable.
              </p>
              <p>
                What started as a passionate home kitchen experiment has blossomed into a beloved local bakery. We source the finest ingredients—from rich European chocolate to fresh local fruits—to craft bento cakes, multi-tiered wedding masterpieces, and delicate macarons.
              </p>
              <p>
                We specialize in custom creations tailored to your exact vision. Our goal isn't just to bake, but to create edible art that becomes the centerpiece of your special occasions.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <Link href="/shop">
                <Button size="lg" className="font-label-lg">Order Now</Button>
              </Link>
              <Link href="/custom-cake">
                <Button size="lg" variant="outline" className="font-label-lg">Custom Inquiry</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container text-on-primary-container py-16 lg:py-24 mt-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
          <h2 className="font-headline-md text-3xl font-serif mb-6">Visit Our Studio</h2>
          <p className="font-body-lg mb-8 max-w-xl mx-auto opacity-90">
            We operate primarily on a pre-order basis to ensure maximum freshness. 
            All custom cakes require a 48-hour advance notice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-surface/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold font-serif text-xl mb-2">Location</h3>
              <p>Coimbatore, Tamil Nadu<br/>India</p>
            </div>
            <div className="bg-surface/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold font-serif text-xl mb-2">Contact</h3>
              <p>thebeesbakehousecafe@gmail.com<br/>@thebeesbakehouse</p>
            </div>
            <div className="bg-surface/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold font-serif text-xl mb-2">Hours</h3>
              <p>Mon-Sat: 10AM - 7PM<br/>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
