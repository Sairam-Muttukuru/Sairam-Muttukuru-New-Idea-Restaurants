import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Utensils, Phone, Clock, MapPin, ChevronRight, Heart } from 'lucide-react';
import { fromBottom, fromTop, fromLeft, fromRight } from '../../utils/motionVariants';

export default function FinalCTASection({ onOpenModal }) {
  return (
    <section className="py-24 md:py-36 bg-[#0C0908] relative overflow-hidden border-b border-[#D84315]/20">
      
      {/* Background Lighting & Pulsing Flame Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E65100]/12 rounded-full blur-[200px] pointer-events-none animate-flame-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="glass-dhaba border border-[#FFB300]/40 rounded-3xl p-10 sm:p-16 max-w-4xl mx-auto space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Steam Particles Overlay */}
          <div className="absolute top-0 inset-x-0 h-16 pointer-events-none flex justify-center gap-8 opacity-40">
            <div className="w-2 h-12 bg-white/20 blur-sm rounded-full animate-steam-1" />
            <div className="w-3 h-16 bg-[#FFB300]/30 blur-sm rounded-full animate-steam-2" />
            <div className="w-2 h-10 bg-white/20 blur-sm rounded-full animate-steam-3" />
          </div>

          {/* Top Badge */}
          <motion.div 
            variants={fromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#D84315]/20 border border-[#FFB300]/40 px-4 py-1.5 rounded-full text-xs font-black text-[#FFB300] uppercase tracking-widest"
          >
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-current" />
            <span>AUTHENTIC HIGHWAY DHABA HOSPITALITY</span>
          </motion.div>

          {/* Main Headline (BOTTOM → TOP) */}
          <motion.h2 
            variants={fromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            className="font-serif-title font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            COME HUNGRY. <br />
            <span className="text-gradient-dhaba">LEAVE HAPPY.</span>
          </motion.h2>

          {/* Subtext (TOP → BOTTOM) */}
          <motion.p 
            variants={fromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="text-[#A89B8C] text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed"
          >
            Open daily 11:00 AM – 11:00 PM with generous open parking, clean AC family halls, and piping hot Pepper Chicken in South Raju Palem.
          </motion.p>

          {/* CTA Buttons (LEFT → RIGHT and RIGHT → LEFT) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.45}
              onClick={onOpenModal}
              className="btn-dhaba-primary w-full sm:w-auto py-4 px-8 text-sm font-extrabold shadow-2xl flex items-center justify-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Reserve Table / Order</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>

            <motion.a 
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.45}
              href="tel:07386823557"
              className="btn-dhaba-gold w-full sm:w-auto py-4 px-8 text-sm font-extrabold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 73868 23557</span>
            </motion.a>
          </div>

          {/* Quick Features Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-[#A89B8C] font-bold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFB300]" /> Open Daily 11 AM - 11 PM
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF8A65]" /> South Raju Palem, Nellore
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
