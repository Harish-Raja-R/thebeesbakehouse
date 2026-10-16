import Link from "next/link";
import { LayoutDashboard, ShoppingCart, Cake, Users, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-container-low">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-surface-variant hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-surface-variant">
          <Link href="/admin" className="font-serif font-bold text-lg text-primary">
            BBH Admin
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-colors">
            <ShoppingCart className="w-5 h-5" /> Orders
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-colors">
            <Cake className="w-5 h-5" /> Products
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-colors">
            <Users className="w-5 h-5" /> Customers
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-surface-variant">
          <Link href="/" className="text-sm text-secondary hover:underline">
            &larr; Back to Shop
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-20 bg-surface border-b border-surface-variant flex items-center justify-between px-6">
          <h1 className="font-sans font-bold text-xl text-on-surface">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
