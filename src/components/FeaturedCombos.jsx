import React from 'react';
import { Sparkles, Flame, Plus, Check, Star, ArrowRight } from 'lucide-react';
import { FEATURED_COMBOS } from '../data/menuData';

export default function FeaturedCombos({ onAddToCart, cartItems }) {
  const getItemQty = (itemId) => {
    const found = cartItems.find((item) => item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="combos" className="py-20 bg-gradient-to-b from-[#0A0A0C] via-[#111115] to-[#0A0A0C] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#1F1214] border border-brand-red/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 fill-brand-red" />
              <span>Mega Value Feast</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase tracking-tight">
              SPECIAL <span className="text-brand-red">COMBOS & OFFERS</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Carefully bundled with crispy favorites, signature sides, and chilled beverages for maximum flavor and savings.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-400">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
            <span>Exclusive limited-time promo deals</span>
          </div>
        </div>

        {/* Featured Combos Cards: Responsive Grid / Horizontal Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COMBOS.map((combo) => {
            const qty = getItemQty(combo.id);

            return (
              <div
                key={combo.id}
                className="bg-[#151519] border border-[#262630] rounded-3xl overflow-hidden hover:border-brand-red/60 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/20 flex flex-col justify-between group"
              >
                {/* Image and Badges */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1E1E26]">
                  <img
                    src={combo.image}
                    alt={combo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-black/30" />

                  {/* Red Offer Label */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-brand-red to-brand-red-bright text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-brand-red/40 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{combo.discount}</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-brand-gold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-brand-gold" />
                    <span>{combo.rating}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-200">
                    {combo.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl group-hover:text-brand-gold transition-colors">
                      {combo.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {combo.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#22222A]">
                      {combo.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-[#22222A] flex items-center justify-between">
                    <div>
                      <div className="text-gray-500 text-xs line-through">₹{combo.originalPrice}</div>
                      <div className="text-2xl font-black text-white font-display flex items-baseline gap-1">
                        <span>₹{combo.price}</span>
                        <span className="text-[11px] text-brand-gold font-bold uppercase tracking-wider">
                          Combo
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(combo)}
                      className="bg-brand-red hover:bg-brand-red-bright text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-brand-red/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{qty > 0 ? `ADD MORE (${qty})` : 'ADD COMBO'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
