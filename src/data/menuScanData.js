export const menuScanImages = [
  {
    id: 1,
    title: "Tiffins, Coolers & Shakes Menu",
    category: "Breakfast, Drinks & Desserts",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
    description: "Mutton Dosa, Natukodi Palav, Cool Drinks, Thick Shakes, Ice Creams & Lassis"
  },
  {
    id: 2,
    title: "Veg Curries & Starters Menu",
    category: "Pure Veg Delights",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1200&auto=format&fit=crop&q=80",
    description: "Paneer Butter Masala, Gobi Manchurian, Mushroom Pepper, Egg Curries & Rotis"
  },
  {
    id: 3,
    title: "Tandoori, Rice & Seafood Menu",
    category: "Khoja, Tandoori & Rice",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&auto=format&fit=crop&q=80",
    description: "Tandoori Chicken, Kaju Roast, Prawns Fry, Fish Tikka, Rotis & Veg Rice"
  },
  {
    id: 4,
    title: "Non-Veg Starters & Biryani Menu",
    category: "Chef Non-Veg Specials",
    image: "/pepper_chicken.png",
    description: "Signature Pepper Chicken, Chicken 65, Lollipop, Biryanis & Spicy Curries"
  }
];

export const menuCategories = [
  { id: 'all', label: 'All Dishes' },
  { id: 'family', label: 'Family Favorites' },
  { id: 'specials', label: "Chef's Specials" },
  { id: 'non-veg', label: 'Non-Veg Delights' },
  { id: 'veg', label: 'Veg & Paneer' },
  { id: 'tiffins-rice', label: 'Tiffins & Rice' },
  { id: 'beverages', label: 'Shakes & Coolers' }
];

export const menuItems = [
  {
    id: 1,
    name: "Signature Pepper Chicken",
    category: "specials",
    tag: "CHEF'S SPECIAL",
    price: "₹220",
    halfPrice: "₹140",
    spicyLevel: "High Spice",
    description: "World-famous starter with fresh tender chicken roasted in freshly ground black pepper & South Indian herbs.",
    rating: 4.9,
    reviewsCount: 340,
    image: "/pepper_chicken.png"
  },
  {
    id: 2,
    name: "Natukodi Country Chicken Palav",
    category: "family",
    tag: "FAMILY FAVORITE",
    price: "₹200",
    halfPrice: "₹120",
    spicyLevel: "Medium Spice",
    description: "Authentic country chicken palav cooked slow in desi ghee and hand-picked spices, served with gravy & raita.",
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Slow-Cooked Mutton Fry",
    category: "non-veg",
    tag: "BEST SELLER",
    price: "₹240",
    halfPrice: "₹140",
    spicyLevel: "Rich Spice",
    description: "Tender lamb pieces marinated in ground masalas, pan-fried with caramelized onions and roasted garlic.",
    rating: 4.7,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Paneer Butter Masala & Rotis",
    category: "family",
    tag: "KIDS & FAMILY",
    price: "₹180",
    spicyLevel: "Mild Creamy",
    description: "Rich tomato-butter gravy with soft cottage cheese cubes, served alongside piping hot butter rotis.",
    rating: 4.6,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Crispy Spicy Chicken 65",
    category: "non-veg",
    tag: "MUST TRY",
    price: "₹210",
    halfPrice: "₹130",
    spicyLevel: "Hot & Tangy",
    description: "Deep-fried marinated boneless chicken tossed with green chilies, curry leaves, and secret house spice mix.",
    rating: 4.8,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Kaju Butter Paneer Masala",
    category: "veg",
    tag: "RICH & VEG",
    price: "₹190",
    spicyLevel: "Mild Spicy",
    description: "Roasted cashew nuts and soft cottage cheese simmered in a velvety cashew-tomato gravy.",
    rating: 4.7,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Aromatic Mushroom Fried Rice",
    category: "tiffins-rice",
    tag: "DELICIOUS",
    price: "₹160",
    spicyLevel: "Mild Flavorful",
    description: "Wok-tossed fragrant basmati rice cooked with fresh button mushrooms, spring onion, and herbs.",
    rating: 4.5,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Nellore Special Dosa & Parota",
    category: "family",
    tag: "FAMILY BREAKFAST",
    price: "₹90",
    spicyLevel: "Authentic",
    description: "Crispy ghee dosa or flaky layered parotas paired with hot sambhar and fresh coconut chutney.",
    rating: 4.7,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Zesty Lime Mint Mojito",
    category: "beverages",
    tag: "CHILLED",
    price: "₹80",
    spicyLevel: "Cooling Refreshment",
    description: "Freshly muddled mint leaves, squeezed lime juice, and chilled sparkling soda for the ultimate sip.",
    rating: 4.8,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Dry Fruit Rich Lassi & Shakes",
    category: "family",
    tag: "KIDS DELIGHT",
    price: "₹90",
    spicyLevel: "Sweet Indulgence",
    description: "Thick hand-churned yogurt lassi garnished with sliced almonds, cashews, and saffron notes.",
    rating: 4.9,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
  }
];
