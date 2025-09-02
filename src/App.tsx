import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { ProductDetail } from "./components/ProductDetail";
import { Header } from "./components/Header";
import { productos, coleccionesAnteriores } from "./data/store";

type View = 'home' | 'product-detail';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const allProducts = [...productos, ...coleccionesAnteriores];
  const selectedProduct = selectedProductId 
    ? allProducts.find(p => p.id === selectedProductId) 
    : null;

  const handleViewDetail = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  if (currentView === 'product-detail' && selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Header onLogoClick={handleBackToHome} />
        <ProductDetail
          product={selectedProduct}
          onBackToHome={handleBackToHome}
          onViewDetail={handleViewDetail}
        />
      </div>
    );
  }

  return (
    <HomePage 
      onViewDetail={handleViewDetail}
      onLogoClick={handleBackToHome}
    />
  );
}