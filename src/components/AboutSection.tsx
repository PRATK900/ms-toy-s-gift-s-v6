import React from 'react';
import { Store, ShieldCheck, Heart, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#18365B]/10 text-xs font-bold uppercase tracking-wider text-[#18365B]">
              <Sparkles className="w-3.5 h-3.5 text-[#F2B544]" />
              Our Story &amp; Philosophy
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#18365B] font-heading tracking-tight leading-tight">
              Bringing smiles to Ahmedabad, <span className="text-[#E9787B]">one joyful discovery</span> at a time.
            </h2>

            <p className="text-base sm:text-lg text-[#26384B]/80 leading-relaxed font-normal">
              {BUSINESS_INFO.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border-2 border-[#18365B] shadow-[3px_3px_0px_#E63946] hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#FCEEEF] border border-[#18365B]/20 flex items-center justify-center text-[#E63946] mb-3">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#18365B]">
                  Three Specialized Shops
                </h3>
                <p className="text-xs text-[#26384B]/75 mt-1 leading-relaxed font-normal">
                  Dedicated spaces for gifts, toys, home décor, and stationery so you find exactly what you need with expert assistance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#18365B] shadow-[3px_3px_0px_#1F6FE0] hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5FA] border border-[#18365B]/20 flex items-center justify-center text-[#1F6FE0] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#18365B]">
                  4,000+ Verified In-Store Items
                </h3>
                <p className="text-xs text-[#26384B]/75 mt-1 leading-relaxed font-normal">
                  Every product is physically available on our retail shelves. No dropshipping, no fictitious catalogue entries.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#18365B] shadow-[3px_3px_0px_#FFC933] hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3C4] border border-[#18365B]/20 flex items-center justify-center text-[#FFC933] mb-3">
                  <Heart className="w-5 h-5 text-[#0D0F1A]" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#18365B]">
                  Editorial &amp; Playful Curation
                </h3>
                <p className="text-xs text-[#26384B]/75 mt-1 leading-relaxed font-normal">
                  From BIS-certified child-safe wooden toys to handcrafted brass shagun trunks, we balance joyful play with refined elegance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#18365B] shadow-[3px_3px_0px_#25D366] hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#D9F5E6] border border-[#18365B]/20 flex items-center justify-center text-[#25D366] mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base text-[#18365B]">
                  Direct WhatsApp Staff Connect
                </h3>
                <p className="text-xs text-[#26384B]/75 mt-1 leading-relaxed font-normal">
                  Need a video preview or stock confirmation? Chat directly with our sales team across all three stores in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Image & Atmosphere Visuals */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-3/4 shadow-[4px_4px_0px_#18365B] border-2 border-[#18365B] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80"
                  alt="M.S. Toys and Gifts Wooden Toys"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square shadow-[4px_4px_0px_#18365B] border-2 border-[#18365B] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
                  alt="M.S. Toys and Gifts Home Decor"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-[4px_4px_0px_#18365B] border-2 border-[#18365B] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80"
                  alt="M.S. Toys and Gifts Plush Dolls"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-3/4 shadow-[4px_4px_0px_#18365B] border-2 border-[#18365B] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80"
                  alt="M.S. Toys and Gifts Stationery"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
