import React, { useState } from 'react';
import { Product } from '../types';
import { Gift, Sparkles, MessageCircle, ArrowRight, Heart, Users, Home, Briefcase, PartyPopper } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

interface GiftConciergeProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

type RecipientType = 'all' | 'kids' | 'home' | 'corporate' | 'festive' | 'return-gifts';

export const GiftConcierge: React.FC<GiftConciergeProps> = ({ products, onOpenProduct }) => {
  const [selectedRecipient, setSelectedRecipient] = useState<RecipientType>('kids');

  const recipients = [
    { id: 'kids', label: 'Kids & Toddlers', icon: Users, desc: 'Wooden puzzles, plush animals & STEM kits' },
    { id: 'home', label: 'Housewarming & Living', icon: Home, desc: 'Fluted vases, aroma diffusers & tabletop brass' },
    { id: 'corporate', label: 'Executive & Stationery', icon: Briefcase, desc: 'Marble desk docks, journals & fine sets' },
    { id: 'festive', label: 'Festive & Milestones', icon: Heart, desc: 'Handcrafted brass diyas & brocade keepsakes' },
    { id: 'return-gifts', label: 'Return Gifts & Parties', icon: PartyPopper, desc: 'Action board games & interactive play sets' }
  ];

  const getFilteredPicks = () => {
    switch (selectedRecipient) {
      case 'kids':
        return products.filter(p => ['Educational Toys', 'Soft Toys', 'RC & Action Toys', 'Baby & Toddler'].includes(p.category));
      case 'home':
        return products.filter(p => p.category === 'Home Decoration');
      case 'corporate':
        return products.filter(p => p.category === 'Stationery & School Supplies' || p.subcategory === 'Office Décor');
      case 'festive':
        return products.filter(p => p.category === 'Luxury Gifts');
      case 'return-gifts':
        return products.filter(p => p.category === 'Board Games & Puzzles' || p.price <= 1200);
      default:
        return products.slice(0, 4);
    }
  };

  const giftPicks = getFilteredPicks().slice(0, 3);

  return (
    <section id="concierge" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white shadow-xs border border-[#E9787B]/20 text-[#E9787B] text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" />
            Curated Gifting Concierge
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#18365B] font-heading tracking-tight">
            Find the Perfect Gift
          </h2>
          <p className="mt-2 text-base text-[#26384B]/75">
            Looking for something unforgettable? Choose the recipient below to see hand-picked selections ready for in-store pickup or instant WhatsApp reservation.
          </p>
        </div>

        {/* Recipient Selection Chips */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-12">
          {recipients.map((r) => {
            const Icon = r.icon;
            const isSelected = selectedRecipient === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRecipient(r.id as RecipientType)}
                className={`btn-toy flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-extrabold transition-all border-2 border-[#0D0F1A] ${isSelected ? 'bg-[#E63946] text-white shadow-[4px_4px_0px_#0D0F1A] -translate-y-0.5' : 'bg-white text-[#18365B] shadow-[2px_2px_0px_#18365B] hover:bg-[#FFF3C4]'}`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FFC933]' : 'text-[#E63946]'}`} />
                <span>{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Curated Gift Picks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftPicks.map((p, idx) => {
            const cardBorders = ['hover:shadow-[7px_7px_0px_#E63946]', 'hover:shadow-[7px_7px_0px_#1F6FE0]', 'hover:shadow-[7px_7px_0px_#FFC933]'];
            const hoverShadow = cardBorders[idx % cardBorders.length];

            return (
              <div
                key={p.id}
                className={`bg-white rounded-3xl border-2 border-[#18365B] overflow-hidden shadow-[4px_4px_0px_#18365B] ${hoverShadow} transition-all duration-300 transform hover:-translate-y-2 flex flex-col group`}
              >
                <div className="relative aspect-4/3 bg-[#F7F0E5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#18365B] text-white text-xs font-black flex items-center gap-1.5 shadow-sm border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC933]" />
                    <span>Curated Choice</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 text-[#18365B] text-xs font-black font-heading border border-[#18365B]/20 shadow-xs">
                    ₹{p.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black text-[#E63946] uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3
                      onClick={() => onOpenProduct(p)}
                      className="font-heading font-extrabold text-xl text-[#18365B] mt-1 cursor-pointer hover:text-[#E63946] transition-colors"
                    >
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#26384B]/75 line-clamp-2 leading-relaxed font-normal">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#18365B]/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenProduct(p)}
                      className="text-xs font-extrabold text-[#18365B] hover:text-[#E63946] flex items-center gap-1"
                    >
                      <span>View In-Store Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello M.S. Toys & Gifts, I am interested in ${p.name} as a gift option. Can you share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-toy flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-[#0D0F1A] text-xs font-extrabold border border-[#0D0F1A] shadow-[2px_2px_0px_#0D0F1A] hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Gift Query</span>
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
