export const diningModes = [
  {
    id: 'classic',
    label: 'Dhaba Classic',
    shortLabel: 'Classic',
    iconName: 'Flame',
    badge: "NELLORE'S #1 RATED HIGHWAY DHABA • 4.1 RATING",
    statusBadge: "LIVE TANDOOR ACTIVE • AC TABLES READY",
    themeClass: 'theme-classic',
    accentColor: '#E65100',
    glowColor: 'rgba(230, 81, 0, 0.4)',
    heroTitlePrefix: "Authentic Nellore Spice,",
    heroHighlight: "Tender Pepper Chicken",
    heroTitleSuffix: "& Rich Dhaba Feasts.",
    heroSubtext: "Step into the warm atmosphere of Simhapuri Dhaba. Fresh hand-ground spices, clay handi slow roasting, and mouth-watering Pepper Chicken served piping hot with ample open parking in South Raju Palem.",
    vibeTagline: "Wood-Fired Hearth & Clay Handi Heritage",
    perks: [
      { icon: "Car", text: "Ample Open Parking (50+ Cars)" },
      { icon: "Utensils", text: "Clean AC & Garden Seating" },
      { icon: "ShieldCheck", text: "Drive-Thru & Express Takeaway" }
    ],
    features: [
      {
        title: "Wood-Fired Live Hearth",
        desc: "Traditional clay ovens firing crispy butter naans, tandoori roasts, and sizzling starters."
      },
      {
        title: "Clay Handi Slow Simmer",
        desc: "Country chicken and rich gravies cooked slowly in earthen pots for deep aromatic flavor."
      },
      {
        title: "Highway Pit-Stop Comfort",
        desc: "Direct access on South Raju Palem highway with fast service and spotless dining areas."
      }
    ],
    curatedPlatter: {
      tag: "CHEF SIGNATURE PLATTER",
      name: "Simhapuri Royal Handi Feast",
      price: "₹380",
      originalPrice: "₹460",
      savings: "Save ₹80",
      description: "Signature Pepper Chicken + Slow-Simmered Handi Palav + 2 Hot Butter Rotis + Raita & Gravy.",
      image: "/pepper_chicken.png",
      idealFor: "1-2 Foodies / Highway Travelers"
    },
    bookingPrefill: {
      type: 'dine-in',
      guests: '2 Persons',
      note: 'Dhaba Classic Seating - Reserve Table with Pepper Chicken Starter'
    }
  },
  {
    id: 'couple',
    label: 'Couple Date',
    shortLabel: 'Couple',
    iconName: 'Heart',
    badge: "CANDLELIT HIGHWAY DATE • COZY AMBIANCE",
    statusBadge: "PRIVATE CORNERS READY • SOFT MUSIC PLAYING",
    themeClass: 'theme-couple',
    accentColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.5)',
    heroTitlePrefix: "Intimate Candlelit Flavors,",
    heroHighlight: "Cozy Corner Booths",
    heroTitleSuffix: "& Soulful Moments For Two.",
    heroSubtext: "Escape the highway rush into a warm, candlelit retreat. Indulge in velvety butter gravies, sharing starters, refreshing coolers, and rich desserts in secluded, peaceful couple dining booths.",
    vibeTagline: "Romantic Seclusion & Sweet Indulgences",
    perks: [
      { icon: "Heart", text: "Secluded Private Corner Tables" },
      { icon: "Sparkles", text: "Candlelit Evening Mood" },
      { icon: "Wine", text: "Complimentary Sweet Treat" }
    ],
    features: [
      {
        title: "Intimate Secluded Tables",
        desc: "Discreet, cozy corner seating designed for quiet conversations and comfortable dining."
      },
      {
        title: "Curated Duo Sharing Combos",
        desc: "Balanced portions featuring mild rich curries, hot soft breads, and signature appetizers."
      },
      {
        title: "Sweet Finish Specials",
        desc: "Rich thick dry-fruit mango lassis, kulfis, and decadent desserts made for sharing."
      }
    ],
    curatedPlatter: {
      tag: "DATE NIGHT SPECIAL COMBO",
      name: "Romantic Duo Sharing Platter",
      price: "₹420",
      originalPrice: "₹520",
      savings: "Save ₹100",
      description: "Tender Pepper Chicken Starter + Velvet Butter Paneer Masala + 2 Butter Naans + 2 Thick Mango Lassis + Complimentary Dessert.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
      idealFor: "2 Persons (Romantic Date)"
    },
    bookingPrefill: {
      type: 'dine-in',
      guests: '2 Persons',
      note: 'Couple Date Night - Request Quiet Secluded Corner / Candlelit Table'
    }
  },
  {
    id: 'family',
    label: 'Family Feast',
    shortLabel: 'Family',
    iconName: 'Users',
    badge: "100% FAMILY FRIENDLY AC HALLS • KIDS SPECIALS",
    statusBadge: "AC FAMILY HALL ACTIVE • HIGH CHAIRS AVAILABLE",
    themeClass: 'theme-family',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    heroTitlePrefix: "Generous Family Handis,",
    heroHighlight: "Cool AC Comfort",
    heroTitleSuffix: "& Feasts Loved By Every Age.",
    heroSubtext: "Gather the whole family in our spotless air-conditioned halls. From mild creamy paneer and sweet thick shakes for the little ones to fiery country chicken for the elders, every generation dines happy.",
    vibeTagline: "Clean, Spacious Comfort & Multi-Generational Feasts",
    perks: [
      { icon: "Users", text: "Spacious AC Family Halls" },
      { icon: "Sparkles", text: "Kids Special Mild Dishes & Shakes" },
      { icon: "ShieldCheck", text: "100% Sanitized & Safe Parking" }
    ],
    features: [
      {
        title: "Private AC Family Halls",
        desc: "Sound-insulated, chilled halls with large 6-8 seater tables for relaxed family celebrations."
      },
      {
        title: "Kid-Approved Mild Delights",
        desc: "Non-spicy butter gravies, crispy dosas, sweet lassis, fruit shakes, and scoops of ice cream."
      },
      {
        title: "Grand Sharing Handis",
        desc: "Over-flowing family clay pots of Natukodi Palav and aromatic curries served with love."
      }
    ],
    curatedPlatter: {
      tag: "GRAND FAMILY MAHARAJA FEAST",
      name: "Simhapuri Royal Family Banquet",
      price: "₹799",
      originalPrice: "₹960",
      savings: "Save ₹161",
      description: "1 Large Natukodi Chicken Palav Handi + 1 Full Pepper Chicken + 1 Paneer Butter Masala + 6 Butter Rotis + 4 Dry Fruit Lassis.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80",
      idealFor: "4-6 Family Members"
    },
    bookingPrefill: {
      type: 'dine-in',
      guests: '4 Persons Family',
      note: 'Family Dinner - Request AC Family Hall Table with High Comfort Seating'
    }
  },
  {
    id: 'friends',
    label: 'Friends Hangout',
    shortLabel: 'Friends',
    iconName: 'Sparkles',
    badge: "ULTIMATE SQUAD HIGHWAY STOP • HIGH ENERGY VIBES",
    statusBadge: "FAST SQUAD SERVICE • SIZZLING STARTERS ACTIVE",
    themeClass: 'theme-friends',
    accentColor: '#FF5722',
    glowColor: 'rgba(255, 87, 34, 0.45)',
    heroTitlePrefix: "Extra Spicy Starters,",
    heroHighlight: "Sizzling Biryani Buckets",
    heroTitleSuffix: "& Unstoppable Squad Laughs.",
    heroSubtext: "Pull over with your gang for sizzling hot Pepper Chicken, fiery Chicken 65, endless butter tandoori rotis, chilled mint mojitos, and high-energy highway vibes with lightning-fast table service.",
    vibeTagline: "High-Energy Vibes, Flaming Spice & Late Night Laughs",
    perks: [
      { icon: "Flame", text: "Extra Spicy Starters Challenge" },
      { icon: "Zap", text: "Lightning Fast Table Refills" },
      { icon: "Utensils", text: "Chilled Mojito Pitchers & Drinks" }
    ],
    features: [
      {
        title: "High-Spice Flavor Explosions",
        desc: "Nellore's spiciest Pepper Chicken, Kaju Chicken Roast, and crispy spicy appetizers."
      },
      {
        title: "Outdoor & Breezy Seating",
        desc: "Open-air tables where your squad can laugh, cheer, and feast late into the night."
      },
      {
        title: "Squad Sharing Buckets",
        desc: "Huge platters loaded with crispy starters and spiced rice designed for group munching."
      }
    ],
    curatedPlatter: {
      tag: "SQUAD FIRE & BIRYANI COMBO",
      name: "Ultimate Highway Gang Platter",
      price: "₹899",
      originalPrice: "₹1,080",
      savings: "Save ₹181",
      description: "2 Full Pepper Chickens + 2 Natukodi Palavs + 1 Crispy Chicken 65 + 4 Zesty Lime Mint Mojitos.",
      image: "/pepper_chicken.png",
      idealFor: "4-6 Hungry Friends"
    },
    bookingPrefill: {
      type: 'dine-in',
      guests: '6+ Large Group',
      note: 'Friends Squad Hangout - Fast Spicy Starters & Outdoor / High-Energy Seating'
    }
  },
  {
    id: 'gettogether',
    label: 'Get-Together / Party',
    shortLabel: 'Party',
    iconName: 'Wine',
    badge: "CELEBRATIONS & BIRTHDAY BASHES • DEDICATED PARTY ZONE",
    statusBadge: "PARTY HALL READY • CUSTOM BUFFETS AVAILABLE",
    themeClass: 'theme-gettogether',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    heroTitlePrefix: "Celebrate Big Moments",
    heroHighlight: "With Grand Group Feasts",
    heroTitleSuffix: "& Dedicated Party Banquet Zones.",
    heroSubtext: "Turn birthdays, college reunions, office get-togethers, and milestone celebrations into culinary fiestas. Enjoy dedicated banquet zones, customized buffet menus, and personal attendant service.",
    vibeTagline: "Grand Banquets, Birthday Bashes & VIP Group Care",
    perks: [
      { icon: "Gift", text: "Dedicated Party & Celebration Hall" },
      { icon: "Sparkles", text: "Cake Cutting & Music Setup" },
      { icon: "Award", text: "Custom Multi-Course Group Menus" }
    ],
    features: [
      {
        title: "Exclusive Party Zone",
        desc: "Private area reserved exclusively for your party with custom seating arrangements."
      },
      {
        title: "Celebration Add-Ons",
        desc: "Assistance with cake presentation, celebratory background music, and fast drink rounds."
      },
      {
        title: "Custom Multi-Course Menus",
        desc: "Pre-fixed starters, unlimited main course gravies, biryanis, and dessert spreads."
      }
    ],
    curatedPlatter: {
      tag: "GRAND CELEBRATION BANQUET",
      name: "VIP Get-Together Feast (Per Head)",
      price: "₹299",
      originalPrice: "₹380",
      savings: "Group Special",
      description: "Unlimited 3 Starters + 2 Palav/Rice Varieties + 2 Rich Gravies + Hot Rotis + Coolers & Desserts.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
      idealFor: "Groups of 8 to 50+ Guests"
    },
    bookingPrefill: {
      type: 'dine-in',
      guests: '6+ Large Group',
      note: 'Get-Together / Birthday Celebration - Request Dedicated Party Zone & Custom Menu'
    }
  }
];
