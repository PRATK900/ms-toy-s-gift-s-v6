import React from 'react';
import { Product } from '../types';
import { X, MessageCircle, Store, CheckCircle, HelpCircle, ShieldCheck, Tag } from 'lucide-react';
import { STORES, BUSINESS_INFO } from '../data/stores';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello M.S. Toys & Gifts Ahmedabad! I am enquiring about:\n\n*Product:* ${product.name}\n*SKU Code:* ${product.id}\n*Category:* ${product.category}\n*Price:* ₹${product.price}\n\nCould you please confirm if it is currently in stock for pickup or video preview?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#18365B] shadow-[8px_8px_0px_#18365B] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="btn-toy absolute top-5 right-5 p-2 rounded-xl bg-[#F7F0E5] text-[#18365B] border border-[#18365B]/20 hover:bg-[#E63946] hover:text-white transition-colors z-10"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Product Media */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-[#F7F0E5] overflow-hidden border-2 border-[#18365B]/20 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#18365B] text-white text-xs font-mono font-bold">
                SKU: {product.id}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FCEEEF] text-[#E9787B] text-xs font-bold">
                {product.category}
              </span>
              {product.ageRange && (
                <span className="px-2.5 py-1 rounded-md bg-[#FFF3C4] text-[#18365B] text-xs font-bold">
                  {product.ageRange}
                </span>
              )}
            </div>
          </div>

          {/* Details & In-Store Availability */}
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-[#69B6D6] uppercase tracking-wider">
                {product.brand}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#18365B] mt-1 leading-tight">
                {product.name}
              </h3>
              <p className="text-xs text-[#26384B]/70 mt-1">
                {product.subcategory}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-[#18365B] font-heading">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs font-bold text-[#25D366] bg-[#D9F5E6] px-2 py-0.5 rounded">
                Showroom Price
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#26384B]/80 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Specifications if any */}
            {product.specs && (
              <div className="pt-2 border-t border-[#18365B]/10 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18365B]">
                  Product Specifications:
                </span>
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs text-[#26384B]/75 py-0.5">
                    <span className="font-medium text-[#18365B]">{k}:</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 3 Physical Stores Stock Status */}
            <div className="pt-3 border-t border-[#18365B]/10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#18365B] block mb-2">
                Physical Store Stock Verification:
              </span>
              <div className="space-y-2">
                {STORES.map((st) => {
                  const isAvailable = product.stores.includes(st.id);
                  return (
                    <div
                      key={st.id}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold ${isAvailable ? 'bg-[#D9F5E6]/40 border-[#25D366]/30 text-[#18365B]' : 'bg-[#F7F0E5]/50 border-slate-200 text-[#26384B]/60'}`}
                    >
                      <div className="flex items-center gap-2">
                        <Store className="w-3.5 h-3.5 text-[#18365B]" />
                        <span>{st.shortName}</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold">
                        {isAvailable ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            <span className="text-[#25D366]">In Stock Now</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-slate-400">Ask on Request</span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-toy w-full py-3.5 px-6 rounded-2xl bg-[#25D366] text-[#0D0F1A] font-extrabold text-sm border-2 border-[#0D0F1A] shadow-[3px_3px_0px_#0D0F1A] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-[#26384B]/60 mt-2">
                Connects instantly with our Ahmedabad store staff. No checkout needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
