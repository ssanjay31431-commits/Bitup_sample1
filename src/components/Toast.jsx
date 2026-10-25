import React from 'react';
import { ShoppingBag, CheckCircle, ArrowRight, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="bg-[#18181F] border border-brand-red/60 text-white p-3.5 rounded-2xl shadow-2xl shadow-brand-red/30 flex items-center gap-3.5 max-w-sm backdrop-blur-md">
        
        {/* Item image or icon */}
        {toast.image ? (
          <img
            src={toast.image}
            alt={toast.name}
            className="w-11 h-11 rounded-xl object-cover shrink-0 border border-white/10"
          />
        ) : (
          <div className="w-11 h-11 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
        )}

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
            <span>✓ Added to cart</span>
          </div>
          <div className="text-sm font-bold truncate text-white">
            {toast.name}
          </div>
          <div className="text-xs text-brand-gold font-bold">
            ₹{toast.price}
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          className="bg-brand-red hover:bg-brand-red-bright text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1 shadow-md shrink-0 transition-transform hover:scale-105"
        >
          <span>Cart</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
