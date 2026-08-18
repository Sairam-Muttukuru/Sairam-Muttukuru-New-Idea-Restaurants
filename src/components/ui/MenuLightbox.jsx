import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Flame } from 'lucide-react';
import { menuScanImages } from '../../data/menuScanData';

export default function MenuLightbox({ isOpen, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const currentMenu = menuScanImages[currentIndex];

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % menuScanImages.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + menuScanImages.length) % menuScanImages.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1200] bg-[#0C0908]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div 
          className="flex items-center justify-between z-10 bg-[#17120F] border border-[#D84315]/30 rounded-2xl p-4 max-w-5xl mx-auto w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E65100]/20 border border-[#E65100]/40 flex items-center justify-center text-[#FFB300]">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-serif-title font-extrabold text-white text-base sm:text-lg">
                {currentMenu.title}
              </h3>
              <p className="text-xs text-[#A89B8C] font-medium">
                Card {currentIndex + 1} of {menuScanImages.length} • {currentMenu.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Toggle Zoom"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#E65100] hover:bg-[#FF5722] text-white transition-colors font-bold shadow-md"
              title="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image View */}
        <div 
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handlePrev}
            className="absolute left-4 z-20 p-3 sm:p-4 rounded-xl bg-[#17120F]/80 hover:bg-[#E65100] hover:text-white border border-white/10 text-white transition-all shadow-2xl backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 z-20 p-3 sm:p-4 rounded-xl bg-[#17120F]/80 hover:bg-[#E65100] hover:text-white border border-white/10 text-white transition-all shadow-2xl backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div 
            key={currentIndex}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: isZoomed ? 1.35 : 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[75vh] p-2 overflow-auto rounded-3xl cursor-zoom-in"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={currentMenu.image}
              alt={currentMenu.title}
              className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div 
          className="z-10 max-w-xl mx-auto w-full bg-[#17120F]/80 border border-white/10 rounded-2xl p-3 flex items-center justify-center gap-3 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {menuScanImages.map((scan, idx) => (
            <button
              key={scan.id}
              onClick={() => {
                setIsZoomed(false);
                setCurrentIndex(idx);
              }}
              className={`relative rounded-xl overflow-hidden h-14 w-20 border-2 transition-all shrink-0 ${
                currentIndex === idx 
                  ? 'border-[#FFB300] scale-105 shadow-lg shadow-[#FFB300]/20' 
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={scan.image} alt={scan.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
