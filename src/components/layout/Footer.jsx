import React from 'react';
import { Flame, Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070504] border-t border-[#D84315]/30 pt-16 pb-24 md:pb-12 text-[#A89B8C] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E65100] to-[#BF360C] border border-[#FFB300]/40 flex items-center justify-center text-[#FFB300]">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-serif-title font-extrabold text-lg sm:text-xl tracking-wider text-white block">SIMHAPURI</span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-extrabold text-[#FFB300] block -mt-1">AUTHENTIC NELLORE DHABA</span>
              </div>
            </div>
            <p className="text-xs text-[#A89B8C] max-w-sm leading-relaxed font-normal">
              Nellore’s trusted family dhaba for tender Pepper Chicken, authentic Natukodi Palav, slow-cooked Mutton Fry, fresh Rotis, and ample open parking in South Raju Palem.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-serif-title font-bold text-white text-sm uppercase tracking-wider">Quick Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#FFB300] transition-colors">About Us</a></li>
              <li><a href="#special" className="hover:text-[#FFB300] transition-colors">Handi Specials</a></li>
              <li><a href="#menu" className="hover:text-[#FFB300] transition-colors">Full Dhaba Menu</a></li>
              <li><a href="#why-us" className="hover:text-[#FFB300] transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-[#FFB300] transition-colors">Verified Reviews</a></li>
              <li><a href="#location" className="hover:text-[#FFB300] transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-serif-title font-bold text-white text-sm uppercase tracking-wider">Contact & Location</h5>
            <div className="text-xs space-y-2 text-[#A89B8C] font-normal">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#FF8A65]" /> +91 73868 23557</p>
              <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#FFB300]" /> Open Daily: 11:00 AM - 11:00 PM</p>
              <p className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-[#FF8A65] shrink-0 mt-0.5" /> South Raju Palem, Nellore, AP 524002</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs gap-4 text-center md:text-left font-normal">
          <p>© {new Date().getFullYear()} Simhapuri Authentic Family Dhaba. All Rights Reserved.</p>
          <p className="text-gray-500">Crafted with Passion for Authentic Regional Culinary Lovers.</p>
        </div>
      </div>
    </footer>
  );
}
