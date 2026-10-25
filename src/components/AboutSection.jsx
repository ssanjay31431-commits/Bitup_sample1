import React from 'react';
import { Flame, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: '100% Fresh, Never Frozen',
      description: 'We source prime quality chicken daily to ensure each drumstick, tender, and bite stays irresistibly juicy on the inside.',
      icon: '🍗'
    },
    {
      title: 'Our 11 Secret Spice Formula',
      description: 'Hand-blended aromatic spices that penetrate deep into the meat during our 12-hour slow marination process.',
      icon: '🌶️'
    },
    {
      title: 'Hand-Breaded to Order',
      description: 'Every single piece is freshly dredged in our proprietary crumb coating right before dropping into the fryer for extreme crunch.',
      icon: '✨'
    },
    {
      title: 'Artisan Brioche & Dips',
      description: 'Buttery toasted brioche buns, crisp garden-fresh greens, and signature secret mayo crafted fresh in our kitchen.',
      icon: '🍔'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#09090B] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Collage with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Photo 1 */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#262630] aspect-[3/4] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
                    alt="BITE UP Crispy Chicken"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                    Signature Crunch
                  </div>
                </div>

                <div className="bg-[#141418] border border-[#272733] rounded-2xl p-4 text-center">
                  <span className="font-heading text-4xl text-brand-gold font-black">11+</span>
                  <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1">
                    Secret Herbs & Spices
                  </p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="space-y-4 pt-6">
                <div className="bg-[#141418] border border-[#272733] rounded-2xl p-4 text-center">
                  <span className="font-heading text-4xl text-brand-red font-black">100%</span>
                  <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1">
                    Farm Fresh Daily
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-[#262630] aspect-[3/4] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                    alt="BITE UP Juicy Gourmet Burger"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                    Monster Zinger Burger
                  </div>
                </div>
              </div>

            </div>

            {/* Center Floating Seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md border-2 border-brand-red p-4 rounded-full shadow-2xl shadow-brand-red/30 flex flex-col items-center justify-center text-center w-28 h-28">
              <Flame className="w-6 h-6 text-brand-red animate-pulse" />
              <span className="font-heading text-base text-white tracking-widest mt-1">BITE UP</span>
              <span className="text-[8px] text-brand-gold uppercase font-bold">ORIGINAL</span>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#18181D] border border-brand-red/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-gold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
              <span>Crafted For Food Lovers</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
              THE STORY BEHIND <br />
              <span className="text-brand-red">EVERY CRUNCH.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white">BITE UP</strong>, we believe fast food shouldn't mean cutting corners. We set out with a simple mission: create the crispiest, juiciest fried chicken and the most satisfying gourmet burgers you've ever tasted.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              No shortcuts, no frozen mystery meat. Just fresh chicken marinated for half a day, tossed in our signature coating, and cooked fresh to golden crisp perfection. From our fiery wraps to cheesy loaded fries and handcrafted dips, every recipe is made to bring pure joy to your tastebuds.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="bg-[#131317] border border-[#22222B] rounded-2xl p-4 hover:border-brand-red/40 transition-colors">
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <h4 className="text-white font-bold text-sm">{h.title}</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
