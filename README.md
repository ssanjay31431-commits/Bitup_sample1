# BITE UP - Modern Food Shop Website UI

A premium, responsive, modern fast-food restaurant web UI built with **React**, **Vite**, and **Tailwind CSS**, designed for **BITE UP**.

![BITE UP Preview](https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80)

---

## 🍗 Key Highlights & Features

- **Brand & Theme:** Deep rich black background (`#0A0A0A`), crisp white text, bold red highlights (`#E50914`), and warm golden accents.
- **Hero Section:** High-impact display typography (*“CRISPY. JUICY. DELICIOUS.”* / *“Your Favourite Bites, Made Fresh.”*), appetizing visual platter, and quick call-to-actions.
- **14 Menu Categories:**
  1. Fried Chicken
  2. Burgers
  3. Wraps
  4. Chicken Bites
  5. Snacks
  6. Momos
  7. Beverages
  8. Loaded Chicken Fries
  9. Fried Chicken Combos
  10. Burger Combos
  11. Wrap Combos
  12. BITE UP Specials
  13. Extra Add-ons
  14. Dips
- **Real-Time Interactive Menu:** Instant search bar, Diet toggle (Veg / Non-Veg / All), category filter tabs, spice level badges, and sorting.
- **Card Quantity Stepper:** Items can be added to the cart directly with inline quantity controls (`-` / count / `+`).
- **Special Combos Section:** Highlighting mega feasts, zinger combos, and platter deals with red discount badges.
- **Slide-Over Shopping Cart Drawer:**
  - Real-time cart calculations (Subtotal, GST 5%, Delivery Fee, Grand Total)
  - Free delivery threshold progress bar (Free shipping on orders above ₹499)
  - One-click **WhatsApp Direct Order Generator** formatted with customer's exact items
- **About Section:** Brand story, 11 secret herbs & spices, fresh-never-frozen guarantee.
- **Contact & Store Section:** Shop address, phone orders, WhatsApp chat, opening hours, and a quick inquiry form.
- **Responsive Navigation & Footer:** Sticky navbar with glassmorphism blur, mobile drawer, social links, and back-to-top button.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 How to Update Prices & Food Items

All menu items, categories, and featured combos are neatly organized in a single file:
👉 `src/data/menuData.js`

To change a price, simply update the `price` and `originalPrice` fields:
```javascript
{
  id: 'fc-1',
  name: 'Classic Crispy Fried Chicken (2 Pcs)',
  price: 189,        // <--- Update current price in ₹
  originalPrice: 220, // <--- Optional strikethrough price
  // ...
}
```

---

## 🛠️ Tech Stack
- **Framework:** React 18
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Bebas Neue, Outfit, Plus Jakarta Sans
