import React, { useState, useMemo } from 'react';
import { Product, StoreId, FilterState } from '../types';
import { Search, Filter, X, Eye, MessageCircle, Store, Sparkles, Check, ArrowUpDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';
import { CATEGORIES } from '../data/categories';

interface ProductCatalogProps {
  products: Product[];
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  onOpenProduct: (product: Product) => void;
}

const ITEMS_PER_PAGE = 8;

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  filterState,
  setFilterState,
  onOpenProduct
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamic subcategories based on chosen category
  const availableSubcategories = useMemo(() => {
    if (filterState.category === 'all') {
      const set = new Set<string>();
      products.forEach(p => set.add(p.subcategory));
      return Array.from(set);
    }
    const set = new Set<string>();
    products.filter(p => p.category === filterState.category).forEach(p => set.add(p.subcategory));
    return Array.from(set);
  }, [products, filterState.category]);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Search
      if (filterState.search.trim()) {
        const query = filterState.search.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesSku = p.id.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesBrand && !matchesSku && !matchesCategory) {
          return false;
        }
      }

      // Category
      if (filterState.category !== 'all' && p.category !== filterState.category) {
        return false;
      }

      // Subcategory
      if (filterState.subcategory !== 'all' && p.subcategory !== filterState.subcategory) {
        return false;
      }

      // Store
      if (filterState.store !== 'all' && !p.stores.includes(filterState.store)) {
        return false;
      }

      // Featured only
      if (filterState.onlyFeatured && !p.featured) {
        return false;
      }

      // New arrival only
      if (filterState.onlyNewArrival && !p.newArrival) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-low') return a.price - b.price;
      if (filterState.sortBy === 'price-high') return b.price - a.price;
      if (filterState.sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, filterState]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const resetFilters = () => {
    setFilterState({
      search: '',
      category: 'all',
      subcategory: 'all',
      store: 'all',
      onlyFeatured: false,
      onlyNewArrival: false,
      sortBy: 'featured'
    });
    setCurrentPage(1);
  };

  const getStoreName = (storeId: StoreId) => {
    if (storeId === 'shop1') return 'Shop 1 (Gifts)';
    if (storeId === 'shop2') return 'Shop 2 (Toys)';
    return 'Shop 3 (Mega)';
  };

  return (
    <section id="catalogue" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18365B]/5 text-[#18365B] text-xs font-bold uppercase tracking-wider mb-2">
          <Store className="w-3.5 h-3.5 text-[#E9787B]" />
          Ahmedabad Digital Showroom
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#18365B] font-heading tracking-tight">
          Complete Store Catalogue
        </h2>
        <p className="mt-2 text-base text-[#26384B]/75">
          Browse real-time showroom collections with store availability. Chat with our in-store associates for reservation or video preview.
        </p>
      </div>

      {/* Control Bar: Search & Primary Filters */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#18365B] shadow-[5px_5px_0px_#18365B] mb-10 space-y-6">
        {/* Row 1: Search & Sort */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#26384B]/50" />
            <input
              type="text"
              placeholder="Search by product name, SKU (e.g. MS-2001), brand or category..."
              value={filterState.search}
              onChange={(e) => {
                setFilterState(prev => ({ ...prev, search: e.target.value }));
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#FFF9F0] border-2 border-[#18365B]/25 text-[#18365B] placeholder:text-[#26384B]/50 font-semibold text-sm focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-all shadow-inner"
            />
            {filterState.search && (
              <button
                type="button"
                onClick={() => setFilterState(prev => ({ ...prev, search: '' }))}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#26384B]/60 hover:text-[#18365B]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-48">
              <select
                value={filterState.sortBy}
                onChange={(e) => setFilterState(prev => ({ ...prev, sortBy: e.target.value as FilterState['sortBy'] }))}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border-2 border-[#18365B]/25 text-[#18365B] font-bold text-xs appearance-none cursor-pointer focus:outline-none focus:border-[#E63946] shadow-xs"
              >
                <option value="featured">Sort: Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Product Name (A - Z)</option>
              </select>
              <ArrowUpDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#26384B]/50 pointer-events-none" />
            </div>

            {(filterState.search || filterState.category !== 'all' || filterState.store !== 'all' || filterState.onlyFeatured || filterState.onlyNewArrival) && (
              <button
                type="button"
                onClick={resetFilters}
                className="btn-toy px-4 py-3.5 rounded-2xl bg-[#FCEEEF] text-[#E63946] text-xs font-black hover:bg-[#E63946] hover:text-white transition-colors shrink-0 flex items-center gap-1.5 border border-[#E63946] shadow-[2px_2px_0px_#E63946]"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Store Selector Pills (Shop 1, Shop 2, Shop 3) */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#18365B]/10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#18365B] mr-1">
            Store Availability:
          </span>
          <button
            type="button"
            onClick={() => {
              setFilterState(prev => ({ ...prev, store: 'all' }));
              setCurrentPage(1);
            }}
            className={`btn-toy px-4 py-2 rounded-xl text-xs font-extrabold transition-all border-2 border-[#0D0F1A] ${filterState.store === 'all' ? 'bg-[#18365B] text-white shadow-[3px_3px_0px_#0D0F1A]' : 'bg-white text-[#18365B] shadow-[2px_2px_0px_#18365B] hover:bg-[#FFF3C4]'}`}
          >
            All 3 Stores
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterState(prev => ({ ...prev, store: 'shop1' }));
              setCurrentPage(1);
            }}
            className={`btn-toy px-4 py-2 rounded-xl text-xs font-extrabold transition-all border-2 border-[#0D0F1A] ${filterState.store === 'shop1' ? 'bg-[#E63946] text-white shadow-[3px_3px_0px_#0D0F1A]' : 'bg-white text-[#18365B] shadow-[2px_2px_0px_#18365B] hover:bg-[#FCEEEF]'}`}
          >
            Shop 1 (Gifts &amp; Décor)
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterState(prev => ({ ...prev, store: 'shop2' }));
              setCurrentPage(1);
            }}
            className={`btn-toy px-4 py-2 rounded-xl text-xs font-extrabold transition-all border-2 border-[#0D0F1A] ${filterState.store === 'shop2' ? 'bg-[#1F6FE0] text-white shadow-[3px_3px_0px_#0D0F1A]' : 'bg-white text-[#18365B] shadow-[2px_2px_0px_#18365B] hover:bg-[#EAF5FA]'}`}
          >
            Shop 2 (Toys World)
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterState(prev => ({ ...prev, store: 'shop3' }));
              setCurrentPage(1);
            }}
            className={`btn-toy px-4 py-2 rounded-xl text-xs font-extrabold transition-all border-2 border-[#0D0F1A] ${filterState.store === 'shop3' ? 'bg-[#FFC933] text-[#0D0F1A] shadow-[3px_3px_0px_#0D0F1A]' : 'bg-white text-[#18365B] shadow-[2px_2px_0px_#18365B] hover:bg-[#FFF3C4]'}`}
          >
            Shop 3 (Mega Superstore)
          </button>
        </div>

        {/* Row 3: Category horizontal scrollable pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#18365B] mr-1 shrink-0">
            Category:
          </span>
          <button
            type="button"
            onClick={() => {
              setFilterState(prev => ({ ...prev, category: 'all', subcategory: 'all' }));
              setCurrentPage(1);
            }}
            className={`btn-toy px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${filterState.category === 'all' ? 'bg-[#18365B] text-white border-[#18365B] shadow-sm' : 'bg-[#FFF9F0] text-[#18365B] border-[#18365B]/20 hover:bg-[#F7F0E5]'}`}
          >
            All Categories
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setFilterState(prev => ({ ...prev, category: c.id, subcategory: 'all' }));
                setCurrentPage(1);
              }}
              className={`btn-toy px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${filterState.category === c.id ? 'bg-[#E63946] text-white border-[#E63946] shadow-sm' : 'bg-[#FFF9F0] text-[#18365B] border-[#18365B]/20 hover:bg-[#F7F0E5]'}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Row 4: Status Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#18365B]/8 text-xs font-semibold text-[#18365B]">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filterState.onlyFeatured}
                onChange={(e) => {
                  setFilterState(prev => ({ ...prev, onlyFeatured: e.target.checked }));
                  setCurrentPage(1);
                }}
                className="w-4 h-4 rounded text-[#E9787B] focus:ring-[#E9787B] border-[#18365B]/20"
              />
              <span>Featured Only</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filterState.onlyNewArrival}
                onChange={(e) => {
                  setFilterState(prev => ({ ...prev, onlyNewArrival: e.target.checked }));
                  setCurrentPage(1);
                }}
                className="w-4 h-4 rounded text-[#E9787B] focus:ring-[#E9787B] border-[#18365B]/20"
              />
              <span>New Arrivals Only</span>
            </label>
          </div>

          <div className="text-xs text-[#26384B]/60 font-medium">
            Showing <strong className="text-[#18365B]">{filteredProducts.length}</strong> showroom items
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((p, idx) => {
            const cardHoverShadows = [
              'hover:shadow-[6px_6px_0px_#E63946]',
              'hover:shadow-[6px_6px_0px_#1F6FE0]',
              'hover:shadow-[6px_6px_0px_#FFC933]',
              'hover:shadow-[6px_6px_0px_#25D366]'
            ];
            const shadowStyle = cardHoverShadows[idx % cardHoverShadows.length];

            return (
              <div
                key={p.id}
                className={`bg-white rounded-3xl border-2 border-[#18365B] overflow-hidden shadow-[4px_4px_0px_#18365B] ${shadowStyle} transition-all duration-300 transform hover:-translate-y-2 flex flex-col group`}
              >
                {/* Media */}
                <div className="relative aspect-4/3 bg-[#F7F0E5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {p.newArrival && (
                      <span className="px-2.5 py-1 rounded-full bg-[#E63946] text-white text-[10px] font-black border border-[#0D0F1A] shadow-xs">
                        New!
                      </span>
                    )}
                    {p.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#18365B] text-[#FFC933] text-[10px] font-black border border-white/20 shadow-xs">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-white/95 text-[#18365B] text-[10px] font-mono font-black border border-[#18365B]/20 shadow-xs">
                    {p.id}
                  </div>

                  {/* Hover Quick view overlay */}
                  <button
                    type="button"
                    onClick={() => onOpenProduct(p)}
                    className="absolute inset-0 bg-[#18365B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-extrabold text-xs"
                  >
                    <Eye className="w-4 h-4 text-[#FFC933]" />
                    <span>Inspect In-Store</span>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#26384B]/70 mb-1">
                      <span className="font-extrabold text-[#E63946] truncate max-w-[150px]">{p.category}</span>
                      <span className="text-[10px] font-bold text-slate-400">{p.ageRange || p.brand}</span>
                    </div>

                    <h3
                      onClick={() => onOpenProduct(p)}
                      className="font-heading font-extrabold text-base text-[#18365B] hover:text-[#E63946] cursor-pointer transition-colors line-clamp-1"
                    >
                      {p.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#26384B]/75 line-clamp-2 leading-relaxed font-normal">
                      {p.description}
                    </p>

                    {/* Store availability badges */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {p.stores.map((st) => (
                        <span
                          key={st}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EAF5FA] text-[#18365B] border border-[#69B6D6]/30"
                        >
                          {getStoreName(st)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#18365B]/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-[#18365B] font-heading">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      {p.originalPrice && (
                        <span className="ml-1.5 text-xs text-slate-400 line-through">
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello M.S. Toys & Gifts, I am interested in checking stock for ${p.name} (Code: ${p.id}). Is it available today?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-toy p-2.5 rounded-xl bg-[#25D366] text-[#0D0F1A] border border-[#0D0F1A] shadow-[2px_2px_0px_#0D0F1A] hover:bg-[#20ba59] transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#18365B]/10">
          <div className="w-16 h-16 rounded-full bg-[#FCEEEF] text-[#E9787B] flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-[#18365B]">
            No matching items found
          </h3>
          <p className="text-sm text-[#26384B]/70 mt-1 max-w-md mx-auto">
            Try adjusting your search query or reset your category and store filters. Remember, we have over 4,000 products in-store!
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#18365B] text-white text-xs font-bold hover:bg-[#26384B] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => {
                setCurrentPage(page);
                const el = document.getElementById('catalogue');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === page ? 'bg-[#18365B] text-white shadow-md' : 'bg-white text-[#18365B] border border-[#18365B]/10 hover:bg-[#F7F0E5]'}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};
