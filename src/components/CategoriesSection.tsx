import React from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, Sparkles, HeartHandshake, Brain, PenTool, Trophy, Gamepad2, Gift, Baby } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-[#E9787B]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#E9787B]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#F2B544]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#69B6D6]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#F2B544]" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-[#69B6D6]" />;
      case 'Gift': return <Gift className="w-5 h-5 text-[#E9787B]" />;
      case 'Baby': return <Baby className="w-5 h-5 text-[#F2B544]" />;
      default: return <Sparkles className="w-5 h-5 text-[#E9787B]" />;
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const catEl = document.getElementById('catalogue');
    if (catEl) {
      catEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5FA] text-[#18365B] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#69B6D6]" />
            Curated Showroom Departments
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#18365B] font-heading tracking-tight">
            Explore by Category
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#26384B]/75 max-w-2xl font-normal">
            From educational toys and cuddly companions to fine stationery and festive décor, discover 4,000+ items across our three Ahmedabad locations.
          </p>
        </div>
        <a
          href="#catalogue"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#18365B] hover:text-[#E9787B] group"
        >
          <span>View all products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, idx) => {
          const cardAccents = [
            'hover:shadow-[6px_6px_0px_#E63946] hover:border-[#E63946]',
            'hover:shadow-[6px_6px_0px_#1F6FE0] hover:border-[#1F6FE0]',
            'hover:shadow-[6px_6px_0px_#F2B544] hover:border-[#F2B544]',
            'hover:shadow-[6px_6px_0px_#69B6D6] hover:border-[#69B6D6]',
            'hover:shadow-[6px_6px_0px_#E9787B] hover:border-[#E9787B]',
            'hover:shadow-[6px_6px_0px_#18365B] hover:border-[#18365B]',
            'hover:shadow-[6px_6px_0px_#FFC933] hover:border-[#FFC933]',
            'hover:shadow-[6px_6px_0px_#25D366] hover:border-[#25D366]'
          ];
          const accent = cardAccents[idx % cardAccents.length];

          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`group relative cursor-pointer rounded-3xl bg-white border-2 border-[#18365B] overflow-hidden shadow-[4px_4px_0px_#18365B] ${accent} transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}
            >
              {/* Image Header with Badge */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#F7F0E5]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18365B]/60 via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />
                
                {/* Category Icon Pill */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 border border-[#18365B]/15 shadow-sm flex items-center gap-2 text-xs font-extrabold text-[#18365B] group-hover:scale-105 transition-transform">
                  <span className="group-hover:rotate-12 transition-transform duration-300 inline-block">
                    {getIcon(cat.icon)}
                  </span>
                  <span>{cat.name}</span>
                </div>

                {/* Item Count */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-[#18365B]/85 backdrop-blur-xs text-white text-[11px] font-bold shadow-xs">
                  {cat.itemCount}+ In-store items
                </div>
              </div>

              {/* Content description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#18365B] group-hover:text-[#E63946] transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">🎈</span>
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#26384B]/75 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#18365B]/10 flex items-center justify-between text-xs font-extrabold text-[#18365B] group-hover:text-[#E63946]">
                  <span>Browse Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
