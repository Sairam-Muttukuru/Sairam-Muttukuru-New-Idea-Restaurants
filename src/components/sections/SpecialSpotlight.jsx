import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, ShoppingBag, Award, ChevronRight } from 'lucide-react';
import { fromLeft, fromRight } from '../../utils/motionVariants';

export default function SpecialSpotlight({ onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="special" className="py-20 md:py-28 bg-[#17120F] relative overflow-hidden border-b border-[#D84315]/20">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D84315]/10 rounded-full blur-[180px] pointer-events-none animate-flame-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Handi Food Showcase (Enters LEFT → CENTER) */}
          <motion.div 
            className="lg:col-span-6 flex justify-center pt-6"
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div 
              className="relative w-full max-w-lg cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onOpenModal}
            >
              {/* Dynamic Card Frame */}
              <div className={`glass-dhaba-card p-4 rounded-3xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative ${
                isHovered 
                  ? 'border-[#FFB300]/60 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9)] bg-[#1F1813]' 
                  : 'border-[#D84315]/30 shadow-2xl bg-[#17120F]'
              }`}>

                {/* Spotlight Frame Ring */}
                <div 
                  className={`absolute inset-4 rounded-2xl pointer-events-none transition-all duration-700 ease-out border ${
                    isHovered 
                      ? 'border-[#FFB300]/80 shadow-[0_0_35px_rgba(255,179,0,0.4)] scale-[1.02] opacity-100' 
                      : 'border-transparent opacity-0 scale-100'
                  }`}
                />

                {/* 3D Food Image Container */}
                <div 
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-950 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isHovered 
                      ? 'scale-[1.05] -translate-y-2 shadow-[0_30px_60px_-12px_rgba(230,81,0,0.6)] brightness-110' 
                      : 'scale-100 translate-y-0 shadow-xl brightness-100'
                  }`}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80" 
                    alt="Special Handi Country Chicken"
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0908]/90 via-transparent to-transparent" />

                  {/* 3D Sheen Highlight */}
                  <div 
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,235,170,0.25) 0%, transparent 50%, rgba(255,179,0,0.15) 100%)'
                    }}
                  />

                  {/* 3D Model Badge */}
                  <div className={`absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFB300]/60 text-[10px] font-black text-[#FFB300] tracking-wider flex items-center gap-1.5 shadow-2xl transition-all duration-700 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <Sparkles className="w-3 h-3 text-[#FFB300]" /> 3D DISH VIEW
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-8 left-8 z-30 pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#0C0908]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFB300]/50 text-xs font-black text-[#FFB300] shadow-xl">
                    <Award className="w-3.5 h-3.5 text-[#FFB300]" />
                    <span>#1 TRADITIONAL SPECIAL</span>
                  </div>
                </div>

                {/* Floating Rating Pill (Top Right) */}
                <div className="absolute -top-5 -right-4 glass-dhaba p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl hidden sm:flex border border-[#FFB300]/40 z-30">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB300] to-[#E65100] flex items-center justify-center text-black font-black text-base shadow-md">
                    4.9
                  </div>
                  <div>
                    <div className="flex text-[#FFB300] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Flame key={i} className="w-3.5 h-3.5 fill-current text-[#FFB300]" />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-white mt-0.5">Dhaba Chef Special</p>
                  </div>
                </div>

                {/* Card Footer Bar */}
                <div className="p-4 flex items-center justify-between text-xs border-t border-white/10 mt-2">
                  <div>
                    <span className="text-[#A89B8C] font-medium">Portion Price</span>
                    <span className="font-extrabold text-[#FFB300] text-base block">₹200 <span className="text-gray-400 text-xs font-normal">(Full Handi)</span></span>
                  </div>
                  <div className={`btn-dhaba-primary text-xs py-2.5 px-5 font-bold flex items-center gap-1.5 shadow-lg transition-all duration-500 ${
                    isHovered ? 'scale-105 bg-[#FF5722]' : 'scale-100'
                  }`}>
                    <span>Pre-Order Handi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Spotlight Details (Enters RIGHT → CENTER) */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="inline-flex items-center gap-2 bg-[#D84315]/15 border border-[#D84315]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#FF8A65] uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4 text-[#FFB300]" /> TRADITIONAL WOOD-FIRED SPICES
            </div>

            <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Slow-Cooked Earthen <br />
              <span className="text-gradient-dhaba">Clay Handi Delicacies</span>
            </h2>

            <p className="text-[#A89B8C] text-base sm:text-lg leading-relaxed font-normal">
              Every Clay Handi dish at Simhapuri Dhaba is slow-roasted over natural flames. Tender country chicken, fresh green herbs, and hand-ground spices infuse deep aroma into rich gravies that travelers and local families pull over to taste.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-left">
              <div className="glass-dhaba p-5 rounded-2xl border-l-4 border-l-[#D84315]">
                <h4 className="font-serif-title font-extrabold text-white text-base">₹200 / Full Portion</h4>
                <p className="text-xs text-[#A89B8C] mt-0.5 font-medium">Generous quantity served with gravy & raita</p>
              </div>

              <div className="glass-dhaba p-5 rounded-2xl border-l-4 border-l-emerald-500">
                <h4 className="font-serif-title font-extrabold text-white text-base">100% Desi Ingredients</h4>
                <p className="text-xs text-[#A89B8C] mt-0.5 font-medium">Daily fresh meat & hand-ground masalas</p>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onOpenModal}
                className="btn-dhaba-primary w-full sm:w-auto justify-center text-sm py-4 px-8 font-extrabold shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" /> Pre-Order Handi Special
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
