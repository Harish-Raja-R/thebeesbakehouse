import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Occasions | The Bees Bake House",
  description: "Cakes and desserts for every special occasion in Coimbatore.",
};

const occasions = [
  {
    title: "Birthdays",
    description: "Make every year sweeter with our custom birthday cakes.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
    link: "/shop?category=birthdays",
  },
  {
    title: "Weddings",
    description: "Elegant, multi-tiered creations for your special day.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
    link: "/custom-cake",
  },
  {
    title: "Anniversaries",
    description: "Celebrate milestones with rich flavors and beautiful designs.",
    image: "https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=800&auto=format&fit=crop",
    link: "/shop?category=anniversaries",
  },
  {
    title: "Corporate Events",
    description: "Branded cupcakes, bento boxes, and bulk orders.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    link: "/custom-cake",
  },
];

export default function OccasionsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-surface-variant/30 py-16 text-center px-4">
        <h1 className="font-headline-lg text-4xl md:text-5xl font-serif text-on-surface mb-4">
          Cakes for Every Occasion
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          From intimate birthday gatherings to grand wedding celebrations, we craft the perfect centerpiece for your special moments.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {occasions.map((occ, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-surface-variant/20 border border-surface-variant/50 transition-all hover:shadow-lg">
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={occ.image}
                  alt={occ.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col items-start">
                <h2 className="font-headline-md text-2xl font-serif text-on-surface mb-2">{occ.title}</h2>
                <p className="font-body-md text-on-surface-variant mb-6 flex-grow">{occ.description}</p>
                <Link href={occ.link}>
                  <Button variant="outline" className="group/btn gap-2">
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
