import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Parse images if stored as JSON string array, or use default
  let images: string[] = [];
  try {
    images = typeof product.images === "string" ? JSON.parse(product.images) : product.images;
  } catch (e) {
    images = [];
  }
  const mainImage = images.length > 0 ? images[0] : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="group flex flex-col bg-surface rounded-2xl overflow-hidden hover:shadow-elevation-md transition-all duration-300 border border-surface-variant h-full">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full bg-surface/90 hover:bg-surface">
            <Heart className="w-4 h-4 text-secondary" />
          </Button>
        </div>
        {product.isEggless && (
          <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm font-sans">
            Eggless Available
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Link href={`/shop/product/${product.id}`} className="group-hover:text-primary transition-colors">
            <h3 className="font-serif font-headline-sm text-lg line-clamp-1">{product.name}</h3>
          </Link>
          <p className="font-sans font-bold text-primary whitespace-nowrap">
            ₹{product.basePrice.toString()}
          </p>
        </div>
        
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 font-sans flex-grow">
          {product.description}
        </p>
        
        <Button className="w-full font-label-lg">
          <Link href={`/shop/product/${product.id}`}>
            View Options
          </Link>
        </Button>
      </div>
    </div>
  );
}
