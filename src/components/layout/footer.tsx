import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-16 pb-8 border-t border-surface-variant">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div>
              <h2 className="font-headline-md font-serif text-primary">THE BEES BAKE HOUSE</h2>
              <p className="font-script-accent text-secondary italic mt-1">Adding a sweet touch to every memory made.</p>
            </div>
            <p className="text-on-surface-variant text-sm mt-4">
              Handcrafted bespoke cakes, delicate macarons, and artisanal desserts baked fresh in Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-label-lg font-bold text-primary mb-4">Shop</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/custom-cake" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Custom Cakes</Link></li>
              <li><Link href="/bento-cakes" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Bento Cakes</Link></li>
              <li><Link href="/brownies" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Gourmet Brownies</Link></li>
              <li><Link href="/macarons" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Macarons</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-label-lg font-bold text-primary mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faqs" className="text-sm text-on-surface-variant hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-label-lg font-bold text-primary mb-4">Get in Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-on-surface-variant">Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:thebeesbakehousecafe@gmail.com" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                  thebeesbakehousecafe@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-secondary shrink-0" />
                <a href="https://instagram.com/thebeesbakehouse" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                  @thebeesbakehouse
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-surface-variant flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-on-surface-variant">
            &copy; {new Date().getFullYear()} The Bees Bake House. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-on-surface-variant">FSSAI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
