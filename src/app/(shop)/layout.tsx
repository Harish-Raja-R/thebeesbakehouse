import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
