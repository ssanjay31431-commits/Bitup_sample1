import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#18181D] border border-brand-red/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Store & Express Pickup</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FIND US & <span className="text-brand-red">GET IN TOUCH</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Craving crispy chicken right now? Call our express counter or message us on WhatsApp for rapid pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Address */}
            <div className="bg-[#141418] border border-[#24242E] rounded-2xl p-5 hover:border-brand-red/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1">Shop Address</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008
              </p>
              <span className="inline-block mt-3 text-[11px] font-semibold text-brand-gold">
                📍 Easy parking & express takeout counter
              </span>
            </div>

            {/* Phone */}
            <div className="bg-[#141418] border border-[#24242E] rounded-2xl p-5 hover:border-brand-red/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1">Phone Orders</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Call for instant kitchen orders & table reservations:
              </p>
              <a
                href="tel:+917200748268"
                className="inline-block mt-2 font-display text-lg font-black text-white hover:text-brand-red transition-colors"
              >
                +91 72007 48268
              </a>
              <span className="block text-[11px] text-gray-500 mt-1">Direct kitchen line</span>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#141418] border border-[#24242E] rounded-2xl p-5 hover:border-brand-red/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1">WhatsApp Chat</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">
                Send your order list directly on WhatsApp for lightning quick reply:
              </p>
              <a
                href="https://wa.me/917200748268?text=Hi%20BITE%20UP,%20I%20would%20like%20to%20order"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat: +91 72007 48268</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-[#141418] border border-[#24242E] rounded-2xl p-5 hover:border-brand-red/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1">Opening Hours</h3>
              <div className="space-y-1 text-xs sm:text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Mon – Thu:</span>
                  <span className="text-white font-bold">11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri – Sun:</span>
                  <span className="text-brand-gold font-bold">11:00 AM – 11:30 PM</span>
                </div>
              </div>
              <span className="block text-[11px] text-gray-500 mt-2">Open all 7 days including holidays</span>
            </div>

            {/* Services badges banner */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#171720] via-[#1A1A24] to-[#171720] border border-[#2B2B38] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-brand-red" />
                Dine-in AC Seating
              </span>
              <span className="flex items-center gap-1.5 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-brand-red" />
                Contactless Takeaway
              </span>
              <span className="flex items-center gap-1.5 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-brand-red" />
                Bulk Party Catering
              </span>
            </div>

          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-5 bg-[#141418] border border-[#24242E] rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-white font-extrabold text-xl mb-1">Send a Quick Message</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Have a question about catering, dietary preferences, or party buckets? Leave us a note.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-base mb-1">Message Sent!</h4>
                <p className="text-gray-300 text-xs">
                  Thank you! Our BITE UP team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A1A22] border border-[#2D2D3A] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 72007 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1A1A22] border border-[#2D2D3A] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Message / Party Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're craving or asking about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A22] border border-[#2D2D3A] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-bright text-white font-black py-3.5 px-4 rounded-xl shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            <div className="mt-4 text-center">
              <span className="text-[10px] text-gray-500">
                🔒 We respect your privacy. No spam guaranteed.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
