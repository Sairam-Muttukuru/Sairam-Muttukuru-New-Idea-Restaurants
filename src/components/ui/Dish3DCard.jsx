import React, { useState } from 'react';
import { Star, ChevronRight, Flame, Sparkles } from 'lucide-react';

export default function Dish3DCard({ item, onSelectDish }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-full py-2">
      <div
        className={`glass-dhaba-card rounded-2xl flex flex-col justify-between h-full relative border transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
          isHovered 
            ? 'border-[#FFB300]/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)] bg-[#1F1813]' 
            : 'border-[#D84315]/20 shadow-xl bg-[#17120F]'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {/* Food Image Container - Properly Fitted without over-zoom */}
          <div className="relative aspect-[4/3] w-full p-2.5 overflow-hidden">
            
            {/* Smooth Food Spotlight Ring */}
            <div 
              className={`absolute inset-2.5 rounded-xl pointer-events-none transition-all duration-500 ease-out z-20 border ${
                isHovered 
                  ? 'border-[#FFB300]/80 shadow-[0_0_25px_rgba(255,179,0,0.3)] opacity-100' 
                  : 'border-transparent opacity-0'
              }`}
            />

            {/* Food Image Box */}
            <div 
              className={`w-full h-full rounded-xl overflow-hidden relative bg-[#140F0C] transition-all duration-500 ease-out z-10 ${
                isHovered 
                  ? 'shadow-[0_15px_30px_-8px_rgba(230,81,0,0.5)] -translate-y-0.5' 
                  : 'shadow-md translate-y-0'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out ${
                  isHovered ? 'scale-[1.03]' : 'scale-100'
                }`}
              />
              
              {/* Subtle Warm Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/85 via-transparent to-transparent pointer-events-none" />

              {/* 3D Sheen Highlight on Food Image */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,235,170,0.2) 0%, transparent 50%, rgba(255,179,0,0.1) 100%)'
                }}
              />

              {/* 3D Model Highlight Badge */}
              <div 
                className={`absolute top-2 right-2 bg-[#0C0908]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#FFB300]/60 text-[8.5px] font-black text-[#FFB300] tracking-wider flex items-center gap-1 transition-all duration-500 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                <Sparkles className="w-2.5 h-2.5 text-[#FFB300]" /> 3D VIEW
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 z-30 pointer-events-none flex flex-col gap-1.5">
              {item.spicyLevel && (
                <span className="bg-[#17120F]/90 backdrop-blur-md text-[#FF8A65] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#D84315]/30 shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#FF5722] fill-current" />
                  {item.spicyLevel}
                </span>
              )}
            </div>

            <div className="absolute top-4 right-4 z-30 pointer-events-none">
              <span className="bg-[#0C0908]/90 backdrop-blur-md text-[#FFB300] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#FFB300]/40 shadow-md">
                {item.tag}
              </span>
            </div>

            {/* Floating Rating Pill */}
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 bg-[#0C0908]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs text-[#FFB300] font-bold border border-white/10 shadow-lg pointer-events-none">
              <Star className="w-3.5 h-3.5 fill-current text-[#FFB300]" />
              <span>{item.rating}</span>
              <span className="text-gray-400 text-[10px]">({item.reviewsCount})</span>
            </div>

          </div>

          {/* Card Body Info */}
          <div className="p-5 space-y-2">
            <h4 className={`font-serif-title font-extrabold text-base sm:text-lg transition-colors duration-500 leading-snug ${
              isHovered ? 'text-[#FFB300]' : 'text-white'
            }`}>
              {item.name}
            </h4>
            <p className="text-xs text-[#A89B8C] line-clamp-2 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>

        {/* Card Footer Price & Action */}
        <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
          <div>
            <span className="text-lg font-extrabold text-[#FFB300]">{item.price}</span>
            {item.halfPrice && (
              <span className="text-[11px] text-[#A89B8C] block -mt-1 font-medium">Half: {item.halfPrice}</span>
            )}
          </div>

          <button 
            onClick={() => onSelectDish(item)}
            className={`btn-dhaba-primary text-xs py-2 px-3.5 font-bold flex items-center gap-1.5 shadow-lg transition-all duration-500 ${
              isHovered ? 'scale-105 bg-[#FF5722]' : 'scale-100'
            }`}
          >
            <span>Order Dish</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
