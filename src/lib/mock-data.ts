export interface MockProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  categoryId: string;
  images: string[];
  isEggless: boolean;
  isAvailable: boolean;
  isFeatured: boolean;
  category?: { name: string };
  createdAt?: Date;
  updatedAt?: Date;
  occasionId?: string | null;
}

export const FALLBACK_PRODUCTS: MockProduct[] = [
  {
    id: "classic-vanilla-berry",
    name: "Classic Vanilla Berry Bento",
    slug: "classic-vanilla-berry-bento",
    description: "A delicate 4-inch vanilla sponge layered with fresh mixed berry compote and light vanilla buttercream. Perfect for intimate celebrations.",
    basePrice: 650,
    categoryId: "cat-1",
    images: ["https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"],
    isEggless: true,
    isAvailable: true,
    isFeatured: true,
    category: { name: "Signature Cakes" }
  },
  {
    id: "rich-chocolate-truffle",
    name: "Rich Chocolate Truffle",
    slug: "rich-chocolate-truffle",
    description: "Decadent, dark, and intensely chocolatey. Layers of moist chocolate sponge with ganache and Belgian chocolate shavings.",
    basePrice: 1200,
    categoryId: "cat-1",
    images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"],
    isEggless: true,
    isAvailable: true,
    isFeatured: true,
    category: { name: "Signature Cakes" }
  },
  {
    id: "signature-macaron-box",
    name: "Signature Macaron Box",
    slug: "signature-macaron-box",
    description: "Assorted box of 6 delicate French macarons with our signature fillings: pistachio, salted caramel, rose raspberry, and dark chocolate.",
    basePrice: 850,
    categoryId: "cat-1",
    images: ["https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop"],
    isEggless: false,
    isAvailable: true,
    isFeatured: true,
    category: { name: "Patisserie" }
  },
  {
    id: "golden-honey-caramel",
    name: "Golden Honey Caramel Cake",
    slug: "golden-honey-caramel-cake",
    description: "Layers of spiced honey sponge filled with handcrafted salted caramel cream, roasted nuts, and honeycomb crunch.",
    basePrice: 1100,
    categoryId: "cat-1",
    images: ["https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop"],
    isEggless: true,
    isAvailable: true,
    isFeatured: true,
    category: { name: "Specialty Cakes" }
  }
];
