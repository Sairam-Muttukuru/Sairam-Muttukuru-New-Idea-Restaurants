import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight, Send, Navigation, Flame } from 'lucide-react';
import { fromTop, fromBottom, fromLeft, fromRight } from '../../utils/motionVariants';

export default function LocationSection({ onOpenModal }) {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#0C0908] relative border-b border-[#D84315]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details (Enters LEFT → CENTER) */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <span className="badge-dhaba shadow-lg">
                <Flame className="w-3 h-3 text-[#FFB300] fill-current" /> VISIT OUR DHABA
              </span>
              <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Location & <span className="text-gradient-dhaba">Operating Hours</span>
              </h2>
              <p className="text-[#A89B8C] text-sm sm:text-base font-normal">
                Conveniently located along South Raju Palem, Nellore with direct highway access and dedicated open parking space.
              </p>
            </div>

            <div className="space-y-5">
              
              {/* Address (RIGHT → LEFT) */}
              <motion.div 
                variants={fromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.15}
                className="flex items-start gap-4 glass-dhaba p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E65100]/20 border border-[#E65100]/40 text-[#FF8A65] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-white text-base">Location Address</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
                    F236+X7X, South Raju Palem, Nellore, Andhra Pradesh 524002
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Simhapuri+Family+Dhaba+Nellore" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FFB300] hover:underline mt-2"
                  >
                    Open Google Maps <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Hours (BOTTOM → TOP) */}
              <motion.div 
                variants={fromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3}
                className="flex items-start gap-4 glass-dhaba p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-white text-base">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
                    Open Daily: <span className="font-extrabold text-emerald-400">11:00 AM – 11:00 PM</span>
                  </p>
                  <p className="text-xs text-[#A89B8C] mt-0.5 font-normal">AC Dine-in, Drive-thru Takeaway & Delivery active daily.</p>
                </div>
              </motion.div>

              {/* Phone (LEFT → RIGHT) */}
              <motion.div 
                variants={fromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.45}
                className="flex items-start gap-4 glass-dhaba p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E65100]/20 border border-[#E65100]/40 text-[#FF8A65] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-white text-base">Direct Phone Reservations</h4>
                  <a 
                    href="tel:07386823557" 
                    className="text-lg sm:text-xl font-extrabold text-white hover:text-[#FFB300] transition-colors block mt-0.5"
                  >
                    +91 73868 23557
                  </a>
                  <p className="text-xs text-[#A89B8C] mt-0.5 font-normal">Call manager directly for immediate orders & table seating.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Action Container (TOP → BOTTOM) */}
          <motion.div 
            className="lg:col-span-6"
            variants={fromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="glass-dhaba-card p-8 sm:p-10 rounded-3xl space-y-6 border border-[#D84315]/30 shadow-2xl">
              <div className="space-y-2">
                <h3 className="font-serif-title font-extrabold text-2xl text-white tracking-tight">Reserve Table or Pre-Order</h3>
                <p className="text-xs sm:text-sm text-[#A89B8C] font-medium">
                  Planning a family lunch or highway road trip stop? Submit your details below to notify our restaurant manager on WhatsApp.
                </p>
              </div>

              <div className="p-6 bg-[#0C0908] rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-gray-300">
                  <span>📍 South Raju Palem, Nellore</span>
                  <span className="text-emerald-400 font-bold">● Open Daily (11 AM - 11 PM)</span>
                </div>
                
                <div className="text-center py-6 border-y border-white/10 space-y-2">
                  <div className="text-3xl">🚗 🅿️</div>
                  <div className="font-serif-title text-base font-extrabold text-white">Ample Open Parking Space On Site</div>
                  <div className="text-xs text-[#A89B8C] font-normal">Spacious parking right outside dining entrance</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.google.com/?q=Simhapuri+Family+Dhaba+Nellore"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dhaba-outline flex-1 justify-center py-3.5 text-xs font-extrabold"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                  <button 
                    onClick={onOpenModal}
                    className="btn-dhaba-primary flex-1 justify-center py-3.5 text-xs font-extrabold shadow-lg"
                  >
                    <Send className="w-4 h-4" /> WhatsApp Booking
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
