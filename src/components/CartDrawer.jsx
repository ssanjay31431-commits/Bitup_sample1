import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageSquare, Flame, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onExploreMenu
}) {
  if (!isOpen) return null;

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const FREE_DELIVERY_THRESHOLD = 499;
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : 40;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal > 0 ? subtotal + deliveryFee + taxes : 0;
  const amountToFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  // Generate WhatsApp Order Message
  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = `*🍗 NEW ORDER - BITE UP FAST FOOD*\n\n`;
    message += `*Items Ordered:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    message += `\n*Subtotal:* ₹${subtotal}`;
    message += `\n*Taxes (GST 5%):* ₹${taxes}`;
    message += `\n*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}`;
    message += `\n*Grand Total:* ₹${grandTotal}\n\n`;
    message += `Please confirm my order and share estimated preparation time. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917200748268?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101013] border-l border-[#272730] shadow-2xl flex flex-col justify-between">
          
          {/* Top Bar Header */}
          <div className="p-5 border-b border-[#22222A] flex items-center justify-between bg-[#141418]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-md shadow-brand-red/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">Your Food Cart</h2>
                <p className="text-gray-400 text-xs">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items added
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#1C1C22] text-gray-400 hover:text-white hover:bg-[#282832] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          {cartItems.length > 0 && (
            <div className="px-5 py-3 bg-[#17171D] border-b border-[#22222A]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                {isFreeDelivery ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    You unlocked FREE Delivery!
                  </span>
                ) : (
                  <span className="text-gray-300">
                    Add <span className="text-brand-gold font-bold">₹{amountToFreeDelivery}</span> more for <span className="text-white font-bold">FREE Delivery</span>
                  </span>
                )}
                <span className="text-gray-400 font-mono text-[11px]">
                  {Math.round(deliveryProgress)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#252530] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-gold to-emerald-400 transition-all duration-300"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 rounded-full bg-[#1A1A22] border border-[#2B2B36] flex items-center justify-center text-3xl mb-4 text-gray-500">
                  🍗
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Your cart is empty</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-xs mb-6">
                  Hungry for crispy bites? Explore our fried chicken buckets, juicy burgers, and wraps!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreMenu();
                  }}
                  className="bg-brand-red hover:bg-brand-red-bright text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-brand-red/30 transition-all"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#15151A] border border-[#24242E] rounded-2xl p-3 sm:p-3.5 flex gap-3 items-center hover:border-[#353545] transition-all"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover shrink-0 bg-[#22222A]"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {item.isVeg ? (
                        <span className="w-2.5 h-2.5 rounded-sm border border-emerald-500 inline-block shrink-0 p-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block" />
                        </span>
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-sm border border-red-500 inline-block shrink-0 p-0.5">
                          <span className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-red-500 block" />
                        </span>
                      )}
                      <h4 className="text-white font-bold text-sm truncate leading-snug">
                        {item.name}
                      </h4>
                    </div>

                    <div className="text-xs text-gray-400 mt-0.5">
                      ₹{item.price} each
                    </div>

                    {/* Quantity controls + Item subtotal */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 bg-[#202028] border border-[#2D2D3A] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-[#2A2A36] hover:bg-brand-red text-white flex items-center justify-center transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-brand-red hover:bg-brand-red-bright text-white flex items-center justify-center transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white font-extrabold text-sm font-display">
                          ₹{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-500 hover:text-red-400 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer: Bill Summary & Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#22222A] bg-[#141418] space-y-4">
              
              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span className="text-white font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Taxes (GST 5%)</span>
                  <span className="text-white font-semibold">₹{taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery / Packaging</span>
                  <span className={deliveryFee === 0 ? 'text-emerald-400 font-semibold' : 'text-white font-semibold'}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#24242E] text-base font-black text-white">
                  <span>To Pay</span>
                  <span className="text-brand-gold font-display text-xl">₹{grandTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all uppercase tracking-wider text-sm group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp (Fastest)</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-[#202028] hover:bg-[#2A2A35] text-gray-300 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors"
                  >
                    Add More Items
                  </button>
                  <button
                    onClick={onClearCart}
                    className="px-3 py-2.5 bg-[#202028] hover:bg-red-950/60 text-gray-400 hover:text-red-400 rounded-xl text-xs transition-colors"
                    title="Clear Cart"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="text-center text-[10px] text-gray-500">
                ⚡ Sample client preview: No payment gateway required. Direct WhatsApp order generator enabled.
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
