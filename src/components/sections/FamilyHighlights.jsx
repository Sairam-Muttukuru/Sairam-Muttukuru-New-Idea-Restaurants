import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Heart, Sparkles, Utensils, Car, IceCream, Flame } from 'lucide-react';
import { fromTop, fromBottom, fromLeft, fromRight } from '../../utils/motionVariants';

export default function FamilyHighlights({ onOpenModal }) {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-[#FFB300]" />,
      title: "Spacious AC Family Halls",
      desc: "Private, clean air-conditioned halls designed for comfortable seating for families, birthday parties & large group gatherings.",
      variant: fromLeft,
      delay: 0.0
    },
    {
      icon: <IceCream className="w-6 h-6 text-pink-400" />,
      title: "Kids & Desserts Specials",
      desc: "Mild creamy Paneer Butter Masala, piping hot Butter Rotis, thick Mango Lassis, Shakes & Ice Creams loved by children.",
      variant: fromBottom,
      delay: 0.12
    },
    {
      icon: <Car className="w-6 h-6 text-emerald-400" />,
      title: "Safe Open Parking",
      desc: "Ample stress-free open parking space right on site for 50+ cars and family SUVs without any parking fee.",
      variant: fromRight,
      delay: 0.24
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FF8A65]" />,
      title: "100% Fresh & Sanitized",
      desc: "Fresh daily meat sourcing, hand-ground spices, high kitchen hygiene, and sanitized dining tables every single meal.",
      variant: fromTop,
      delay: 0.36
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#140F0C] relative border-b border-[#D84315]/20 overflow-hidden">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB300]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Enters BOTTOM → TOP) */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4 max-w-3xl mx-auto mb-16"
        >
          <span className="badge-dhaba shadow-lg">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-current" /> 100% FAMILY FRIENDLY
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Designed for <span className="text-gradient-dhaba">Memorable Family Dining</span>
          </h2>
          <p className="text-[#A89B8C] text-base sm:text-lg leading-relaxed font-normal">
            Whether you're stopping over during a weekend highway trip or celebrating a family dinner in Nellore, Simhapuri Dhaba offers a cozy, hygienic, and mouth-watering experience for all ages.
          </p>
        </motion.div>

        {/* Feature Grid with 4-Way Directional Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={item.variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={item.delay}
              className="glass-dhaba-card p-6 rounded-2xl space-y-4 border border-white/10 hover:border-[#FFB300]/40 transition-all duration-300 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1C1613] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif-title font-extrabold text-lg text-white group-hover:text-[#FFB300] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#A89B8C] leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Family Reservation CTA Box */}
        <motion.div 
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="glass-dhaba border border-[#D84315]/30 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FFB300] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FFB300]" /> HASSLE-FREE FAMILY SEATING
            </div>
            <h3 className="font-serif-title font-extrabold text-2xl text-white">
              Planning a Family Dinner or Birthday Feast?
            </h3>
            <p className="text-xs sm:text-sm text-[#A89B8C]">
              Reserve your AC table in advance and get instant WhatsApp confirmation from our manager!
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="btn-dhaba-gold py-3.5 px-8 text-sm font-extrabold shrink-0 shadow-xl"
          >
            <Users className="w-4 h-4" /> Book Family Table
          </button>
        </motion.div>

      </div>
    </section>
  );
}
