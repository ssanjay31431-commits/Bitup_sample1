import React from 'react';
import { ArrowRight, Flame, Sparkles, Star, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero({ onExploreClick, onCombosClick }) {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial glows and atmospheric effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#26262b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1A1112] border border-brand-red/40 px-4 py-2 rounded-full shadow-lg shadow-brand-red/10 animate-fade-in">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-200 tracking-wide uppercase font-display flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-brand-red fill-brand-red" />
                The Ultimate Fast Food Experience
              </span>
            </div>

            {/* Main Brand Heading */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] drop-shadow-md">
                CRISPY. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-bright to-brand-gold">
                  JUICY.
                </span>{' '}
                <br />
                DELICIOUS.
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200 tracking-wide pt-2">
                Your Favourite Bites, <span className="text-brand-red border-b-2 border-brand-red">Made Fresh.</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Marinated in our signature 11 secret herbs & spices, double-breaded by hand, and fried to golden perfection. Indulge in our mouthwatering fried chicken, monster burgers, and loaded fries!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-red to-brand-red-bright hover:from-brand-red-bright hover:to-brand-red text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl shadow-brand-red/35 hover:shadow-brand-red/60 hover:scale-[1.02] active:scale-95 transition-all duration-200 group uppercase tracking-wider"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onCombosClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16161A] hover:bg-[#202026] text-white border border-[#2E2E38] hover:border-brand-red/50 font-bold text-lg px-7 py-4 rounded-xl transition-all duration-200 uppercase tracking-wider"
              >
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span>SPECIAL COMBOS</span>
                <span className="bg-brand-red text-[11px] font-bold px-2 py-0.5 rounded-full text-white ml-1">
                  Offers
                </span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#222228] max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm sm:text-base leading-tight">100% Fresh</div>
                  <div className="text-gray-400 text-xs">Never Frozen</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Star className="w-5 h-5 fill-brand-gold" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm sm:text-base leading-tight">4.9 / 5.0</div>
                  <div className="text-gray-400 text-xs">1.2k+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm sm:text-base leading-tight">15-20 Min</div>
                  <div className="text-gray-400 text-xs">Express Kitchen</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Platter with Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border-2 border-brand-red/30 bg-gradient-to-tr from-brand-red/20 to-transparent blur-sm animate-pulse-glow" />
            
            {/* Main Visual Image Card */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg rounded-3xl p-3 bg-gradient-to-b from-[#25252D] via-[#151518] to-[#0E0E10] border border-[#2D2D37] shadow-2xl shadow-black">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=85"
                  alt="BITE UP Crispy Fried Chicken Platter"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Gradient shade over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  <span>Chef's Signature Crisp</span>
                </div>

                {/* Info strip bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">Monster Fried Chicken & Burger Combo</h3>
                    <p className="text-gray-300 text-xs">Crispy chicken drumstick + fries + dip</p>
                  </div>
                  <div className="text-right">
                    <span className="text-brand-gold text-lg sm:text-xl font-black">₹329</span>
                    <span className="block text-gray-400 text-[10px] line-through">₹409</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Right Card */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-[#16161B]/95 backdrop-blur-md border border-brand-red/40 p-3 sm:p-4 rounded-2xl shadow-2xl shadow-brand-red/20 hidden sm:flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center text-2xl">
                🍗
              </div>
              <div>
                <div className="text-white font-extrabold text-sm">Secret 11 Herbs</div>
                <div className="text-brand-gold text-xs font-medium">Extra Crunchy Coating</div>
              </div>
            </div>

            {/* Floating Bottom Left Card */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-[#16161B]/95 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl">
                🔥
              </div>
              <div>
                <div className="text-white font-extrabold text-sm">Crispy Chicken Bites</div>
                <div className="text-gray-400 text-xs">Fried fresh to order</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Ticker / Running Highlight Banner */}
      <div className="mt-14 sm:mt-20 border-y border-[#202026] bg-[#0E0E12] py-3.5 overflow-hidden">
        <div className="flex items-center space-x-8 text-xs sm:text-sm font-black uppercase tracking-wider text-gray-400 select-none animate-none whitespace-nowrap justify-around">
          <span className="flex items-center gap-2 text-white">
            <span className="text-brand-red">★</span> 100% FRESH MARINATED CHICKEN
          </span>
          <span className="flex items-center gap-2 text-white">
            <span className="text-brand-red">★</span> SECRET SPICE RECIPE
          </span>
          <span className="flex items-center gap-2 text-white">
            <span className="text-brand-red">★</span> SHATTERING CRUNCH GUARANTEE
          </span>
          <span className="flex items-center gap-2 text-white hidden md:flex">
            <span className="text-brand-red">★</span> FRESHLY TOASTED BRIOCHE BUNS
          </span>
          <span className="flex items-center gap-2 text-white hidden lg:flex">
            <span className="text-brand-red">★</span> HAND-BREADED HOURLY
          </span>
        </div>
      </div>
    </section>
  );
}
