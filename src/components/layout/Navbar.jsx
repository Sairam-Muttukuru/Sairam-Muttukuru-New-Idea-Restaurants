import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Phone, BookOpen, Utensils, Menu, X, Sparkles } from 'lucide-react';
import { diningModes } from '../../data/modeData';

export default function Navbar({ 
  currentModeId, 
  onSelectMode,
  onOpenModal, 
  onOpenMenuLightbox 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
      scrolled 
        ? 'py-2 bg-[#0C0908]/96 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.85)]' 
        : 'py-3 sm:py-3.5 bg-gradient-to-b from-[#0C0908]/95 via-[#0C0908]/85 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo, Navigation, Actions */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Authentic Dhaba Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white transition-all duration-500 shrink-0 border"
              style={{
                background: `linear-gradient(135deg, ${activeMode.accentColor}, #BF360C)`,
                borderColor: `${activeMode.accentColor}80`,
                boxShadow: `0 4px 15px ${activeMode.glowColor}`
              }}
            >
              <Flame className="w-5 h-5 text-[#FFB300] fill-current animate-pulse" />
            </div>
            <div className="shrink-0">
              <span className="font-serif-title font-extrabold tracking-wider text-white group-hover:text-[#FFB300] transition-colors block leading-none text-base sm:text-lg">
                SIMHAPURI
              </span>
              <span className="text-[8.5px] tracking-[0.2em] uppercase font-black text-[#FFB300] block mt-0.5">
                AUTHENTIC NELLORE DHABA
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Clean & Spacious) */}
          <nav className="hidden xl:flex items-center gap-6 font-bold text-xs uppercase tracking-wider text-[#A89B8C]">
            <a href="#about" className="hover:text-[#FFB300] transition-colors py-1">About Us</a>
            <a href="#special" className="hover:text-[#FFB300] transition-colors py-1">Handi Specials</a>
            <a href="#menu" className="hover:text-[#FFB300] transition-colors py-1">Full Menu</a>
            <a href="#experiences" className="hover:text-[#FFB300] transition-colors py-1">Experiences</a>
            <a href="#why-us" className="hover:text-[#FFB300] transition-colors py-1">Why Choose Us</a>
            <a href="#reviews" className="hover:text-[#FFB300] transition-colors py-1">Reviews</a>
            <a href="#location" className="hover:text-[#FFB300] transition-colors py-1">Location</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Menu Cards Lightbox Trigger */}
            <button
              onClick={() => onOpenMenuLightbox(0)}
              className="btn-dhaba-outline py-1.5 px-3 text-xs font-bold flex items-center gap-1.5 rounded-xl border border-white/10 hover:border-[#FFB300]/50"
              title="View Original Menu Cards"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FFB300]" />
              <span className="hidden md:inline">Menu Cards</span>
              <span className="md:hidden">Cards</span>
            </button>
            
            {/* Phone Call Button */}
            <a 
              href="tel:07386823557" 
              className="flex items-center gap-1.5 text-xs font-bold text-[#F5E6C8] hover:text-[#FFB300] transition-colors px-2.5 py-1.5 bg-white/5 rounded-xl border border-white/10 hover:border-[#FFB300]/40 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
              <span className="hidden lg:inline">073868 23557</span>
            </a>

            {/* Main Reservation CTA */}
            <button 
              onClick={() => onOpenModal()}
              className="btn-mode-primary py-1.5 px-3.5 text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#FFB300]" />}
            </button>
          </div>

        </div>

        {/* BOTTOM OF NAVBAR: All Dining Modes (Couple, Family, Friends, Highway, Celebrations) */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#FFB300] shrink-0">
            <Sparkles className="w-3 h-3 text-[#FFB300]" />
            <span>Select Vibe:</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 w-full lg:w-auto justify-start lg:justify-end overflow-x-auto scrollbar-none pb-0.5">
            {diningModes.map((mode) => {
              const isSelected = mode.id === currentModeId;
              return (
                <button
                  key={mode.id}
                  onClick={() => onSelectMode(mode.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-black transition-all duration-300 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                    isSelected 
                      ? 'text-white shadow-md scale-105 border' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                  style={isSelected ? {
                    backgroundImage: `linear-gradient(135deg, ${mode.accentColor}, #BF360C)`,
                    borderColor: `${mode.accentColor}`,
                    boxShadow: `0 2px 12px ${mode.glowColor}`
                  } : {}}
                >
                  <span className="text-sm leading-none">{mode.emoji}</span>
                  <span className="whitespace-nowrap">{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-[#140F0C] border-b border-white/10 px-6 py-6 space-y-4"
          >
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              About Us
            </a>
            <a 
              href="#special" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Handi Specials
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Full Dhaba Menu
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Why Choose Us
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Diner Reviews (4.1 ★)
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Location & Hours
            </a>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuLightbox(0);
                }}
                className="btn-dhaba-outline justify-center text-xs py-3 font-bold rounded-xl"
              >
                <BookOpen className="w-4 h-4 text-[#FFB300]" /> View Menu Scans (4 Cards)
              </button>
              
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="btn-mode-primary justify-center text-xs py-3 font-extrabold rounded-xl"
              >
                <Utensils className="w-4 h-4" /> Reserve Table / Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
