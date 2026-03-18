import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <Header />
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
