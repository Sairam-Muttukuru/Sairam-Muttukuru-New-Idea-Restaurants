import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Phone, ShoppingBag, Menu, X, BookOpen, Utensils } from 'lucide-react';

export default function Navbar({ onOpenModal, onOpenMenuLightbox }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled 
        ? 'py-3.5 bg-[#0C0908]/90 backdrop-blur-xl border-b border-[#D84315]/30 shadow-2xl shadow-black/90' 
        : 'py-5 bg-gradient-to-b from-[#0C0908]/95 via-[#0C0908]/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Authentic Dhaba Logo (Scales smoothly on scroll) */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className={`rounded-xl bg-gradient-to-br from-[#E65100] to-[#BF360C] border border-[#FFB300]/40 flex items-center justify-center text-white shadow-md shadow-[#E65100]/30 group-hover:scale-105 transition-all duration-500 shrink-0 ${
            scrolled ? 'w-9 h-9' : 'w-11 h-11'
          }`}>
            <Flame className={`text-[#FFB300] fill-current transition-all duration-500 ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
          </div>
          <div className="shrink-0">
            <span className={`font-serif-title font-extrabold tracking-wider text-white group-hover:text-[#FFB300] transition-all duration-500 block leading-none ${
              scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
            }`}>
              SIMHAPURI
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-extrabold text-[#FFB300] block mt-1">
              AUTHENTIC NELLORE DHABA
            </span>
          </div>
        </a>

        {/* Center Navigation Links (xl+ displays full bar) */}
        <div className="hidden xl:flex items-center gap-6 font-bold text-xs uppercase tracking-wider text-[#A89B8C] shrink-0">
          <a href="#about" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">About Us</a>
          <a href="#special" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">Handi Specials</a>
          <a href="#menu" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">Full Menu</a>
          <a href="#why-us" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">Why Choose Us</a>
          <a href="#reviews" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">Diner Reviews</a>
          <a href="#location" className="hover:text-[#FFB300] transition-colors py-1 whitespace-nowrap">Location</a>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => onOpenMenuLightbox(0)}
            className="btn-dhaba-outline py-2 px-3.5 text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
            title="View Physical Menu Cards"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#FFB300]" />
            <span className="hidden md:inline">Menu Cards</span>
            <span className="md:hidden">Cards</span>
          </button>
          
          <a 
            href="tel:07386823557" 
            className="flex items-center gap-1.5 text-xs font-bold text-[#F5E6C8] hover:text-[#FFB300] transition-colors px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-[#FFB300]/40 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
            <span>073868 23557</span>
          </a>

          <button 
            onClick={onOpenModal}
            className="btn-dhaba-primary py-2 px-4 text-xs font-extrabold shadow-md whitespace-nowrap flex items-center gap-1.5"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile / Tablet Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors shrink-0"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#17120F] border-b border-[#D84315]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">About Us</a>
          <a href="#special" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">Handi Specials</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">Full Dhaba Menu</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">Why Choose Us</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">Diner Reviews (4.1 ★)</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-gray-200 font-bold hover:text-[#FFB300] text-sm uppercase tracking-wider">Location & Hours</a>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenuLightbox(0);
              }}
              className="btn-dhaba-outline justify-center text-xs py-3 font-bold"
            >
              <BookOpen className="w-4 h-4 text-[#FFB300]" /> View Menu Scans (4 Cards)
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="btn-dhaba-primary justify-center text-xs py-3 font-extrabold"
            >
              <Utensils className="w-4 h-4" /> Reserve Table / Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
