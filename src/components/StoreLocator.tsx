import React from 'react';
import { STORES, BUSINESS_INFO } from '../data/stores';
import { StoreId } from '../types';
import { MapPin, Clock, Calendar, CheckCircle2, MessageCircle, Store, ArrowRight, AlertCircle } from 'lucide-react';

interface StoreLocatorProps {
  onFilterByStore: (storeId: StoreId) => void;
}

export const StoreLocator: React.FC<StoreLocatorProps> = ({ onFilterByStore }) => {
  return (
    <section id="stores" className="relative py-10 sm:py-12 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18365B]/5 text-[#18365B] text-xs font-bold uppercase tracking-wider mb-3">
          <Store className="w-3.5 h-3.5 text-[#E9787B]" />
          Physical Retail Flagships
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#18365B] font-heading tracking-tight">
          Visit Our 3 Retail Stores
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#26384B]/75 leading-relaxed">
          Over 4,000 carefully curated toys, luxury gifts, home décor, and fine school supplies available across our three physical shops in Ahmedabad, Gujarat. Open 7 days a week.
        </p>
      </div>

      {/* 3 Store Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {STORES.map((store) => {
          const headerBg = store.id === 'shop1' ? 'bg-[#E63946]' : store.id === 'shop2' ? 'bg-[#1F6FE0]' : 'bg-[#18365B]';
          const cardShadow = store.id === 'shop1' ? 'hover:shadow-[7px_7px_0px_#E63946]' : store.id === 'shop2' ? 'hover:shadow-[7px_7px_0px_#1F6FE0]' : 'hover:shadow-[7px_7px_0px_#FFC933]';

          return (
            <div
              key={store.id}
              className={`rounded-3xl bg-white border-2 border-[#18365B] overflow-hidden shadow-[5px_5px_0px_#18365B] ${cardShadow} transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between`}
            >
              {/* Store Header Ribbon */}
              <div className={`p-6 text-white ${headerBg} border-b-2 border-[#18365B]`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 border border-white/25">
                    {store.shortName}
                  </span>
                  <span className="text-xs font-black text-[#FFC933] flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>7 Days Open</span>
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl tracking-tight text-white mt-1">
                  {store.name}
                </h3>
                <p className="text-xs text-white/90 mt-1 font-medium">
                  {store.tagline}
                </p>
              </div>

              {/* Store Body & Timings */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                {/* Working Hours */}
                <div className="bg-[#FFF9F0] p-4 rounded-2xl border-2 border-[#18365B]/15 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#18365B]">
                    <Clock className="w-4 h-4 text-[#E63946] animate-spin" style={{ animationDuration: '10s' }} />
                    <span>Operating Timings:</span>
                  </div>
                  <div className="text-2xl font-black text-[#18365B] mt-1 font-heading">
                    {store.hours}
                  </div>
                  <div className="text-xs text-[#26384B]/75 mt-0.5 font-medium">
                    {store.daysOpen}
                  </div>
                </div>

                {/* Department Highlights */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#18365B] mb-3">
                    Store Departments:
                  </h4>
                  <ul className="space-y-2">
                    {store.departments.map((dep, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#26384B]/90 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{dep}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location Notice (No Invented Details) */}
                <div className="p-3.5 rounded-2xl bg-[#EAF5FA] border-2 border-[#69B6D6]/40 text-xs text-[#18365B]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1F6FE0] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold">{store.locationCity}</span>
                      <p className="text-[11px] text-[#26384B]/75 mt-0.5 font-normal">
                        {store.addressNotice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Store Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onFilterByStore(store.id);
                      const el = document.getElementById('catalogue');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-toy flex-1 py-3 px-4 rounded-xl bg-[#18365B] text-white text-xs font-extrabold hover:bg-[#26384B] transition-colors flex items-center justify-center gap-2 border-2 border-[#0D0F1A] shadow-[3px_3px_0px_#0D0F1A]"
                  >
                    <span>Filter Stock For This Store</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC933]" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire with the store team at ${store.name} in Ahmedabad.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-toy py-3 px-4 rounded-xl bg-[#25D366] text-[#0D0F1A] text-xs font-black hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 border-2 border-[#0D0F1A] shadow-[3px_3px_0px_#0D0F1A]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Store Chat</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Schedule & Transparency Notice */}
      <div className="rounded-2xl bg-[#FFF9F0] border border-[#18365B]/15 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-[#F2B544] shrink-0" />
          <div className="text-xs sm:text-sm text-[#18365B]/90">
            <span className="font-bold">Showroom Schedule Note: </span>
            {BUSINESS_INFO.scheduleNote}
          </div>
        </div>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello! I am planning to visit M.S. Toys & Gifts today. Can you please confirm the current store status?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 rounded-full bg-[#18365B] text-white text-xs font-bold hover:bg-[#26384B] transition-colors flex items-center gap-2"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Confirm Today&apos;s Store Status</span>
        </a>
      </div>
      </div>
    </section>
  );
};
