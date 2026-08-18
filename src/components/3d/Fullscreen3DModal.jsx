import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Flame, Sparkles, Utensils, RotateCcw, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import Food3DViewer from './Food3DViewer';

export default function Fullscreen3DModal({ isOpen, onClose, dish, onOrderDish }) {
  if (!isOpen || !dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1100] flex items-center justify-center p-3 sm:p-6 bg-[#0C0908]/95 backdrop-blur-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl h-[90vh] glass-dhaba border border-[#FFB300]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Top Bar Close Action */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#17120F] border border-white/20 text-gray-300 hover:text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Full 3D WebGL Manipulator Viewport */}
          <div className="lg:w-7/12 h-3/5 lg:h-full relative bg-gray-950 p-4 flex flex-col justify-between">
            {/* Header Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0C0908]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFB300]/50 text-xs font-black text-[#FFB300]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB300]" />
              <span>SKETCHFAB-STYLE 3D INSPECTION</span>
            </div>

            {/* 3D WebGL Engine Viewport */}
            <div className="w-full h-full pt-10">
              <Food3DViewer 
                dishType={dish.dishType || 'handi_chicken'}
                model3dUrl={dish.model3dUrl}
                imageUrl={dish.image}
                hotspots={dish.hotspots || []}
                autoRotate={true}
                enableControls={true}
                height="h-full"
                showControlsBar={true}
              />
            </div>

            {/* Touch Instruction */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold text-[#A89B8C] bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest pointer-events-none">
              Drag to Rotate • Scroll to Zoom • Tap Hotspots
            </div>
          </div>

          {/* Right Column: Dish Information & Pre-Order Configurator */}
          <div className="lg:w-5/12 h-2/5 lg:h-full p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#17120F]">
            
            <div className="space-y-4">
              {/* Category & Tags */}
              <div className="flex items-center gap-2">
                <span className="badge-dhaba">
                  <Flame className="w-3 h-3 text-[#FF5722] fill-current" /> {dish.tag || 'SIGNATURE DHABA DISH'}
                </span>
                {dish.spicyLevel && (
                  <span className="bg-[#E65100]/20 text-[#FF8A65] text-xs font-bold px-3 py-1 rounded-full border border-[#FF5722]/30">
                    {dish.spicyLevel}
                  </span>
                )}
              </div>

              {/* Dish Name */}
              <h2 className="font-serif-title font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                {dish.name}
              </h2>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs text-[#FFB300] font-bold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#FFB300]" />
                  ))}
                </div>
                <span>{dish.rating || '4.8'}</span>
                <span className="text-gray-400 font-medium">({dish.reviewsCount || 240} Verified Reviews)</span>
              </div>

              {/* Price Tag */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#A89B8C] font-medium block">Full Portion Price</span>
                  <span className="text-2xl font-extrabold text-[#FFB300]">{dish.price}</span>
                </div>
                {dish.halfPrice && (
                  <div className="text-right">
                    <span className="text-xs text-[#A89B8C] font-medium block">Half Portion</span>
                    <span className="text-lg font-bold text-white">{dish.halfPrice}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Preparation & Taste Profile</h4>
                <p className="text-xs sm:text-sm text-[#A89B8C] leading-relaxed font-normal">
                  {dish.description || 'Authentic regional preparation cooked fresh on order with hand-ground Nellore spices and pure desi ghee.'}
                </p>
              </div>

              {/* Factual Features */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs space-y-0.5">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Fresh Daily
                  </div>
                  <p className="text-[11px] text-[#A89B8C]">100% daily sourced ingredients</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs space-y-0.5">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#FF5722]" /> Wood Flames
                  </div>
                  <p className="text-[11px] text-[#A89B8C]">Simmered on natural fire</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  if (onOrderDish) onOrderDish(dish);
                }}
                className="btn-dhaba-primary w-full justify-center text-sm py-4 font-extrabold shadow-2xl flex items-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>Pre-Order {dish.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a 
                href="tel:07386823557"
                className="btn-dhaba-outline w-full justify-center text-xs py-3 font-bold flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF8A65]" />
                <span>Call Restaurant Manager: 073868 23557</span>
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
