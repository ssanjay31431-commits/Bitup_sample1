import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Minus, Star, X, Check, Sparkles, Filter } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ cartItems, onAddToCart, onUpdateQuantity }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'non-veg', 'veg'
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-asc', 'price-desc', 'rating'

  // Cart item quantity helper
  const getItemQty = (itemId) => {
    const found = cartItems.find((item) => item.id === itemId);
    return found ? found.quantity : 0;
  };

  // Filtered and sorted items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Diet match
      let matchesDiet = true;
      if (dietFilter === 'veg') matchesDiet = item.isVeg === true;
      if (dietFilter === 'non-veg') matchesDiet = item.isVeg === false;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesDiet && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default order
    });
  }, [selectedCategory, dietFilter, searchQuery, sortBy]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts = { all: MENU_ITEMS.length };
    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="menu" className="py-20 bg-[#0B0B0D] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#18181D] border border-brand-red/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Craving Station</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase tracking-tight">
            OUR CRISPY <span className="text-brand-red">FOOD MENU</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Every bite is freshly cooked to golden perfection with our signature recipes and sauces.
          </p>
        </div>

        {/* Controls Bar: Search & Diet & Sort */}
        <div className="bg-[#121215] border border-[#24242B] rounded-2xl p-4 sm:p-5 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search crispy chicken, burgers, wraps, fries, dips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A20] border border-[#2D2D37] rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Diet Filters (Veg / Non-Veg) */}
            <div className="flex items-center gap-1 bg-[#1A1A20] p-1 rounded-xl border border-[#2D2D37] self-start md:self-auto overflow-x-auto max-w-full">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  dietFilter === 'all'
                    ? 'bg-brand-red text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'non-veg'
                    ? 'bg-[#8B1E1E] text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-sm border border-red-500 flex items-center justify-center p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                </span>
                Non-Veg 🍗
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-700 text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-sm border border-emerald-500 flex items-center justify-center p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                Veg 🌱
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1A1A20] border border-[#2D2D37] text-gray-200 text-xs font-semibold rounded-xl px-3 py-3 focus:outline-none focus:border-brand-red cursor-pointer"
              >
                <option value="default">Sort: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>
        </div>

        {/* Category Filter Tabs (Horizontal Scrollable) */}
        <div className="relative mb-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-red to-brand-red-bright text-white border-brand-red shadow-lg shadow-brand-red/30 scale-105'
                      : 'bg-[#151518] text-gray-300 border-[#26262D] hover:border-brand-red/40 hover:text-white'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white text-brand-red' : 'bg-[#222228] text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Indicators */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <div>
            Showing <span className="text-white font-bold">{filteredItems.length}</span> delicious items
            {selectedCategory !== 'all' && (
              <span> in <span className="text-brand-red font-semibold">{CATEGORIES.find(c => c.id === selectedCategory)?.label}</span></span>
            )}
            {searchQuery && (
              <span> matching "<span className="text-white font-medium">{searchQuery}</span>"</span>
            )}
          </div>
          {(selectedCategory !== 'all' || searchQuery || dietFilter !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="text-brand-gold hover:text-white underline font-semibold flex items-center gap-1"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Food Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQty(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#141417] border border-[#23232A] rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/10 flex flex-col justify-between group"
                >
                  {/* Card Image & Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#1E1E24]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/30" />

                    {/* Veg / Non-Veg Indicator Icon */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md p-1.5 rounded-md border border-white/10 shadow">
                      {item.isVeg ? (
                        <div className="w-3.5 h-3.5 border-2 border-emerald-500 flex items-center justify-center p-0.5" title="Vegetarian">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                      ) : (
                        <div className="w-3.5 h-3.5 border-2 border-red-600 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-red-600" />
                        </div>
                      )}
                    </div>

                    {/* Promotional Badge (Bestseller, Spicy, Chef Special) */}
                    {item.badge && (
                      <div className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                        {item.badge.includes('Spicy') ? <Flame className="w-3 h-3 fill-white" /> : <Sparkles className="w-3 h-3" />}
                        <span>{item.badge}</span>
                      </div>
                    )}

                    {/* Spice Level Indicator */}
                    {item.spicyLevel > 0 && (
                      <div className="absolute bottom-2.5 left-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] text-gray-300 font-semibold flex items-center gap-1">
                        <span>Spice:</span>
                        <span>{'🌶️'.repeat(item.spicyLevel)}</span>
                      </div>
                    )}

                    {/* Rating Pill */}
                    <div className="absolute bottom-2.5 right-3 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-bold text-brand-gold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Combo Includes tags if present */}
                      {item.includes && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.includes.map((inc, i) => (
                            <span key={i} className="text-[10px] bg-[#1E1E26] text-gray-300 px-2 py-0.5 rounded border border-[#2D2D3A]">
                              ✓ {inc}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Price and Cart Action */}
                    <div className="pt-4 mt-3 border-t border-[#22222A] flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl sm:text-2xl font-black text-white font-display">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-500 line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold">Taxes included</span>
                      </div>

                      {/* Add Button or Quantity Controls */}
                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToCart(item)}
                          className="bg-brand-red hover:bg-brand-red-bright text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md shadow-brand-red/25 hover:shadow-brand-red/50 hover:scale-105 active:scale-95 transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          <span>ADD</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#202028] border border-brand-red/50 rounded-xl p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty - 1)}
                            className="w-7 h-7 rounded-lg bg-[#2A2A35] hover:bg-brand-red text-white flex items-center justify-center transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-black text-white">
                            {qty}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty + 1)}
                            className="w-7 h-7 rounded-lg bg-brand-red hover:bg-brand-red-bright text-white flex items-center justify-center transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#131317] rounded-3xl border border-[#24242C] p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto mb-4 text-3xl">
              🍗
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Crispy Bites Found</h3>
            <p className="text-gray-400 text-sm mb-6">
              We couldn't find any items matching your search or active filters. Try searching for "chicken", "burger", or "fries".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="bg-brand-red text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-brand-red-bright transition-all"
            >
              Show All Menu Items
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
