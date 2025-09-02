import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProductGrid } from "./ProductGrid";
import { PastCollections } from "./PastCollections";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";

interface HomePageProps {
  onViewDetail: (productId: string) => void;
  onLogoClick: () => void;
}

export function HomePage({ onViewDetail, onLogoClick }: HomePageProps) {
  const scrollToProducts = () => {
    const productSection = document.getElementById('productos');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={onLogoClick} />
      <Hero onViewProductsClick={scrollToProducts} />
      <ProductGrid onViewDetail={onViewDetail} />
      <PastCollections onViewDetail={onViewDetail} />
      <AboutSection />
      <Footer />
    </div>
  );
}