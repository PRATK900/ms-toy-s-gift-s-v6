import React from 'react';
import { STORES, BUSINESS_INFO } from '../data/stores';
import { MapPin, Clock, MessageCircle, Heart, Store } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18365B] text-white pt-16 pb-12 border-t-4 border-[#E9787B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logo-horizontal-light_66cd11f0.png"
                alt="M.S. Toys & Gifts - Little joys. Big smiles."
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              Ahmedabad&apos;s physical digital showroom. Over 4,000 toys, soft plush companions, luxury gifts, home décor, and fine school supplies across three retail locations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Store Support</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 italic">
              Digital showroom catalogue for physical retail stores. No online payment gateway or delivery processing is conducted on this website.
            </p>
          </div>

          {/* Col 2: Three Physical Stores & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F2B544]">
              Our 3 Ahmedabad Retail Stores
            </h4>

            <div className="space-y-3">
              {STORES.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{s.shortName}</span>
                    <span className="text-[#F2B544] text-[11px] font-mono">{s.hours}</span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-0.5">
                    {s.departments.slice(0, 2).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F2B544]">
              Showroom Directory
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#categories" className="hover:text-[#E9787B] transition-colors">Product Categories</a></li>
              <li><a href="#featured" className="hover:text-[#E9787B] transition-colors">Featured Recommendations</a></li>
              <li><a href="#new-arrivals" className="hover:text-[#E9787B] transition-colors">New Arrivals</a></li>
              <li><a href="#concierge" className="hover:text-[#E9787B] transition-colors">Gifting Inspiration Guide</a></li>
              <li><a href="#catalogue" className="hover:text-[#E9787B] transition-colors">Digital Product Catalogue</a></li>
              <li><a href="#stores" className="hover:text-[#E9787B] transition-colors">Store Locator &amp; Hours</a></li>
              <li><a href="#about" className="hover:text-[#E9787B] transition-colors">About M.S. Toys &amp; Gifts</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} M.S. Toys &amp; Gifts. Ahmedabad, Gujarat, India. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E9787B] fill-current" />
            <span>for families &amp; gift seekers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
