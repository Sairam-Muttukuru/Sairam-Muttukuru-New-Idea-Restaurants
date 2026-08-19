import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Clock, ShieldCheck, Heart, Flame } from 'lucide-react';
import { fromTop, fromBottom, fromLeft, fromRight, maskRevealLeft } from '../../utils/motionVariants';

export default function AboutSection() {
  const [activeStoryTab, setActiveStoryTab] = useState('recipe');

  const storyTabs = [
    { id: 'recipe', label: 'Hand-Ground Spices' },
    { id: 'freshness', label: 'Fresh Daily Sourcing' },
    { id: 'ambiance', label: 'Spacious Ambiance' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0C0908] relative border-b border-[#D84315]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Enters TOP → BOTTOM) */}
        <motion.div 
          variants={fromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="badge-dhaba shadow-lg">
            <Flame className="w-3 h-3 text-[#FFB300] fill-current" /> OUR CULINARY HERITAGE
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Hearty Dhaba Meals Prepared with <span className="text-gradient-dhaba">Passion & Tradition</span>
          </h2>
          <p className="text-[#A89B8C] text-base sm:text-lg leading-relaxed">
            Situated along South Raju Palem, Nellore, Simhapuri Family Dhaba blends rich regional recipes with tender, fresh ingredients. Designed for highway travelers and local family dining, we ensure rapid table service, clean air-conditioned halls, and stress-free open parking.
          </p>
        </motion.div>

        {/* Interactive Story Tabs Container */}
        <div className="glass-dhaba-card p-8 sm:p-10 rounded-3xl space-y-8 mb-16 border border-[#D84315]/30 shadow-2xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {storyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStoryTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  activeStoryTab === tab.id
                    ? 'bg-gradient-to-r from-[#E65100] to-[#FFB300] text-white shadow-lg shadow-[#E65100]/30 scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeStoryTab === 'recipe' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Text (Enters LEFT → CENTER) */}
              <motion.div 
                variants={fromLeft}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#FFB300] uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-[#E65100]" /> Freshly Ground Black Pepper & Spices
                </div>
                <h3 className="font-serif-title text-2xl font-extrabold text-white">
                  The Famous Nellore Pepper Spice Kick
                </h3>
                <p className="text-sm text-[#A89B8C] leading-relaxed font-normal">
                  Our signature Pepper Chicken starter uses freshly crushed whole black pepper, roasted curry leaves, garlic, and traditional masalas prepared daily in small batches for maximum flavor infusion.
                </p>
              </motion.div>

              {/* Right Image (Enters RIGHT → CENTER with Cinematic Mask Reveal) */}
              <motion.div 
                variants={maskRevealLeft}
                initial="hidden"
                animate="visible"
                className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src="/pepper_chicken.png" 
                  alt="Pepper Spice Dish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          )}

          {activeStoryTab === 'freshness' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                variants={fromLeft}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> 100% Fresh Sourcing
                </div>
                <h3 className="font-serif-title text-2xl font-extrabold text-white">
                  Fresh Meat Selected Daily
                </h3>
                <p className="text-sm text-[#A89B8C] leading-relaxed font-normal">
                  We source tender country chicken, mutton, and fresh vegetables every morning to maintain high culinary standards and tender taste in every meal.
                </p>
              </motion.div>
              <motion.div 
                variants={maskRevealLeft}
                initial="hidden"
                animate="visible"
                className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80" 
                  alt="Fresh Meat Sourcing" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          )}

          {activeStoryTab === 'ambiance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                variants={fromLeft}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-sky-400 uppercase tracking-wider">
                  <Heart className="w-4 h-4" /> Spacious Family Seating
                </div>
                <h3 className="font-serif-title text-2xl font-extrabold text-white">
                  Relaxing Dining Hall & Open Parking
                </h3>
                <p className="text-sm text-[#A89B8C] leading-relaxed font-normal">
                  Built to accommodate family gatherings and highway pitstops with clean AC halls, open parking for over 50 vehicles, and courteous staff service.
                </p>
              </motion.div>
              <motion.div 
                variants={maskRevealLeft}
                initial="hidden"
                animate="visible"
                className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80" 
                  alt="Dhaba Ambiance" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          )}

        </div>

        {/* 3 Value Pillars (Enter BOTTOM → TOP with Stagger) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            variants={fromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="glass-dhaba p-8 rounded-2xl space-y-3 border border-white/10 hover:border-[#D84315]/40 transition-all duration-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D84315]/15 border border-[#D84315]/30 flex items-center justify-center text-[#FF8A65]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-lg font-extrabold text-white">Fresh Daily Ingredients</h3>
            <p className="text-xs text-[#A89B8C] leading-relaxed font-medium">
              Selected daily, prepared with hand-ground spices under strict kitchen hygiene protocols.
            </p>
          </motion.div>

          <motion.div 
            variants={fromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.25}
            className="glass-dhaba p-8 rounded-2xl space-y-3 border border-white/10 hover:border-[#FFB300]/40 transition-all duration-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFB300]/15 border border-[#FFB300]/30 flex items-center justify-center text-[#FFB300]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-lg font-extrabold text-white">Family Dining Comfort</h3>
            <p className="text-xs text-[#A89B8C] leading-relaxed font-medium">
              Air-conditioned halls, comfortable seating for large groups, and hospitable customer service.
            </p>
          </motion.div>

          <motion.div 
            variants={fromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="glass-dhaba p-8 rounded-2xl space-y-3 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-lg font-extrabold text-white">Efficient Fast Service</h3>
            <p className="text-xs text-[#A89B8C] leading-relaxed font-medium">
              Minimal wait times whether you choose dine-in, drive-thru takeaway, or direct home delivery.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
