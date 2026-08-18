import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Car, Utensils, ShieldCheck, Star, Award, BookOpen, ChevronRight, MapPin, Sparkles, Clock } from 'lucide-react';
import Hero3DCanvas from '../ui/Hero3DCanvas';
import { fromTop, fromBottom, fromLeft, fromRight, scaleIn } from '../../utils/motionVariants';

export default function HeroSection({ onOpenModal, onOpenMenuLightbox }) {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const heroRef = useRef(null);

  // Multilayer Parallax Scroll Effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const foodY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[94vh] pt-28 pb-20 md:py-36 overflow-hidden bg-[#0C0908] flex items-center border-b border-[#D84315]/20"
    >
      
      {/* Three.js 3D Background Canvas with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Hero3DCanvas />
      </motion.div>

      {/* Warm Ambient Glow Highlights & Hearth Flames */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D84315]/10 rounded-full blur-[180px] pointer-events-none animate-flame-glow" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FFB300]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column Text Content (Parallax Group) */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* 0.4s: Badges (TOP → BOTTOM) */}
            <motion.div 
              variants={fromTop}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="badge-dhaba shadow-lg">
                <Flame className="w-4 h-4 text-[#FF5722] fill-current animate-pulse" />
                <span>Nellore's #1 Rated Highway Dhaba • 4.1 ★ (540+ Reviews)</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#E65100]/20 border border-[#FFB300]/40 px-3.5 py-1.5 rounded-full text-xs font-black text-[#FFB300] shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#FFB300] animate-ping" />
                <span>🔥 LIVE TANDOOR ACTIVE • AC TABLES READY</span>
              </div>
            </motion.div>

            {/* 0.6s: Main Headline (BOTTOM → TOP) */}
            <motion.h1 
              variants={fromBottom}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="font-serif-title font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white"
            >
              Authentic Nellore Spice, <br />
              <span className="text-gradient-dhaba">Tender Pepper Chicken</span> <br />
              & Rich Dhaba Feasts.
            </motion.h1>

            {/* 0.8s: Subtext (LEFT → RIGHT) */}
            <motion.p 
              variants={fromLeft}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="text-[#A89B8C] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Step into the warm atmosphere of Simhapuri Dhaba. Fresh hand-ground spices, clay handi slow roasting, and mouth-watering Pepper Chicken served piping hot with ample open parking in South Raju Palem.
            </motion.p>

            {/* Key Dhaba Features */}
            <motion.div 
              variants={fromBottom}
              initial="hidden"
              animate="visible"
              custom={0.9}
              className="pt-1 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-bold text-gray-200"
            >
              <div className="flex items-center gap-2 bg-[#17120F] border border-[#D84315]/20 px-4 py-2.5 rounded-xl hover:border-[#FFB300]/40 transition-colors shadow-md">
                <Car className="w-4 h-4 text-[#FFB300]" /> Ample Open Parking
              </div>
              <div className="flex items-center gap-2 bg-[#17120F] border border-[#D84315]/20 px-4 py-2.5 rounded-xl hover:border-[#FFB300]/40 transition-colors shadow-md">
                <Utensils className="w-4 h-4 text-[#FF8A65]" /> Clean AC Family Seating
              </div>
              <div className="flex items-center gap-2 bg-[#17120F] border border-[#D84315]/20 px-4 py-2.5 rounded-xl hover:border-[#FFB300]/40 transition-colors shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Drive-Thru & Takeaway
              </div>
            </motion.div>

            {/* 1.0s: CTA Buttons (RIGHT → LEFT) */}
            <motion.div 
              variants={fromRight}
              initial="hidden"
              animate="visible"
              custom={1.0}
              className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#menu" 
                className="btn-dhaba-primary w-full sm:w-auto justify-center text-sm py-4 px-8 font-extrabold shadow-xl"
              >
                <Utensils className="w-4 h-4" />
                Explore Menu & Order
              </a>
              <button
                onClick={onOpenModal}
                className="btn-dhaba-gold w-full sm:w-auto justify-center text-sm py-4 px-8 font-extrabold shadow-xl"
              >
                <Clock className="w-4 h-4" />
                Reserve Restaurant Table
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: 1.2s Scale-in Food Image Showcase */}
          <motion.div 
            style={{ y: foodY }}
            className="lg:col-span-5 flex justify-center pt-6 lg:pt-0"
          >
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="relative w-full max-w-md lg:max-w-none cursor-pointer group"
              onMouseEnter={() => setIsHeroHovered(true)}
              onMouseLeave={() => setIsHeroHovered(false)}
              onClick={() => onOpenMenuLightbox(3)}
            >
              
              {/* Dynamic Card Container */}
              <div className={`glass-dhaba-card rounded-3xl p-4 border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative ${
                isHeroHovered 
                  ? 'border-[#FFB300]/60 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9)] bg-[#1F1813]' 
                  : 'border-[#D84315]/30 shadow-2xl bg-[#17120F]'
              }`}>

                {/* Smooth 3D Spotlight Frame around Food Image */}
                <div 
                  className={`absolute inset-4 rounded-2xl pointer-events-none transition-all duration-700 ease-out border ${
                    isHeroHovered 
                      ? 'border-[#FFB300]/80 shadow-[0_0_35px_rgba(255,179,0,0.4)] scale-[1.02] opacity-100' 
                      : 'border-transparent opacity-0 scale-100'
                  }`}
                />

                {/* 3D Food Image Box (Dedicated Slow Smooth Highlight) */}
                <div 
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-950 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isHeroHovered 
                      ? 'scale-[1.05] -translate-y-2 shadow-[0_30px_60px_-12px_rgba(230,81,0,0.6)] brightness-110' 
                      : 'scale-100 translate-y-0 shadow-xl brightness-100'
                  }`}
                >
                  <img 
                    src="/pepper_chicken.png" 
                    alt="Simhapuri Signature Pepper Chicken"
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isHeroHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Warm Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0908]/90 via-transparent to-transparent" />

                  {/* 3D Sheen Highlight */}
                  <div 
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                      isHeroHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,235,170,0.25) 0%, transparent 50%, rgba(255,179,0,0.15) 100%)'
                    }}
                  />

                  {/* 3D Model Badge */}
                  <div className={`absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFB300]/60 text-[10px] font-black text-[#FFB300] tracking-wider flex items-center gap-1.5 shadow-2xl transition-all duration-700 ${
                    isHeroHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <Sparkles className="w-3 h-3 text-[#FFB300]" /> 3D DISH VIEW
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-8 left-8 z-30 pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#0C0908]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFB300]/50 text-xs font-black text-[#FFB300] shadow-xl">
                    <Award className="w-3.5 h-3.5 text-[#FFB300]" />
                    <span>#1 CHEF SPECIAL</span>
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="p-4 flex items-center justify-between text-xs border-t border-white/10 mt-2">
                  <div>
                    <h3 className={`text-xl font-extrabold tracking-tight font-serif-title transition-colors duration-500 ${
                      isHeroHovered ? 'text-[#FFB300]' : 'text-white'
                    }`}>
                      Signature Pepper Chicken
                    </h3>
                    <span className="font-extrabold text-[#FFB300] text-base block mt-0.5">₹220 <span className="text-gray-400 text-xs font-normal">(Half ₹140)</span></span>
                  </div>
                  <div className={`flex items-center gap-1 text-[#FF8A65] font-bold bg-white/5 px-3 py-2 rounded-xl border transition-all duration-500 ${
                    isHeroHovered ? 'border-[#FFB300] text-[#FFB300] scale-105' : 'border-white/10'
                  }`}>
                    <span>Inspect Menu</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Rating Badge (Top Right) */}
              <div className="absolute -top-5 -right-4 glass-dhaba p-4 rounded-2xl flex items-center gap-3 shadow-2xl hidden sm:flex border border-[#FFB300]/40 z-30">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB300] to-[#E65100] flex items-center justify-center text-black font-black text-lg shadow-md">
                  4.1
                </div>
                <div>
                  <div className="flex text-[#FFB300] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#FFB300]" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">540+ Google Reviews</p>
                </div>
              </div>

              {/* Location Badge (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 glass-dhaba p-4 rounded-2xl flex items-center gap-3 shadow-2xl hidden sm:flex border border-white/10 z-30">
                <div className="w-10 h-10 rounded-xl bg-[#17120F] border border-[#D84315]/30 flex items-center justify-center text-[#FF8A65] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">South Raju Palem</p>
                  <p className="text-[11px] text-gray-400 font-medium">Highway Access & Open Parking</p>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
