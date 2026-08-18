import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Flame, Car, Utensils, ShieldCheck, Star, Award, BookOpen, ChevronRight, MapPin, Sparkles, Clock, Heart, Users, Zap, Gift, Wine } from 'lucide-react';
import Hero3DCanvas from '../ui/Hero3DCanvas';
import { diningModes } from '../../data/modeData';
import { fromTop, fromBottom, fromLeft, fromRight, scaleIn } from '../../utils/motionVariants';

export default function HeroSection({ 
  currentModeId, 
  onSelectMode, 
  onOpenModal, 
  onOpenMenuLightbox 
}) {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const heroRef = useRef(null);

  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];

  // Multilayer Parallax Scroll Effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const foodY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const getPerkIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car className="w-4 h-4 text-[#FFB300]" />;
      case 'Utensils': return <Utensils className="w-4 h-4 text-[#FF8A65]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Heart': return <Heart className="w-4 h-4 text-pink-400 fill-current" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-300" />;
      case 'Wine': return <Wine className="w-4 h-4 text-rose-300" />;
      case 'Users': return <Users className="w-4 h-4 text-amber-400" />;
      case 'IceCream': return <Sparkles className="w-4 h-4 text-pink-400" />;
      case 'Flame': return <Flame className="w-4 h-4 text-orange-500 fill-current" />;
      case 'Zap': return <Zap className="w-4 h-4 text-yellow-400 fill-current" />;
      case 'Coffee': return <Utensils className="w-4 h-4 text-cyan-400" />;
      case 'Gift': return <Gift className="w-4 h-4 text-purple-400" />;
      case 'Award': return <Award className="w-4 h-4 text-amber-400" />;
      default: return <Sparkles className="w-4 h-4 text-[#FFB300]" />;
    }
  };

  return (
    <section 
      ref={heroRef} 
      className={`relative min-h-[94vh] pt-28 pb-20 md:py-36 overflow-hidden transition-colors duration-700 ${activeMode.themeClass} bg-[#0C0908] flex items-center border-b border-white/10`}
    >
      {/* Three.js 3D Background Canvas with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-80">
        <Hero3DCanvas />
      </motion.div>

      {/* Dynamic Ambient Glow Highlights according to active mode */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[180px] pointer-events-none transition-all duration-1000 animate-flame-glow"
        style={{ backgroundColor: activeMode.glowColor }}
      />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FFB300]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Experience Mode Quick Switcher Bar on Top of Hero */}
        <motion.div 
          variants={fromTop}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-8 flex flex-col items-center lg:items-start gap-2.5"
        >
          <div className="text-[11px] font-extrabold tracking-widest uppercase text-[#A89B8C] flex items-center gap-2">
            <span>✨ Select Your Dining Vibe:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 bg-[#17120F]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
            {diningModes.map((mode) => {
              const isSelected = mode.id === currentModeId;
              return (
                <button
                  key={mode.id}
                  onClick={() => onSelectMode(mode.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected 
                      ? 'bg-gradient-to-r text-white shadow-lg scale-105 border' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                  style={isSelected ? {
                    backgroundImage: `linear-gradient(135deg, ${mode.accentColor}, #BF360C)`,
                    borderColor: `${mode.accentColor}99`,
                    boxShadow: `0 4px 15px ${mode.glowColor}`
                  } : {}}
                >
                  <span className="text-base leading-none">{mode.emoji}</span>
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column Text Content */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Dynamic Badges */}
            <motion.div 
              key={activeMode.id + '-badges'}
              variants={fromTop}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="badge-dhaba shadow-lg badge-mode">
                <Flame className="w-4 h-4 fill-current animate-pulse text-[#FF5722]" />
                <span>{activeMode.badge}</span>
              </div>

              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black shadow-md border"
                style={{
                  backgroundColor: `${activeMode.accentColor}20`,
                  borderColor: `${activeMode.accentColor}60`,
                  color: '#FFFFFF'
                }}
              >
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeMode.accentColor }} />
                <span>{activeMode.statusBadge}</span>
              </div>
            </motion.div>

            {/* Dynamic Main Headline */}
            <AnimatePresence mode="wait">
              <motion.h1 
                key={activeMode.id + '-headline'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-serif-title font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white"
              >
                {activeMode.heroTitlePrefix} <br />
                <span className="text-gradient-dhaba" style={{
                  backgroundImage: `linear-gradient(135deg, #FFE0B2 0%, ${activeMode.accentColor} 50%, #FFB300 100%)`
                }}>
                  {activeMode.heroHighlight}
                </span> <br />
                {activeMode.heroTitleSuffix}
              </motion.h1>
            </AnimatePresence>

            {/* Dynamic Subtext */}
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeMode.id + '-subtext'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-[#A89B8C] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                {activeMode.heroSubtext}
              </motion.p>
            </AnimatePresence>

            {/* Dynamic Experience Perks */}
            <motion.div 
              key={activeMode.id + '-perks'}
              variants={fromBottom}
              initial="hidden"
              animate="visible"
              custom={0.9}
              className="pt-1 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-bold text-gray-200"
            >
              {activeMode.perks.map((perk, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 bg-[#17120F] border border-white/10 px-4 py-2.5 rounded-xl hover:border-white/30 transition-colors shadow-md"
                >
                  {getPerkIcon(perk.icon)}
                  <span>{perk.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fromRight}
              initial="hidden"
              animate="visible"
              custom={1.0}
              className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button 
                onClick={() => onOpenModal()}
                className="btn-mode-primary w-full sm:w-auto justify-center text-sm py-4 px-8 font-extrabold shadow-xl rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                Reserve For {activeMode.shortLabel}
              </button>

              <a 
                href="#menu" 
                className="btn-dhaba-outline w-full sm:w-auto justify-center text-sm py-4 px-8 font-extrabold shadow-xl rounded-xl flex items-center gap-2"
              >
                <span>Explore Full Menu</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Curated Food Showcase for Active Mode */}
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
                  ? 'border-white/40 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9)] bg-[#1F1813]' 
                  : 'border-white/10 shadow-2xl bg-[#17120F]'
              }`}>

                {/* Smooth 3D Spotlight Frame */}
                <div 
                  className={`absolute inset-4 rounded-2xl pointer-events-none transition-all duration-700 ease-out border ${
                    isHeroHovered 
                      ? 'border-[#FFB300]/80 shadow-[0_0_35px_rgba(255,179,0,0.4)] scale-[1.02] opacity-100' 
                      : 'border-transparent opacity-0 scale-100'
                  }`}
                />

                {/* Food Image Box */}
                <div 
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-950 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isHeroHovered 
                      ? 'scale-[1.05] -translate-y-2 shadow-[0_30px_60px_-12px_rgba(230,81,0,0.6)] brightness-110' 
                      : 'scale-100 translate-y-0 shadow-xl brightness-100'
                  }`}
                >
                  <img 
                    src={activeMode.curatedPlatter.image} 
                    alt={activeMode.curatedPlatter.name}
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                      isHeroHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0908]/90 via-transparent to-transparent" />

                  {/* 3D Model Badge */}
                  <div className={`absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFB300]/60 text-[10px] font-black text-[#FFB300] tracking-wider flex items-center gap-1.5 shadow-2xl transition-all duration-700 ${
                    isHeroHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <Sparkles className="w-3 h-3 text-[#FFB300]" /> 3D DISH VIEW
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-8 left-8 z-30 pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#0C0908]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-black text-[#FFB300] shadow-xl">
                    <Award className="w-3.5 h-3.5 text-[#FFB300]" />
                    <span>{activeMode.curatedPlatter.tag}</span>
                  </div>
                </div>

                {/* Card Bottom Bar */}
                <div className="p-4 flex items-center justify-between text-xs border-t border-white/10 mt-2">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-extrabold tracking-tight font-serif-title transition-colors duration-500 ${
                      isHeroHovered ? 'text-[#FFB300]' : 'text-white'
                    }`}>
                      {activeMode.curatedPlatter.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-extrabold text-[#FFB300] text-base">{activeMode.curatedPlatter.price}</span>
                      <span className="line-through text-gray-500 text-xs">{activeMode.curatedPlatter.originalPrice}</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-md">
                        {activeMode.curatedPlatter.savings}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal();
                    }}
                    className={`flex items-center gap-1 text-[#FF8A65] font-bold bg-white/5 px-3 py-2 rounded-xl border transition-all duration-500 cursor-pointer ${
                      isHeroHovered ? 'border-[#FFB300] text-[#FFB300] scale-105' : 'border-white/10'
                    }`}
                  >
                    <span>Pre-Order</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Rating Badge (Top Right) */}
              <div className="absolute -top-5 -right-4 glass-dhaba p-4 rounded-2xl flex items-center gap-3 shadow-2xl hidden sm:flex border border-white/10 z-30">
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
                <div className="w-10 h-10 rounded-xl bg-[#17120F] border border-white/10 flex items-center justify-center text-[#FF8A65] shrink-0">
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
