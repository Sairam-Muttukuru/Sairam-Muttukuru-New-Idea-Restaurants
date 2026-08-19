import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Phone, BookOpen, Utensils, Menu, X, Sparkles, Heart, Users, Wine } from 'lucide-react';
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

  const getModeIcon = (iconName, className = "w-3.5 h-3.5") => {
    switch (iconName) {
      case 'Flame': return <Flame className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Wine': return <Wine className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-[#0C0908]/96 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.85)]' 
        : 'py-2.5 sm:py-3 bg-[#0C0908]/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo, Center Navigation, Action CTAs */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Authentic Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-500 shrink-0 border"
              style={{
                background: `linear-gradient(135deg, ${activeMode.accentColor}, #BF360C)`,
                borderColor: `${activeMode.accentColor}80`,
                boxShadow: `0 4px 15px ${activeMode.glowColor}`
              }}
            >
              <Flame className="w-5 h-5 text-[#FFB300] fill-current animate-pulse" />
            </div>
            <div className="shrink-0">
              <span className="font-serif-title font-extrabold tracking-wider text-white group-hover:text-[#FFB300] transition-colors block leading-tight text-base sm:text-lg">
                SIMHAPURI
              </span>
              <span className="text-[8.5px] tracking-[0.2em] uppercase font-bold text-[#FFB300] block">
                AUTHENTIC NELLORE DHABA
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-bold text-[11.5px] uppercase tracking-wider text-[#A89B8C]">
            <a href="#about" className="hover:text-[#FFB300] transition-colors py-1">About Us</a>
            <a href="#special" className="hover:text-[#FFB300] transition-colors py-1">Handi Specials</a>
            <a href="#menu" className="hover:text-[#FFB300] transition-colors py-1">Full Menu</a>
            <a href="#experiences" className="hover:text-[#FFB300] transition-colors py-1">Experiences</a>
            <a href="#why-us" className="hover:text-[#FFB300] transition-colors py-1">Why Us</a>
            <a href="#reviews" className="hover:text-[#FFB300] transition-colors py-1">Reviews</a>
            <a href="#location" className="hover:text-[#FFB300] transition-colors py-1">Location</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Menu Cards Lightbox Trigger */}
            <button
              onClick={() => onOpenMenuLightbox(0)}
              className="h-9 px-3.5 text-xs font-bold flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 text-[#FFB300] hover:bg-white/10 hover:border-[#FFB300]/40 transition-all cursor-pointer"
              title="View Original Menu Cards"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FFB300]" />
              <span className="hidden md:inline">Menu Cards</span>
              <span className="md:hidden">Cards</span>
            </button>
            
            {/* Direct Phone Call Button */}
            <a 
              href="tel:07386823557" 
              className="h-9 flex items-center gap-2 text-xs font-bold text-[#F5E6C8] hover:text-[#FFB300] transition-colors px-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#FFB300]/40 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
              <span className="hidden xl:inline">073868 23557</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Main Reservation CTA */}
            <button 
              onClick={() => onOpenModal()}
              className="h-9 btn-mode-primary px-4 text-xs font-extrabold rounded-xl flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#FFB300]" />}
            </button>
          </div>

        </div>

        {/* Sub-Bar: Vibe Selector */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#FFB300] shrink-0">
            <Sparkles className="w-3 h-3 text-[#FFB300]" />
            <span>Select Vibe:</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-start sm:justify-end overflow-x-auto no-scrollbar pb-0.5">
            {diningModes.map((mode) => {
              const isSelected = mode.id === currentModeId;
              return (
                <button
                  key={mode.id}
                  onClick={() => onSelectMode(mode.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                    isSelected 
                      ? 'text-white shadow-md border' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                  style={isSelected ? {
                    backgroundImage: `linear-gradient(135deg, ${mode.accentColor}, #BF360C)`,
                    borderColor: `${mode.accentColor}`,
                    boxShadow: `0 2px 12px ${mode.glowColor}`
                  } : {}}
                >
                  {getModeIcon(mode.iconName, "w-3.5 h-3.5 text-[#FFB300]")}
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
            className="lg:hidden bg-[#140F0C] border-b border-white/10 px-6 py-6 space-y-4"
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
              href="#experiences" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider"
            >
              Curated Experiences
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
              Diner Reviews (4.1 Rating)
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
