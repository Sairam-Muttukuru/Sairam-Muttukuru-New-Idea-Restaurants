import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Sparkles, Utensils, Phone, ChevronRight } from 'lucide-react';
import { fromBottom, fromTop, fromLeft, fromRight } from '../../utils/motionVariants';

export default function FullWidthCinematicBanner({ onOpenModal }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Slow Cinematic Scroll Zoom (1.0 -> 1.08)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[80vh] py-28 overflow-hidden bg-[#0C0908] flex items-center border-b border-[#D84315]/20"
    >
      {/* Background High-Res Cinematic Feast Image with Parallax Zoom */}
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80" 
          alt="Simhapuri Dhaba Feast Table" 
          className="w-full h-full object-cover brightness-50 contrast-110"
        />
        {/* Layered Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0908] via-[#0C0908]/75 to-[#0C0908]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0C0908]/40 to-[#0C0908]" />
      </motion.div>

      {/* Floating Ember Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#FFB300]/40 blur-sm animate-ping" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-[#FF5722]/50 blur-sm animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-8">
        
        {/* Frame Accent Line (Enters LEFT → RIGHT) */}
        <motion.div 
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-[#E65100]/30 border border-[#FFB300]/50 px-5 py-2 rounded-full text-xs font-black text-[#FFB300] uppercase tracking-widest shadow-2xl"
        >
          <Flame className="w-4 h-4 text-[#FF5722] fill-current animate-pulse" />
          <span>CELEBRATING NELLORE CULINARY HERITAGE</span>
        </motion.div>

        {/* Main Title (Enters TOP → BOTTOM) */}
        <motion.h2 
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="font-serif-title font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.12] max-w-4xl mx-auto"
        >
          Where Highway Travelers & Families <br />
          <span className="text-gradient-dhaba">Feast On Authentic Flame & Spice</span>
        </motion.h2>

        {/* Description (Enters BOTTOM → TOP) */}
        <motion.p 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="text-[#A89B8C] text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Slow-simmered handi gravies, piping hot butter tandoori rotis, and crisp pepper chicken cooked daily over natural wood flames in South Raju Palem.
        </motion.p>

        {/* CTA Buttons (Enter RIGHT → LEFT & LEFT → RIGHT) */}
        <motion.div 
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.45}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button 
            onClick={onOpenModal}
            className="btn-dhaba-primary py-4 px-9 text-sm font-extrabold shadow-2xl flex items-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>Pre-Order Family Table</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a 
            href="tel:07386823557"
            className="btn-dhaba-outline py-4 px-9 text-sm font-extrabold flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FF8A65]" />
            <span>Call Manager +91 73868 23557</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
