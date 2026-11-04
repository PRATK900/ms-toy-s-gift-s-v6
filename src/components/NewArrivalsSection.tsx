import React from 'react';
import { Product } from '../types';
import { Sparkles, MessageCircle, Eye, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

interface NewArrivalsSectionProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({ products, onOpenProduct }) => {
  const newArrivals = products.filter(p => p.newArrival).slice(0, 4);

  return (
    <section id="new-arrivals" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEEEF] text-[#E9787B] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Fresh In-Store Arrivals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18365B] font-heading tracking-tight">
            Just Landed in Ahmedabad
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#26384B]/75">
            Discover the latest wooden toys, plush cuddle cushions, art sets, and home decor pieces.
          </p>
        </div>
        <a
          href="#catalogue"
          className="mt-4 sm:mt-0 text-sm font-bold text-[#E9787B] hover:underline"
        >
          Explore entire arrival list →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((p, idx) => {
          const colors = ['hover:shadow-[6px_6px_0px_#E63946]', 'hover:shadow-[6px_6px_0px_#1F6FE0]', 'hover:shadow-[6px_6px_0px_#FFC933]', 'hover:shadow-[6px_6px_0px_#25D366]'];
          const shadowColor = colors[idx % colors.length];

          return (
            <div
              key={p.id}
              className={`group bg-white rounded-3xl border-2 border-[#18365B] overflow-hidden shadow-[4px_4px_0px_#18365B] ${shadowColor} transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}
            >
              <div className="relative aspect-square bg-[#F7F0E5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E63946] text-white text-[11px] font-black border border-[#0D0F1A] shadow-xs flex items-center gap-1">
                  <span>✨</span>
                  <span>New Arrival</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-white/95 text-[#18365B] text-[10px] font-mono font-black border border-[#18365B]/20 shadow-xs">
                  {p.id}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenProduct(p)}
                  className="absolute inset-0 bg-[#18365B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-extrabold text-xs"
                >
                  <Eye className="w-4 h-4 text-[#FFC933]" />
                  <span>Inspect In-Store</span>
                </button>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#18365B]/75 mb-1">
                    <Store className="w-3.5 h-3.5 text-[#1F6FE0]" />
                    <span>{p.stores.map(s => s.replace('shop', 'Shop ')).join(' & ')}</span>
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
                </div>

                <div className="mt-4 pt-3 border-t border-[#18365B]/10 flex items-center justify-between">
                  <span className="text-xl font-black text-[#18365B] font-heading">
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello M.S. Toys & Gifts, is ${p.name} (${p.id}) currently available in stock?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-toy inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] text-[#0D0F1A] font-extrabold text-xs border border-[#0D0F1A] shadow-[2px_2px_0px_#0D0F1A] hover:bg-[#20ba59]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Check In-Store</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
