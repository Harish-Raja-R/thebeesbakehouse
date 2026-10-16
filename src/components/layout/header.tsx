import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-surface-variant">
      {/* Top Banner */}
      <div className="bg-primary-container text-on-primary py-1 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <p className="font-label-md text-xs sm:text-sm tracking-wider">
            Handcrafted in Coimbatore • Pre-order custom cakes 48h in advance
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between">
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="font-label-lg text-on-surface-variant hover:text-on-surface transition-colors">Home</Link>
          <Link href="/shop" className="font-label-lg text-on-surface-variant hover:text-on-surface transition-colors">Shop</Link>
          <Link href="/custom-cake" className="font-label-lg text-primary font-bold">Custom Cakes</Link>
          <Link href="/occasions" className="font-label-lg text-on-surface-variant hover:text-on-surface transition-colors">Occasions</Link>
          <Link href="/about" className="font-label-lg text-on-surface-variant hover:text-on-surface transition-colors">About</Link>
        </nav>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 text-left group">
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg sm:text-xl tracking-tight text-primary leading-tight font-serif">
                THE BEES BAKE HOUSE
              </span>
              <span className="font-label-md text-secondary tracking-widest uppercase text-[10px] sm:text-xs leading-tight">
                Artisanal Patisserie • Coimbatore
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full text-on-surface-variant">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="rounded-full text-on-surface-variant relative">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="secondary" className="rounded-full flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Cart</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full text-on-surface-variant">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-on-surface-variant" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface text-on-surface">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-serif">Home</Link>
                <Link href="/shop" className="text-lg font-serif">Shop</Link>
                <Link href="/custom-cake" className="text-lg font-serif text-primary">Custom Cakes</Link>
                <Link href="/occasions" className="text-lg font-serif">Occasions</Link>
                <Link href="/about" className="text-lg font-serif">About</Link>
                
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="/wishlist" className="flex items-center gap-2 text-on-surface-variant">
                    <Heart className="w-5 h-5" /> Wishlist
                  </Link>
                  <Link href="/account" className="flex items-center gap-2 text-on-surface-variant">
                    My Account
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
