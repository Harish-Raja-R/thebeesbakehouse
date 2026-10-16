import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Bees Bake House",
  description: "Adding a sweet touch to every memory made. Handcrafted bespoke cakes in Coimbatore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  );
}
