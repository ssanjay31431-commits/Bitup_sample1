import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FeaturedCombos from './components/FeaturedCombos';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('biteup_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('biteup_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  // Cart total calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });

    // Trigger toast
    setToast({
      name: item.name || item.title,
      price: item.price,
      image: item.image,
    });

    // Auto dismiss toast after 3.5 seconds
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Update quantity (+ / -)
  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll to section helper
  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-brand-red selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollTo('menu')}
          onCombosClick={() => scrollTo('combos')}
        />

        <MenuSection
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <FeaturedCombos
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        <AboutSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onCategoryClick={() => scrollTo('menu')} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onExploreMenu={() => scrollTo('menu')}
      />

      {/* Item Added Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Bottom Cart Bar for Mobile & Easy Access */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 sm:hidden w-[90%] max-w-sm">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-gradient-to-r from-brand-red to-brand-red-bright text-white py-3.5 px-5 rounded-2xl shadow-2xl shadow-brand-red/50 flex items-center justify-between font-bold active:scale-98 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-brand-red text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <span className="text-sm font-display">View Cart</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-base font-black">₹{cartTotal}</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-lg">Pay & Order ›</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
