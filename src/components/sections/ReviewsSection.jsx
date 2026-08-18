import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Flame } from 'lucide-react';
import { reviews } from '../../data/reviewsData';
import { fromTop, fromBottom, fromLeft, fromRight } from '../../utils/motionVariants';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#17120F] border-b border-[#D84315]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header (Enters TOP → BOTTOM) */}
        <motion.div 
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <span className="badge-dhaba shadow-lg">
            <Flame className="w-3 h-3 text-[#FFB300] fill-current" /> VERIFIED REVIEWS
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Loved by <span className="text-gradient-dhaba">540+ Families & Travelers</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-[#FFB300]">
            <span className="text-3xl font-extrabold text-white font-serif-title">4.1</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-[#FFB300]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#A89B8C]">(Official Google Business Rating)</span>
          </div>
        </motion.div>

        {/* Carousel Container (Enters BOTTOM → TOP) */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="relative max-w-4xl mx-auto"
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-dhaba-card p-8 sm:p-12 rounded-3xl space-y-6 relative border border-[#D84315]/30 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-[#E65100]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="flex text-[#FFB300] gap-1">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#FFB300]" />
                ))}
              </div>

              <p className="text-base sm:text-xl text-[#F5E6C8] italic leading-relaxed font-normal">
                "{reviews[currentIndex].comment}"
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={reviews[currentIndex].avatar} 
                    alt={reviews[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FFB300]/40 shadow-md"
                  />
                  <div>
                    <h5 className="font-serif-title font-extrabold text-white text-base">{reviews[currentIndex].name}</h5>
                    <p className="text-xs text-[#A89B8C]">{reviews[currentIndex].role}</p>
                  </div>
                </div>

                <span className="text-xs text-[#A89B8C] font-medium">{reviews[currentIndex].date}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#E65100] hover:text-white border border-white/10 text-white transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-[#FFB300] w-7' : 'bg-white/20 w-2.5'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#E65100] hover:text-white border border-white/10 text-white transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
