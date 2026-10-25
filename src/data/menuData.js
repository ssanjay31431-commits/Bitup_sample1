// Menu data for BITE UP Food Shop
// Easy to modify prices, descriptions, and items for the shop owner

export const CATEGORIES = [
  { id: 'all', label: 'All Items', icon: '🍽️' },
  { id: 'fried-chicken', label: 'Fried Chicken', icon: '🍗' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'wraps', label: 'Wraps', icon: '🌯' },
  { id: 'chicken-bites', label: 'Chicken Bites', icon: '🍿' },
  { id: 'snacks', label: 'Snacks', icon: '🍟' },
  { id: 'momos', label: 'Momos', icon: '🥟' },
  { id: 'beverages', label: 'Beverages', icon: '🥤' },
  { id: 'loaded-fries', label: 'Loaded Chicken Fries', icon: '🍟' },
  { id: 'chicken-combos', label: 'Fried Chicken Combos', icon: '🍗' },
  { id: 'burger-combos', label: 'Burger Combos', icon: '🍔' },
  { id: 'wrap-combos', label: 'Wrap Combos', icon: '🌯' },
  { id: 'specials', label: 'BITE UP Specials', icon: '🔥' },
  { id: 'add-ons', label: 'Extra Add-ons', icon: '🧀' },
  { id: 'dips', label: 'Dips & Sauces', icon: '🥣' }
];

export const MENU_ITEMS = [
  // 1. Fried Chicken
  {
    id: 'fc-1',
    name: 'Classic Crispy Fried Chicken (2 Pcs)',
    category: 'fried-chicken',
    price: 189,
    originalPrice: 220,
    isVeg: false,
    rating: 4.9,
    badge: 'Bestseller',
    spicyLevel: 1, // 0 to 3
    description: 'Golden, extra-crunchy exterior with juicy, tender chicken marinated in 11 secret herbs & spices.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80',
    pieces: '2 Pieces'
  },
  {
    id: 'fc-2',
    name: 'Hot & Fiery Chicken Drumsticks (3 Pcs)',
    category: 'fried-chicken',
    price: 279,
    originalPrice: 320,
    isVeg: false,
    rating: 4.8,
    badge: 'Spicy Hot',
    spicyLevel: 3,
    description: 'Tossed in Nashville hot ghost chili rub with fresh cracked black pepper and garlic glaze.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80',
    pieces: '3 Drumsticks'
  },
  {
    id: 'fc-3',
    name: 'Crunchy Chicken Strips / Tenders (5 Pcs)',
    category: 'fried-chicken',
    price: 229,
    originalPrice: 260,
    isVeg: false,
    rating: 4.9,
    badge: 'Chef Choice',
    spicyLevel: 1,
    description: '100% whole white-meat chicken tenders, hand-breaded and double-fried till shatteringly crisp.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80',
    pieces: '5 Strips'
  },
  {
    id: 'fc-4',
    name: 'Smoky Peri Peri Fried Chicken (4 Pcs)',
    category: 'fried-chicken',
    price: 349,
    originalPrice: 399,
    isVeg: false,
    rating: 4.7,
    badge: 'Popular',
    spicyLevel: 2,
    description: 'Crispy fried bone-in chicken generously dusted with authentic African Bird’s Eye peri-peri seasoning.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80',
    pieces: '4 Pieces'
  },

  // 2. Burgers
  {
    id: 'bg-1',
    name: 'BITE UP Monster Crispy Zinger Burger',
    category: 'burgers',
    price: 219,
    originalPrice: 259,
    isVeg: false,
    rating: 5.0,
    badge: 'Signature',
    spicyLevel: 2,
    description: 'Jumbo spicy fried chicken breast patty, melted American cheddar, shredded iceberg lettuce, and spicy mayo on toasted brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-2',
    name: 'Double Smash Beef / Mutton Smash Burger',
    category: 'burgers',
    price: 299,
    originalPrice: 349,
    isVeg: false,
    rating: 4.9,
    badge: 'Must Try',
    spicyLevel: 1,
    description: 'Two smashed patties with caramelized onions, double melted cheese, dill pickles, and secret house burger relish.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-3',
    name: 'Firecracker Ghost Pepper Chicken Burger',
    category: 'burgers',
    price: 239,
    originalPrice: 279,
    isVeg: false,
    rating: 4.7,
    badge: 'Extra Spicy',
    spicyLevel: 3,
    description: 'Crispy chicken fillet dunked in hot ghost pepper sauce, pickled jalapeños, onion rings, and cooling garlic dip.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-4',
    name: 'Supreme Cheesy Veg Crunch Burger',
    category: 'burgers',
    price: 169,
    originalPrice: 199,
    isVeg: true,
    rating: 4.8,
    badge: 'Veg Best',
    spicyLevel: 1,
    description: 'Crispy herb-crusted potato and corn patty loaded with melted mozzarella, coleslaw, and tangy cocktail sauce.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bg-5',
    name: 'Paneer Makhani Crispy Burger',
    category: 'burgers',
    price: 189,
    originalPrice: 219,
    isVeg: true,
    rating: 4.7,
    badge: 'Veg Special',
    spicyLevel: 1,
    description: 'Crispy battered paneer block drizzled with rich butter makhani sauce and mint mayo in sesame brioche bun.',
    image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?auto=format&fit=crop&w=700&q=80'
  },

  // 3. Wraps
  {
    id: 'wp-1',
    name: 'Crispy Chicken Ranch Tortilla Wrap',
    category: 'wraps',
    price: 189,
    originalPrice: 220,
    isVeg: false,
    rating: 4.8,
    badge: 'Popular',
    spicyLevel: 1,
    description: 'Crunchy fried chicken strips wrapped in a warm grilled tortilla with lettuce, tomatoes, and herb garlic ranch sauce.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'wp-2',
    name: 'Fiery Peri-Peri Chicken Wrap',
    category: 'wraps',
    price: 199,
    originalPrice: 230,
    isVeg: false,
    rating: 4.9,
    badge: 'Spicy',
    spicyLevel: 2,
    description: 'Spiced chicken bites with fiery peri-peri drizzle, bell peppers, crunchy onions, and melted cheese blend.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'wp-3',
    name: 'Smoked Paneer Tikka Tortilla Wrap',
    category: 'wraps',
    price: 179,
    originalPrice: 209,
    isVeg: true,
    rating: 4.7,
    badge: 'Veg Hit',
    spicyLevel: 1,
    description: 'Char-grilled cottage cheese cubes wrapped with crisp greens, capsicum, onion, and mint chutney mayo.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80'
  },

  // 4. Chicken Bites
  {
    id: 'cb-1',
    name: 'BITE UP Signature Popcorn Chicken',
    category: 'chicken-bites',
    price: 169,
    originalPrice: 199,
    isVeg: false,
    rating: 4.9,
    badge: 'Kids & Adults Fav',
    spicyLevel: 1,
    description: 'Bite-sized chunks of tender chicken breast marinated, coated in seasoned batter, and fried golden crisp.',
    image: 'https://images.unsplash.com/photo-1527477378408-1bc097a304b3?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cb-2',
    name: 'Dynamite Spicy Chicken Poppers',
    category: 'chicken-bites',
    price: 189,
    originalPrice: 219,
    isVeg: false,
    rating: 4.8,
    badge: 'Chef Special',
    spicyLevel: 3,
    description: 'Crunchy chicken bites tossed in our famous Japanese-inspired creamy spicy dynamite sauce.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cb-3',
    name: 'Honey Glazed BBQ Chicken Nuggets (8 Pcs)',
    category: 'chicken-bites',
    price: 179,
    originalPrice: 209,
    isVeg: false,
    rating: 4.7,
    badge: 'Sweet & Savory',
    spicyLevel: 0,
    description: 'Crisp chicken nuggets coated in sweet smoky honey barbecue sauce with toasted sesame seeds.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80'
  },

  // 5. Snacks
  {
    id: 'sn-1',
    name: 'Golden Salted French Fries (Large)',
    category: 'snacks',
    price: 99,
    originalPrice: 120,
    isVeg: true,
    rating: 4.7,
    badge: 'Crispy Classic',
    spicyLevel: 0,
    description: 'Thick cut, double-fried crispy potato batons lightly tossed in fine sea salt.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sn-2',
    name: 'Spicy Peri Peri Seasoned Fries',
    category: 'snacks',
    price: 129,
    originalPrice: 149,
    isVeg: true,
    rating: 4.9,
    badge: 'Bestseller',
    spicyLevel: 2,
    description: 'Crisp golden fries tossed with zesty red peri-peri spice mix. Shaken fresh to order.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sn-3',
    name: 'Crisp Mozzarella Cheese Sticks (5 Pcs)',
    category: 'snacks',
    price: 179,
    originalPrice: 210,
    isVeg: true,
    rating: 4.8,
    badge: 'Cheese Pull',
    spicyLevel: 0,
    description: 'Gooey melted mozzarella cheese inside a crispy Italian herb breading, served with marinara dip.',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sn-4',
    name: 'Golden Crusted Onion Rings (8 Pcs)',
    category: 'snacks',
    price: 139,
    originalPrice: 160,
    isVeg: true,
    rating: 4.6,
    badge: 'Crunchy',
    spicyLevel: 0,
    description: 'Fresh sweet onion rings in a light beer-style batter fried to golden perfection.',
    image: 'https://images.unsplash.com/photo-1639024471287-032f66e66e85?auto=format&fit=crop&w=700&q=80'
  },

  // 6. Momos
  {
    id: 'mo-1',
    name: 'Crispy Kurkure Chicken Momos (6 Pcs)',
    category: 'momos',
    price: 189,
    originalPrice: 220,
    isVeg: false,
    rating: 4.9,
    badge: 'Crowd Fav',
    spicyLevel: 2,
    description: 'Succulent spiced chicken momos coated in crunchy cornflake crust, served with fiery red chutney and mayo.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'mo-2',
    name: 'Steamed Himalayan Chicken Momos (6 Pcs)',
    category: 'momos',
    price: 149,
    originalPrice: 179,
    isVeg: false,
    rating: 4.8,
    badge: 'Authentic',
    spicyLevel: 1,
    description: 'Juicy minced chicken dumpling parcel steamed to perfection, bursting with aromatics.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'mo-3',
    name: 'Paneer Schezwan Fried Momos (6 Pcs)',
    category: 'momos',
    price: 169,
    originalPrice: 199,
    isVeg: true,
    rating: 4.7,
    badge: 'Veg Pick',
    spicyLevel: 2,
    description: 'Crisp golden fried momos stuffed with spiced cottage cheese and sautéed spring veggies.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80'
  },

  // 7. Beverages
  {
    id: 'bv-1',
    name: 'Chilled Coke / Sprite Can (330ml)',
    category: 'beverages',
    price: 49,
    originalPrice: 60,
    isVeg: true,
    rating: 4.9,
    badge: 'Ice Cold',
    spicyLevel: 0,
    description: 'Classic chilled fizzy refreshment to complement your crispy fried bites.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bv-2',
    name: 'Fresh Mint Lime Virgin Mojito',
    category: 'beverages',
    price: 99,
    originalPrice: 129,
    isVeg: true,
    rating: 4.8,
    badge: 'Refreshing',
    spicyLevel: 0,
    description: 'Crushed fresh garden mint, tangy key limes, chilled sparkling soda, and brown sugar.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bv-3',
    name: 'Thick Belgian Chocolate Milkshake',
    category: 'beverages',
    price: 149,
    originalPrice: 179,
    isVeg: true,
    rating: 4.9,
    badge: 'Thick & Rich',
    spicyLevel: 0,
    description: 'Rich dark Belgian cocoa blended with premium vanilla cream, chocolate fudge, and choco chips.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bv-4',
    name: 'Iced Peach Lemonade Tea',
    category: 'beverages',
    price: 89,
    originalPrice: 119,
    isVeg: true,
    rating: 4.7,
    badge: 'Chilled',
    spicyLevel: 0,
    description: 'Brewed black tea infused with sweet wild peach syrup and fresh lemon slice.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80'
  },

  // 8. Loaded Chicken Fries
  {
    id: 'lf-1',
    name: 'The Ultimate Cheesy Chicken Loaded Fries',
    category: 'loaded-fries',
    price: 249,
    originalPrice: 289,
    isVeg: false,
    rating: 5.0,
    badge: 'Bestseller 🔥',
    spicyLevel: 1,
    description: 'Bed of crispy fries crowned with crunchy chicken chunks, liquid cheddar cheese sauce, jalapeños, and signature chipotle mayo.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'lf-2',
    name: 'Nashville Hot & Spicy Chicken Fries',
    category: 'loaded-fries',
    price: 269,
    originalPrice: 309,
    isVeg: false,
    rating: 4.9,
    badge: 'Hot & Loaded',
    spicyLevel: 3,
    description: 'Seasoned fries drenched in spicy cheese sauce, crispy hot tenders, diced onions, pickled gherkins, and sriracha swirl.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'lf-3',
    name: 'BBQ Smoked Chicken & Bacon Fries',
    category: 'loaded-fries',
    price: 259,
    originalPrice: 299,
    isVeg: false,
    rating: 4.8,
    badge: 'Smoky',
    spicyLevel: 1,
    description: 'Golden fries layered with shredded chicken, smoky barbecue glaze, melted mozzarella, and green scallions.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80'
  },

  // 9. Fried Chicken Combos
  {
    id: 'fcc-1',
    name: 'Solo Crispy Chicken Box Meal',
    category: 'chicken-combos',
    price: 299,
    originalPrice: 379,
    isVeg: false,
    rating: 4.9,
    badge: 'Save ₹80',
    spicyLevel: 1,
    description: '2 pcs Crispy Fried Chicken + Regular French Fries + 1 Signature Dip + 1 Chilled Beverage.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80',
    includes: ['2 Pcs Chicken', 'Regular Fries', '1 Dip', 'Chilled Drink']
  },
  {
    id: 'fcc-2',
    name: 'BITE UP Mega Feast Chicken Bucket (8 Pcs)',
    category: 'chicken-combos',
    price: 699,
    originalPrice: 849,
    isVeg: false,
    rating: 5.0,
    badge: 'Family Saver',
    spicyLevel: 1,
    description: '8 pcs Crispy & Juicy Fried Chicken + Large Peri-Peri Fries + 3 Signature Dips + 2 Chilled Soft Drinks.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80',
    includes: ['8 Pcs Chicken', 'Large Peri Fries', '3 Dips', '2 Drinks']
  },
  {
    id: 'fcc-3',
    name: 'Fiery Wings & Strips Platter Combo',
    category: 'chicken-combos',
    price: 449,
    originalPrice: 539,
    isVeg: false,
    rating: 4.8,
    badge: 'Save 20%',
    spicyLevel: 2,
    description: '6 Spicy Crispy Wings + 4 Crunchy Tenders + 2 Dips + 2 Chilled Cokes.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80',
    includes: ['6 Wings', '4 Tenders', '2 Dips', '2 Drinks']
  },

  // 10. Burger Combos
  {
    id: 'bgc-1',
    name: 'Monster Zinger Burger Combo Meal',
    category: 'burger-combos',
    price: 329,
    originalPrice: 409,
    isVeg: false,
    rating: 5.0,
    badge: 'Top Pick',
    spicyLevel: 2,
    description: '1 Monster Zinger Burger + 1 Crispy Fried Drumstick + Large Fries + Chilled Soft Drink.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    includes: ['Zinger Burger', '1 Drumstick', 'Large Fries', 'Drink']
  },
  {
    id: 'bgc-2',
    name: 'Twin Smash Burger Duo Combo',
    category: 'burger-combos',
    price: 499,
    originalPrice: 620,
    isVeg: false,
    rating: 4.9,
    badge: 'Couples Fav',
    spicyLevel: 1,
    description: '2 Smash Burgers + 1 Cheesy Loaded Fries + 2 Chilled Soft Drinks.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80',
    includes: ['2 Burgers', '1 Cheesy Loaded Fries', '2 Drinks']
  },
  {
    id: 'bgc-3',
    name: 'Supreme Veg Crunch Burger Combo',
    category: 'burger-combos',
    price: 259,
    originalPrice: 329,
    isVeg: true,
    rating: 4.7,
    badge: 'Veg Value',
    spicyLevel: 1,
    description: '1 Veg Crunch Burger + Peri-Peri Fries + 4 Pcs Paneer Momos + Chilled Mojito.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80',
    includes: ['Veg Burger', 'Peri Fries', '4 Momos', 'Mojito']
  },

  // 11. Wrap Combos
  {
    id: 'wpc-1',
    name: 'Crispy Chicken Wrap Box Meal',
    category: 'wrap-combos',
    price: 289,
    originalPrice: 359,
    isVeg: false,
    rating: 4.8,
    badge: 'Save ₹70',
    spicyLevel: 1,
    description: '1 Crispy Chicken Ranch Wrap + Popcorn Chicken + Salted Fries + 1 Chilled Beverage.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80',
    includes: ['Chicken Wrap', 'Popcorn Chicken', 'Fries', 'Drink']
  },
  {
    id: 'wpc-2',
    name: 'Smoked Paneer Tikka Wrap Meal',
    category: 'wrap-combos',
    price: 269,
    originalPrice: 339,
    isVeg: true,
    rating: 4.7,
    badge: 'Veg Combo',
    spicyLevel: 1,
    description: '1 Paneer Tikka Wrap + Peri-Peri Fries + 3 Pcs Mozzarella Cheese Sticks + Soft Drink.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80',
    includes: ['Paneer Wrap', 'Peri Fries', 'Cheese Sticks', 'Drink']
  },

  // 12. BITE UP Specials
  {
    id: 'sp-1',
    name: 'The BITE UP Colossal Tower Platter',
    category: 'specials',
    price: 899,
    originalPrice: 1099,
    isVeg: false,
    rating: 5.0,
    badge: 'Ultimate Feast ⭐',
    spicyLevel: 2,
    description: '4 Pcs Fried Chicken + 2 Zinger Burgers + 1 Loaded Chicken Fries + 6 Popcorn Bites + 3 Soft Drinks + 3 Dips.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    includes: ['4 Pcs Chicken', '2 Burgers', 'Loaded Fries', '6 Popcorn Bites', '3 Drinks']
  },
  {
    id: 'sp-2',
    name: 'Ghost Pepper Inferno Challenge Bites',
    category: 'specials',
    price: 249,
    originalPrice: 299,
    isVeg: false,
    rating: 4.9,
    badge: 'Extreme Hot 🔥',
    spicyLevel: 3,
    description: 'Warning: For real spice lovers only. Glazed with pure Bhut Jolokia ghost pepper honey sauce.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sp-3',
    name: 'Truffle Butter Glazed Crunch Burger',
    category: 'specials',
    price: 319,
    originalPrice: 379,
    isVeg: false,
    rating: 4.9,
    badge: 'Gourmet Special',
    spicyLevel: 1,
    description: 'Crispy fried chicken breast infused with black truffle butter, sautéed mushrooms, smoked gouda, and baby arugula.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },

  // 13. Extra Add-ons
  {
    id: 'ao-1',
    name: 'Extra Melted Cheddar Cheese Slice',
    category: 'add-ons',
    price: 30,
    originalPrice: 40,
    isVeg: true,
    rating: 4.8,
    badge: 'Add-on',
    spicyLevel: 0,
    description: 'Add a warm, gooey slice of rich yellow American cheddar to any burger or wrap.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ao-2',
    name: 'Pickled Jalapeño Peppers Portion',
    category: 'add-ons',
    price: 25,
    originalPrice: 35,
    isVeg: true,
    rating: 4.6,
    badge: 'Tangy Kick',
    spicyLevel: 2,
    description: 'Fresh sliced tangy pickled jalapeños for that extra spicy crunch.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ao-3',
    name: 'Toasted Butter Brioche Bun',
    category: 'add-ons',
    price: 45,
    originalPrice: 60,
    isVeg: true,
    rating: 4.7,
    badge: 'Freshly Baked',
    spicyLevel: 0,
    description: 'Extra golden brioche bun toasted with pure country butter.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
  },

  // 14. Dips
  {
    id: 'dp-1',
    name: 'BITE UP Signature Secret Mayo Dip',
    category: 'dips',
    price: 29,
    originalPrice: 39,
    isVeg: true,
    rating: 5.0,
    badge: 'House Secret',
    spicyLevel: 1,
    description: 'Our proprietary creamy garlic mayo blend with smoked paprika and mild spices.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dp-2',
    name: 'Warm Liquid Cheddar Cheese Dip',
    category: 'dips',
    price: 39,
    originalPrice: 49,
    isVeg: true,
    rating: 4.9,
    badge: 'Super Cheesy',
    spicyLevel: 0,
    description: 'Velvety melted cheese sauce perfect for dunking fries, chicken tenders, and momos.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dp-3',
    name: 'Ghost Chili Hot Lava Dip',
    category: 'dips',
    price: 35,
    originalPrice: 45,
    isVeg: true,
    rating: 4.8,
    badge: 'Fiery Dip 🔥',
    spicyLevel: 3,
    description: 'Slow-simmered hot sauce made with real ghost peppers, smoked garlic, and vinegar.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'dp-4',
    name: 'Tangy Honey Mustard Sauce',
    category: 'dips',
    price: 29,
    originalPrice: 39,
    isVeg: true,
    rating: 4.7,
    badge: 'Sweet & Tangy',
    spicyLevel: 0,
    description: 'Dijon mustard balanced with pure golden wildflower honey.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  }
];

// Special featured combos for Section 4
export const FEATURED_COMBOS = [
  {
    id: 'combo-featured-1',
    title: 'The Monster Zinger Meal',
    category: 'Burger Combo',
    price: 329,
    originalPrice: 409,
    discount: 'SAVE 20%',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Monster Zinger Burger + 1 Crispy Fried Drumstick + Large Fries + Chilled Drink.',
    features: ['Crispy Jumbo Patty', 'Signature Dip Included', 'Choice of Soft Drink']
  },
  {
    id: 'combo-featured-2',
    title: 'BITE UP Mega Feast Bucket',
    category: 'Chicken Feast',
    price: 699,
    originalPrice: 849,
    discount: 'BEST VALUE',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    description: '8 pcs Crispy & Juicy Fried Chicken + Large Peri-Peri Fries + 3 Signature Dips + 2 Drinks.',
    features: ['8 Crispy Bone-in Cuts', '3 Premium Dips', 'Serves 3-4 People']
  },
  {
    id: 'combo-featured-3',
    title: 'Fiery Wrap & Crunch Box',
    category: 'Wrap Combo',
    price: 289,
    originalPrice: 359,
    discount: 'SAVE ₹70',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy Chicken Ranch Wrap + Popcorn Chicken Bucket + Salted French Fries + Drink.',
    features: ['Flaky Grilled Tortilla', 'Snack Popcorn Chicken', 'Chilled Drink Included']
  },
  {
    id: 'combo-featured-4',
    title: 'Cheesy Overload Tower Box',
    category: 'Special Platter',
    price: 899,
    originalPrice: 1099,
    discount: 'WEEKEND SPECIAL',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    description: '4 Pcs Fried Chicken + 2 Zinger Burgers + Cheesy Loaded Fries + 6 Popcorn Bites + 3 Drinks.',
    features: ['Ultimate Party Platter', 'Loaded Cheesy Fries', 'Serves 4-5 Foodies']
  }
];
