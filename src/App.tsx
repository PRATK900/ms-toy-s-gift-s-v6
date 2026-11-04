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
      {/* Page-wide continuous moving toy-box world background */}
      <ToyBoxWorldBackground />

      {/* Navigation */}
      <Navbar
        onOpenCsvModal={() => setCsvModalOpen(true)}
        productCount={products.length}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Animated Custom M.S. Hero Section */}
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
