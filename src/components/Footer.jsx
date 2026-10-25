import React from 'react';
import { Flame, ArrowUp, Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Food Menu', href: '#menu' },
    { label: 'Special Combos', href: '#combos' },
    { label: 'About BITE UP', href: '#about' },
    { label: 'Contact & Store', href: '#contact' },
  ];

  const popularPicks = [
    'Fried Chicken',
    'Burgers',
    'Wraps',
    'Loaded Chicken Fries',
    'Fried Chicken Combos',
    'Momos'
  ];

  return (
    <footer className="bg-[#070709] border-t border-[#1F1F27] text-gray-400 text-sm relative">
      {/* Top red accent stripe */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg shadow-brand-red/30">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-heading text-3xl tracking-wider text-white font-black leading-none block">
                  BITE <span className="text-brand-red">UP</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-brand-gold font-bold">
                  Crispy • Juicy • Fresh
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your favourite neighborhood food shop for shatteringly crispy fried chicken, succulent monster burgers, cheesy loaded fries, and unbeatable value combos.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#141418] border border-[#272732] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#141418] border border-[#272732] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl bg-[#141418] border border-[#272732] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#141418] border border-[#272732] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917200748268"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-brand-red transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Categories (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Popular Categories</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {popularPicks.map((pick, idx) => (
                <li key={idx}>
                  <a
                    href="#menu"
                    className="hover:text-brand-gold transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-brand-red">›</span>
                    <span>{pick}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Store & Hours (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Store Details</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+917200748268" className="hover:text-white text-white font-semibold">
                  +91 72007 48268
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mon – Sun: 11:00 AM – 11:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/917200748268"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A22] border border-[#2F2F3D] px-3.5 py-2 rounded-xl text-xs font-bold text-gray-200 hover:text-white hover:border-brand-red transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Express Order</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1C1C24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">BITE UP</strong> Food Shop. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">Crispy. Juicy. Delicious.</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[#17171D] border border-[#262633] text-gray-400 hover:text-white hover:bg-brand-red hover:border-brand-red transition-all flex items-center justify-center shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
