import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Zap, Gift, Flame, Sparkles, CheckCircle2, ChevronRight, Utensils, ShieldCheck, Car, IceCream, Music, Wine } from 'lucide-react';
import { diningModes } from '../../data/modeData';
import { fromTop, fromBottom, fromLeft, fromRight } from '../../utils/motionVariants';

export default function FamilyHighlights({ currentModeId, onSelectMode, onOpenModal }) {
  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];

  return (
    <section id="experiences" className="py-20 md:py-24 bg-[#140F0C] relative border-b border-white/10 overflow-hidden">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeMode.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-3xl mx-auto mb-14"
        >
          <span className="badge-dhaba shadow-lg badge-mode">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB300]" /> CURATED DINING EXPERIENCES
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Tailored For <span className="text-gradient-dhaba">Every Occasion & Gathering</span>
          </h2>
          <p className="text-[#A89B8C] text-base sm:text-lg leading-relaxed font-normal">
            Whether it's a cozy couple date, a joyful family dinner, a lively friends hangout, or a grand celebration feast, discover how Simhapuri Dhaba sets the perfect table for you.
          </p>

          {/* Interactive Mode Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {diningModes.map((mode) => {
              const isSelected = mode.id === currentModeId;
              const IconComp = mode.iconName === 'Heart' ? Heart :
                               mode.iconName === 'Users' ? Users :
                               mode.iconName === 'Wine' ? Wine :
                               mode.iconName === 'Sparkles' ? Sparkles : Flame;
              return (
                <button
                  key={mode.id}
                  onClick={() => onSelectMode(mode.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-white/15 text-white border-[#FFB300] shadow-lg scale-105'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                  style={isSelected ? {
                    borderColor: mode.accentColor,
                    boxShadow: `0 0 20px ${mode.glowColor}`
                  } : {}}
                >
                  <IconComp className="w-4 h-4 text-[#FFB300]" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Highlight Cards for Active Mode */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeMode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12"
          >
            {/* Left: 3 Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeMode.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="glass-dhaba-card p-6 rounded-2xl space-y-3 border border-white/10 hover:border-white/30 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: `${activeMode.accentColor}30`, color: activeMode.accentColor }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-title font-bold text-base text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#A89B8C] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] uppercase tracking-wider font-extrabold text-[#FFB300]">
                    {activeMode.shortLabel} Feature #{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Curated Platter & Direct Reservation Card */}
            <div className="lg:col-span-5 glass-dhaba border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: activeMode.glowColor }}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-[#FFB300] border border-white/10">
                    {activeMode.curatedPlatter.tag}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    {activeMode.curatedPlatter.idealFor}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={activeMode.curatedPlatter.image} 
                    alt={activeMode.curatedPlatter.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-center border border-white/10 shadow-lg shrink-0"
                  />
                  <div>
                    <h4 className="font-serif-title font-extrabold text-lg sm:text-xl text-white">
                      {activeMode.curatedPlatter.name}
                    </h4>
                    <p className="text-xs text-[#A89B8C] line-clamp-2 mt-1">
                      {activeMode.curatedPlatter.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-extrabold text-[#FFB300] text-lg">{activeMode.curatedPlatter.price}</span>
                      <span className="text-xs line-through text-gray-500">{activeMode.curatedPlatter.originalPrice}</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                        {activeMode.curatedPlatter.savings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                <div className="text-xs text-gray-300 font-medium text-center sm:text-left flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Table + Platter Hold</span>
                </div>
                <button
                  onClick={() => onOpenModal()}
                  className="btn-mode-primary w-full sm:w-auto py-3 px-6 text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Reserve Table for {activeMode.shortLabel}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Mode Quick Comparison Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {diningModes.filter(m => m.id !== 'classic').map((mode) => {
            const isCurrent = mode.id === currentModeId;
            const IconComp = mode.iconName === 'Heart' ? Heart :
                             mode.iconName === 'Users' ? Users :
                             mode.iconName === 'Wine' ? Wine :
                             mode.iconName === 'Sparkles' ? Sparkles : Flame;
            return (
              <div 
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isCurrent 
                    ? 'bg-white/10 border-white/30 shadow-xl scale-102' 
                    : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/8'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB300]">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase text-[#FFB300] tracking-wider">
                    {mode.shortLabel}
                  </span>
                </div>
                <h4 className="font-serif-title font-bold text-sm text-white">{mode.label}</h4>
                <p className="text-[11px] text-[#A89B8C] mt-1 line-clamp-2">{mode.vibeTagline}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
