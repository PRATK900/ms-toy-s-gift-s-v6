import React, { useRef } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle, Eye, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

interface FeaturedCarouselProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ products, onOpenProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = products.filter(p => p.featured);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getStoreBadge = (stores: string[]) => {
    if (stores.length === 3) return 'Available in All 3 Stores';
    return stores.map(s => s.replace('shop', 'Shop ')).join(' & ');
  };

  return (
    <section id="featured" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3C4] text-[#18365B] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F2B544]" />
              Staff Recommendations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18365B] font-heading tracking-tight">
              Featured Showroom Pieces
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#26384B]/75">
              Customer favorites and mastercrafted collections across our physical branches.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="btn-toy p-3 rounded-2xl bg-white border-2 border-[#18365B] text-[#18365B] hover:bg-[#FFF3C4] transition-colors shadow-[3px_3px_0px_#18365B]"
              aria-label="Previous featured products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="btn-toy p-3 rounded-2xl bg-white border-2 border-[#18365B] text-[#18365B] hover:bg-[#FFF3C4] transition-colors shadow-[3px_3px_0px_#18365B]"
              aria-label="Next featured products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featured.map((p) => (
            <div
              key={p.id}
              className="min-w-[280px] sm:min-w-[340px] max-w-[340px] snap-start bg-white rounded-3xl border-2 border-[#18365B] overflow-hidden shadow-[4px_4px_0px_#18365B] hover:shadow-[6px_6px_0px_#1F6FE0] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Media container */}
              <div className="relative aspect-4/3 bg-[#F7F0E5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Store tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#18365B] text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm border border-white/20">
                  <Store className="w-3.5 h-3.5 text-[#FFC933]" />
                  <span>{getStoreBadge(p.stores)}</span>
                </div>

                {/* SKU Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/95 text-[#18365B] text-[10px] font-mono font-black border border-[#18365B]/20 shadow-xs">
                  {p.id}
                </div>

                {/* Quick view button overlay */}
                <button
                  type="button"
                  onClick={() => onOpenProduct(p)}
                  className="absolute inset-0 bg-[#18365B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-extrabold text-sm"
                >
                  <Eye className="w-4 h-4 text-[#FFC933]" />
                  <span>Inspect In-Store</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#26384B]/70 mb-1">
                    <span className="font-extrabold text-[#E63946]">{p.category}</span>
                    <span className="font-semibold text-slate-500">{p.subcategory}</span>
                  </div>

                  <h3
                    onClick={() => onOpenProduct(p)}
                    className="font-heading font-extrabold text-lg text-[#18365B] hover:text-[#E63946] cursor-pointer transition-colors line-clamp-1"
                  >
                    {p.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#26384B]/75 line-clamp-2 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#18365B]/10 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-[#18365B] font-heading">
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    {p.originalPrice && (
                      <span className="ml-2 text-xs text-slate-400 line-through">
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello M.S. Toys & Gifts, I am interested in checking availability for ${p.name} (${p.id}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-toy p-2.5 rounded-xl bg-[#25D366] text-[#0D0F1A] border-2 border-[#0D0F1A] shadow-[2px_2px_0px_#0D0F1A] hover:bg-[#20ba59] transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
