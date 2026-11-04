import React, { useState } from 'react';
import { Menu, X, MessageCircle, FileSpreadsheet, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

interface NavbarProps {
  onOpenCsvModal: () => void;
  productCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCsvModal, productCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#18365B]/10 shadow-xs">
      {/* Top micro bar for physical showroom notice */}
      <div className="bg-[#18365B] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F2B544]" />
            <span className="hidden sm:inline">Ahmedabad, Gujarat:</span>
            <span>3 Flagship Physical Stores • Open 7 Days (10 AM to 10 PM)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/80">Digital Showroom • Over {productCount}+ In-Store Items</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2B544] hover:underline flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3 h-3" />
              <span>In-Store Staff Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none py-1">
          <img
            src="/assets/aistudio/logo-horizontal_ba455130.png"
            alt="M.S. Toys & Gifts - Little joys. Big smiles."
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#18365B]">
          <a href="#categories" className="hover:text-[#E9787B] transition-colors">
            Categories
          </a>
          <a href="#featured" className="hover:text-[#E9787B] transition-colors">
            Featured
          </a>
          <a href="#new-arrivals" className="hover:text-[#E9787B] transition-colors">
            New Arrivals
          </a>
          <a href="#concierge" className="hover:text-[#E9787B] transition-colors flex items-center gap-1 text-[#E9787B]">
            <Sparkles className="w-3.5 h-3.5 text-[#F2B544]" />
            <span>Gift Guide</span>
          </a>
          <a href="#catalogue" className="hover:text-[#E9787B] transition-colors">
            All Products
          </a>
          <a href="#stores" className="hover:text-[#E9787B] transition-colors">
            Our 3 Stores
          </a>
          <a href="#about" className="hover:text-[#E9787B] transition-colors">
            About
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* CSV Inventory Management trigger */}
          <button
            type="button"
            onClick={onOpenCsvModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#18365B] bg-[#F7F0E5] hover:bg-[#EAF5FA] border border-[#18365B]/15 transition-colors"
            title="Import or Export Showroom Inventory via CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#18365B]" />
            <span className="hidden xl:inline">Catalogue CSV</span>
          </button>

          {/* Direct WhatsApp Enquiry Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello M.S. Toys & Gifts! I'd like to check product availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-toy flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-[#0D0F1A] font-extrabold text-sm shadow-[3px_3px_0px_#0D0F1A] border-2 border-[#0D0F1A] hover:bg-[#20ba59]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenCsvModal}
            className="p-2 rounded-lg bg-[#F7F0E5] text-[#18365B] border border-[#18365B]/20"
            title="Import/Export CSV"
          >
            <FileSpreadsheet className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#18365B] text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#18365B]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-bold text-[#18365B]">
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              Product Categories
            </a>
            <a
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              Featured Collections
            </a>
            <a
              href="#new-arrivals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              New Arrivals
            </a>
            <a
              href="#concierge"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#E9787B] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F2B544]" />
              Gift Inspiration Guide
            </a>
            <a
              href="#catalogue"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              Browse Full Digital Catalogue
            </a>
            <a
              href="#stores"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              Our 3 Physical Stores
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#E9787B]"
            >
              About M.S. Toys &amp; Gifts
            </a>
          </div>

          <div className="pt-4 border-t border-[#18365B]/10 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md border-2 border-[#18365B]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
