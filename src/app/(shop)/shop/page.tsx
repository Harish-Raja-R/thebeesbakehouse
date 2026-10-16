import { ProductCard } from "@/components/product-card";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Pre-designed Cakes | The Bees Bake House",
  description: "Browse our signature creations and bestselling cakes. Premium ingredients, beautiful designs, and 100% eggless options available.",
};

export default async function ShopPage() {
  let products: any[] = [];
  try {
    products = await prisma.product.findMany();
  } catch (e) {
    console.error("Failed to fetch products", e);
  }

  return (
    <div className="bg-surface min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="font-display-sm text-4xl md:text-5xl font-serif text-primary mb-4">Shop</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Browse our collection of handcrafted cakes, macarons, and desserts. Order online for pickup or delivery.
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-8 border-b border-surface-variant pb-4">
          <p className="text-on-surface-variant font-bold">Showing {products.length} products</p>
          <div className="flex gap-4">
            <select className="bg-surface border border-surface-variant rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl font-serif text-on-surface-variant">No products found.</p>
              <p className="text-sm text-on-surface-variant mt-2">Please check back later or contact us to place an order.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
