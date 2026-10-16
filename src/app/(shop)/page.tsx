import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import prisma from "@/lib/prisma";
import { FALLBACK_PRODUCTS } from "@/lib/mock-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bees Bake House | Bespoke Patisserie in Coimbatore",
  description: "Handcrafted bespoke cakes for your most memorable moments. We specialize in elegant wedding tiers, playful birthday designs, and eggless creations in Coimbatore.",
};

export default async function HomePage() {
  let featuredProducts: any[] = [];
  try {
    if (process.env.DATABASE_URL) {
      featuredProducts = await prisma.product.findMany({
        where: { isFeatured: true },
        take: 3,
      });
    }
  } catch (e) {
    console.error("Failed to fetch products", e);
  }

  if (!featuredProducts || featuredProducts.length === 0) {
    featuredProducts = FALLBACK_PRODUCTS.slice(0, 3);
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-surface-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop"
            alt="Beautiful custom cake"
            fill
            sizes="100vw"
            className="object-cover opacity-90 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12 w-full">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="font-label-lg tracking-widest text-secondary uppercase font-bold">
              Bespoke Patisserie
            </span>
            <h1 className="font-display-lg text-5xl lg:text-7xl text-primary font-serif leading-tight">
              Handcrafted bespoke cakes for your most memorable moments.
            </h1>
            <p className="text-on-surface-variant font-body-lg text-lg lg:text-xl max-w-xl">
              From elegant wedding tiers to playful birthday designs, every cake is baked with love, premium ingredients, and a touch of magic.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="font-label-lg">
                <Link href="/custom-cake">Order Custom Cake</Link>
              </Button>
              <Button variant="outline" size="lg" className="font-label-lg">
                <Link href="/shop">Shop Pre-designed</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low text-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <h2 className="font-display-sm text-3xl md:text-4xl font-serif text-primary mb-16">Why The Bees Bake House?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="text-on-secondary-container text-2xl">🌱</span>
              </div>
              <h3 className="font-headline-sm text-xl font-serif text-primary">Fresh & Premium</h3>
              <p className="text-on-surface-variant max-w-sm">We use only the finest ingredients, ensuring every bite is as delicious as it looks.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="text-on-secondary-container text-2xl">🎨</span>
              </div>
              <h3 className="font-headline-sm text-xl font-serif text-primary">Bespoke Designs</h3>
              <p className="text-on-surface-variant max-w-sm">Your vision brought to life. Our custom cakes are uniquely tailored to your celebration.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="text-on-secondary-container text-2xl">🥚</span>
              </div>
              <h3 className="font-headline-sm text-xl font-serif text-primary">Eggless Options</h3>
              <p className="text-on-surface-variant max-w-sm">Almost all our creations can be made 100% eggless without compromising on taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Creations */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label-lg tracking-widest text-secondary uppercase font-bold mb-2 block">Our Bestsellers</span>
              <h2 className="font-display-sm text-3xl md:text-4xl font-serif text-primary">Our Signature Creations</h2>
            </div>
            <Button variant="ghost" className="hidden sm:inline-flex text-primary">
              <Link href="/shop">View all products &rarr;</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-on-surface-variant py-12 bg-surface-container-low rounded-xl border border-dashed border-surface-variant">
                Products will appear here once added to the catalog.
              </p>
            )}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full">
              <Link href="/shop">View all products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <h2 className="font-display-sm text-3xl md:text-4xl font-serif mb-16 text-center">How to Order Your Custom Cake</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-primary-container/30 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-display-sm text-2xl font-serif shadow-lg">1</div>
              <h3 className="font-headline-sm text-xl font-bold font-serif">Fill the Form</h3>
              <p className="text-on-primary/80">Tell us about your event, theme, and flavor preferences.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-display-sm text-2xl font-serif shadow-lg">2</div>
              <h3 className="font-headline-sm text-xl font-bold font-serif">Consultation</h3>
              <p className="text-on-primary/80">We review your request and share a quote or design mockups.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-display-sm text-2xl font-serif shadow-lg">3</div>
              <h3 className="font-headline-sm text-xl font-bold font-serif">Confirm & Pay</h3>
              <p className="text-on-primary/80">Secure your order by completing the payment online.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-display-sm text-2xl font-serif shadow-lg">4</div>
              <h3 className="font-headline-sm text-xl font-bold font-serif">Pick Up & Enjoy</h3>
              <p className="text-on-primary/80">Collect your fresh, beautifully crafted cake from our studio.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" variant="secondary" className="font-label-lg">
              <Link href="/custom-cake">Start Your Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
