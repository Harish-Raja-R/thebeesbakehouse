import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Heart, Minus, Plus, Share2 } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let product = null;
  
  try {
    product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  } catch (e) {
    console.error(e);
  }

  if (!product) {
    // If DB isn't running, show placeholder
    product = {
      id: "placeholder",
      name: "Classic Vanilla Berry Bento",
      description: "A delicate 4-inch vanilla sponge layered with fresh mixed berry compote and light vanilla buttercream. Perfect for intimate celebrations.",
      price: 650,
      isEggless: true,
      inStock: true,
      images: '["https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop"]',
      category: { name: "Signature Cakes" }
    } as any;
  }

  let images: string[] = [];
  try {
    images = typeof product.images === "string" ? JSON.parse(product.images) : product.images;
  } catch (e) {
    images = [];
  }
  const mainImage = images.length > 0 ? images[0] : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="bg-surface min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 flex items-center text-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-on-surface line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface-container">
              <Image 
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-surface-container cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src={img} alt={`${product.name} ${idx+2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="font-label-md tracking-widest text-secondary uppercase font-bold">
                {product.category?.name || "Patisserie"}
              </span>
            </div>
            <h1 className="font-display-sm text-4xl lg:text-5xl font-serif text-primary mb-4">
              {product.name}
            </h1>
            <p className="font-sans font-bold text-2xl text-on-surface mb-6">
              ₹{product.price.toString()}
            </p>

            <div className="prose prose-on-surface max-w-none mb-8">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              {product.isEggless && (
                <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-md text-sm font-bold tracking-wider uppercase">
                  Eggless Available
                </div>
              )}
              {product.inStock ? (
                <div className="text-secondary font-bold text-sm tracking-wider uppercase flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  In Stock
                </div>
              ) : (
                <div className="text-error font-bold text-sm tracking-wider uppercase flex items-center">
                  <span className="w-2 h-2 rounded-full bg-error mr-2"></span>
                  Out of Stock
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 border-t border-surface-variant pt-8">
              <div className="flex items-center border border-surface-variant rounded-md">
                <Button variant="ghost" size="icon" className="rounded-none rounded-l-md hover:bg-surface-variant">
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="w-12 text-center font-bold">1</div>
                <Button variant="ghost" size="icon" className="rounded-none rounded-r-md hover:bg-surface-variant">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1 font-label-lg" disabled={!product.inStock}>
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11 shrink-0 rounded-md">
                <Heart className="w-5 h-5 text-on-surface-variant" />
              </Button>
            </div>

            {/* Additional info accordion could go here */}
            <div className="flex items-center gap-4 text-on-surface-variant text-sm">
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
