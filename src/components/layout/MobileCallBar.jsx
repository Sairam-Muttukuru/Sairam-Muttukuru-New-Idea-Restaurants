import React from 'react';
import { Phone, Utensils, BookOpen } from 'lucide-react';

export default function MobileCallBar({ onOpenModal, onOpenMenuLightbox }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0C0908]/95 backdrop-blur-xl border-t border-[#D84315]/30 px-4 py-3 flex items-center justify-between gap-2 shadow-2xl">
      <a 
        href="tel:07386823557"
        className="flex-1 btn-dhaba-outline justify-center py-2.5 px-2 text-xs font-bold text-[#F5E6C8]"
      >
        <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
        Call
      </a>
      <button 
        onClick={() => onOpenMenuLightbox(0)}
        className="flex-1 btn-dhaba-outline justify-center py-2.5 px-2 text-xs font-bold text-[#FFB300]"
      >
        <BookOpen className="w-3.5 h-3.5" />
        Cards
      </button>
      <button 
        onClick={onOpenModal}
        className="flex-1 btn-dhaba-primary justify-center py-2.5 px-2 text-xs font-extrabold"
      >
        <Utensils className="w-3.5 h-3.5" />
        Reserve
      </button>
    </div>
  );
}
