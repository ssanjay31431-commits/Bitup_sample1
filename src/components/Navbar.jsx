import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Flame, PhoneCall, ChevronRight } from 'lucide-react';

export default function Navbar({ cartCount, cartTotal, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'menu', 'combos', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Combos', href: '#combos', id: 'combos' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#26262B] py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl tracking-wider text-white font-black leading-none flex items-center gap-1">
                  BITE <span className="text-brand-red">UP</span>
                </span>
                <span className="text-[9px] tracking-widest uppercase text-brand-gold font-bold font-display">
                  Crispy • Juicy • Fresh
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#141417]/80 border border-[#27272E] px-4 py-1.5 rounded-full backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/40'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Phone Quick & Cart Trigger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+917200748268"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white bg-[#18181C] border border-[#26262B] px-3 py-2 rounded-full transition-colors"
                title="Call to Order"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-red" />
                <span>+91 72007 48268</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2.5 bg-gradient-to-r from-brand-red to-brand-red-bright hover:from-brand-red-bright hover:to-brand-red text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-brand-red/35 hover:shadow-brand-red/60 hover:scale-105 transition-all duration-200 active:scale-95 group"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-white transition-transform group-hover:rotate-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-brand-red text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-display">
                  {cartCount > 0 ? `₹${cartTotal}` : 'Cart'}
                </span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-[#161619] border border-[#27272E] text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-3/4 max-w-xs bg-[#101013] border-l border-[#27272E] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#24242A]">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-2xl tracking-wider text-white">
                  BITE <span className="text-brand-red">UP</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-[#18181D] text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeSection === link.id
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-gray-300 hover:bg-[#1A1A20] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#24242A] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-red text-white py-3 rounded-xl font-bold shadow-lg shadow-brand-red/30"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>View Cart ({cartCount} items)</span>
            </button>
            <a
              href="tel:+917200748268"
              className="w-full flex items-center justify-center gap-2 bg-[#1A1A20] border border-[#2E2E38] text-gray-200 py-3 rounded-xl font-semibold text-sm hover:text-white"
            >
              <PhoneCall className="w-4 h-4 text-brand-red" />
              <span>Call: +91 72007 48268</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
