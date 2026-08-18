import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Search, Utensils, BookOpen, Flame } from 'lucide-react';
import Dish3DCard from '../ui/Dish3DCard';
import { menuCategories, menuItems } from '../../data/menuScanData';
import { fromTop, fromBottom, fromLeft, fromRight } from '../../utils/motionVariants';

export default function MenuSection({ onSelectDish, onOpenMenuLightbox }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenuItems = menuItems.filter(item => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Alternating entrance variants for menu items
  const getItemVariant = (index) => {
    const modulo = index % 3;
    if (modulo === 0) return fromRight;
    if (modulo === 1) return fromLeft;
    return fromBottom;
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#0C0908] relative border-b border-[#D84315]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Enters TOP → BOTTOM) */}
        <motion.div 
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4 mb-10"
        >
          <span className="badge-dhaba shadow-lg">
            <Flame className="w-3 h-3 text-[#FFB300] fill-current" /> OUR SPECIALTIES
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Signature <span className="text-gradient-dhaba">Nellore Dhaba Menu</span>
          </h2>
          <p className="text-[#A89B8C] text-sm sm:text-base max-w-xl mx-auto font-medium">
            Freshly prepared hot on order with hand-ground spices and authentic regional taste.
          </p>

          {/* Physical Menu Scanner Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenMenuLightbox(0)}
              className="btn-dhaba-outline text-xs sm:text-sm py-3 px-6 font-extrabold shadow-lg inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#FFB300]" />
              View Full Menu Scans (4 Physical Cards)
            </button>
          </div>
        </motion.div>

        {/* Search Input (Enters BOTTOM → TOP) */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Pepper Chicken, Natukodi Palav, Paneer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#17120F] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFB300] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter Tabs (Enters LEFT → RIGHT) */}
        <motion.div 
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.25}
          className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#E65100] to-[#FFB300] text-white shadow-lg shadow-[#E65100]/30 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid with Alternating Directional Animations & Category Switch Transition */}
        <AnimatePresence mode="wait">
          {filteredMenuItems.length > 0 ? (
            <motion.div 
              key={activeTab + searchQuery}
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1.0 }}
              exit={{ opacity: 0, x: -50, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredMenuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={getItemVariant(index)}
                  initial="hidden"
                  animate="visible"
                  custom={index * 0.06}
                >
                  <Dish3DCard item={item} onSelectDish={onSelectDish} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 glass-dhaba rounded-3xl p-8 max-w-md mx-auto space-y-3">
              <Utensils className="w-8 h-8 text-gray-500 mx-auto" />
              <h4 className="font-serif-title text-base font-bold text-white">No dishes match your query</h4>
              <p className="text-xs text-gray-400">Try searching for another item or clear your search.</p>
            </div>
          )}
        </AnimatePresence>

        {/* Manager Phone Call Banner */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center glass-dhaba border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto space-y-4 shadow-2xl"
        >
          <h3 className="font-serif-title font-extrabold text-xl sm:text-2xl text-white">
            Want custom recommendations or direct phone pre-orders?
          </h3>
          <p className="text-xs sm:text-sm text-[#A89B8C] max-w-xl mx-auto">
            Call our restaurant manager directly for fast table seating and takeaway orders!
          </p>
          <div className="pt-2 flex justify-center">
            <a href="tel:07386823557" className="btn-dhaba-primary text-sm py-3.5 px-8 font-extrabold">
              <Phone className="w-4 h-4" /> Call +91 73868 23557
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
