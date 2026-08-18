import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Phone, BookOpen, Utensils, Menu, X } from 'lucide-react';
import { diningModes } from '../../data/modeData';

export default function Navbar({ 
  currentModeId, 
  onOpenModal, 
  onOpenMenuLightbox 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'py-3 bg-[#0C0908]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.85)]' 
        : 'py-4 sm:py-5 bg-gradient-to-b from-[#0C0908]/95 via-[#0C0908]/75 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Authentic Dhaba Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div 
              className={`rounded-xl flex items-center justify-center text-white transition-all duration-500 shrink-0 border ${
                scrolled ? 'w-9 h-9' : 'w-11 h-11'
              }`}
              style={{
                background: `linear-gradient(135deg, ${activeMode.accentColor}, #BF360C)`,
                borderColor: `${activeMode.accentColor}80`,
                boxShadow: `0 4px 15px ${activeMode.glowColor}`
              }}
            >
              <Flame className="w-5 h-5 text-[#FFB300] fill-current animate-pulse" />
            </div>
            <div className="shrink-0">
              <span className={`font-serif-title font-extrabold tracking-wider text-white group-hover:text-[#FFB300] transition-colors block leading-none ${
                scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}>
                SIMHAPURI
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-black text-[#FFB300] block mt-1">
                AUTHENTIC NELLORE DHABA
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Clean & Spacious) */}
          <nav className="hidden xl:flex items-center gap-7 font-bold text-xs uppercase tracking-wider text-[#A89B8C]">
            <a href="#about" className="hover:text-[#FFB300] transition-colors py-1">About Us</a>
            <a href="#special" className="hover:text-[#FFB300] transition-colors py-1">Handi Specials</a>
            <a href="#menu" className="hover:text-[#FFB300] transition-colors py-1">Full Menu</a>
            <a href="#why-us" className="hover:text-[#FFB300] transition-colors py-1">Why Choose Us</a>
            <a href="#reviews" className="hover:text-[#FFB300] transition-colors py-1">Diner Reviews</a>
            <a href="#location" className="hover:text-[#FFB300] transition-colors py-1">Location</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Menu Cards Lightbox Trigger */}
            <button
              onClick={() => onOpenMenuLightbox(0)}
              className="btn-dhaba-outline py-2 px-3.5 text-xs font-bold flex items-center gap-1.5 rounded-xl border border-white/10 hover:border-[#FFB300]/50"
              title="View Original Menu Cards"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FFB300]" />
              <span className="hidden md:inline">Menu Cards</span>
              <span className="md:hidden">Cards</span>
            </button>
            
            {/* Phone Call Button */}
            <a 
              href="tel:07386823557" 
              className="flex items-center gap-1.5 text-xs font-bold text-[#F5E6C8] hover:text-[#FFB300] transition-colors px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-[#FFB300]/40 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
              <span>073868 23557</span>
            </a>

            {/* Main Reservation CTA */}
            <button 
              onClick={() => onOpenModal()}
              className="btn-mode-primary py-2 px-4 text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#FFB300]" />}
            </button>
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
