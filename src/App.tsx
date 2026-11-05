import React, { useState, useEffect } from 'react';
import { Product, FilterState, StoreId } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { HeroAnimation } from './components/HeroAnimation';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { GiftConcierge } from './components/GiftConcierge';
import { ProductCatalog } from './components/ProductCatalog';
import { StoreLocator } from './components/StoreLocator';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CsvImportModal } from './components/CsvImportModal';
import { ToyBoxWorldBackground } from './components/ToyBoxWorldBackground';

export default function App() {
  // Lightweight, non-blocking startup intro state
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if (!showIntro) return;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  // Inventory state with local storage cache
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('ms_showroom_inventory');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_PRODUCTS;
  });

  // Filter state for catalogue
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    category: 'all',
    subcategory: 'all',
    store: 'all',
    onlyFeatured: false,
    onlyNewArrival: false,
    sortBy: 'featured'
  });

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [csvModalOpen, setCsvModalOpen] = useState(false);

  // Sync products to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ms_showroom_inventory', JSON.stringify(products));
    } catch {
      // Ignore quota exceeded
    }
  }, [products]);

  const handleImportProducts = (newProducts: Product[], mode: 'append' | 'replace') => {
    if (mode === 'replace') {
      setProducts(newProducts);
    } else {
      // Avoid duplicate IDs
      const existingIds = new Set(products.map(p => p.id));
      const fresh = newProducts.filter(p => !existingIds.has(p.id));
      setProducts(prev => [...fresh, ...prev]);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setFilterState(prev => ({
      ...prev,
      category: categoryId,
      subcategory: 'all'
    }));
  };

  const handleFilterByStore = (storeId: StoreId) => {
    setFilterState(prev => ({
      ...prev,
      store: storeId
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF8FF] text-[#18365B] relative selection:bg-[#00B4D8]/30 selection:text-[#18365B]">
      {/* Brief, Lightweight Store Name Startup Opening (Non-blocking) */}
      {showIntro && (
        <div
          className="ms-startup-overlay fixed inset-0 z-50 flex items-center justify-center bg-[#EBF8FF] px-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="ms-startup-card flex flex-col items-center text-center px-7 py-6 rounded-3xl bg-white border-2 border-[#18365B] shadow-[5px_5px_0px_#18365B]">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18365B] font-heading">
              MS Toy&apos;s <span className="text-[#E63946]">&amp;</span> Gifts
            </span>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="w-7 h-1.5 rounded-full bg-[#E63946]" />
              <span className="w-3 h-1.5 rounded-full bg-[#FFC933]" />
              <span className="w-7 h-1.5 rounded-full bg-[#1F6FE0]" />
            </div>
            <span className="mt-2 text-xs sm:text-sm font-bold text-[#26384B]/80">
              Little joys. Big smiles.
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Animated Background */}
      <ToyBoxWorldBackground />

      {/* Homepage Content with Smooth Reveal */}
      <div className="ms-homepage-reveal flex-1 flex flex-col">
        {/* Navigation */}
        <Navbar
          onOpenCsvModal={() => setCsvModalOpen(true)}
          productCount={products.length}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Clean Brand Opening Hero Section */}
          <HeroAnimation />

          {/* Product Categories */}
          <CategoriesSection onSelectCategory={handleSelectCategory} />

          {/* Featured Products Horizontal Carousel */}
          <FeaturedCarousel
            products={products}
            onOpenProduct={setSelectedProduct}
          />

          {/* New Arrivals Grid */}
          <NewArrivalsSection
            products={products}
            onOpenProduct={setSelectedProduct}
          />

          {/* Gift Inspiration & Concierge */}
          <GiftConcierge
            products={products}
            onOpenProduct={setSelectedProduct}
          />

          {/* Complete Product Catalogue with Multi-Store Filters */}
          <ProductCatalog
            products={products}
            filterState={filterState}
            setFilterState={setFilterState}
            onOpenProduct={setSelectedProduct}
          />

          {/* Three Physical Retail Stores Showcase */}
          <StoreLocator onFilterByStore={handleFilterByStore} />

          {/* About M.S. Toys & Gifts */}
          <AboutSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CsvImportModal
        isOpen={csvModalOpen}
        onClose={() => setCsvModalOpen(false)}
        products={products}
        onImportProducts={handleImportProducts}
      />
    </div>
  );
}
