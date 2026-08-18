import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Car, ShieldCheck, DollarSign, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Car className="w-6 h-6 text-[#FFB300]" />,
      title: "Stress-Free Open Parking",
      desc: "Generous open parking space right on location. No congested city traffic or parking struggles."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#E65100]" />,
      title: "Signature Pepper Spices",
      desc: "Famous across Nellore for tender Pepper Chicken roasted in hand-ground black pepper & curry leaves."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      title: "Honest Portions & Price",
      desc: "Exceptional culinary quality and large portion sizes priced affordably between ₹200–₹400 per person."
    },
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: "Complete Convenience",
      desc: "Enjoy comfortable AC dine-in, fast drive-through takeaway, or direct home delivery."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0C0908] relative border-b border-[#D84315]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <span className="badge-dhaba">
            <Flame className="w-3 h-3 text-[#FFB300] fill-current" /> OUR ADVANTAGE
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why Diners Choose <span className="text-gradient-dhaba">Simhapuri Dhaba</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-dhaba-card p-6 rounded-2xl space-y-4 border border-white/10 hover:border-[#FFB300]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#17120F] border border-white/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h4 className="font-serif-title font-extrabold text-base text-white">{card.title}</h4>
              <p className="text-xs text-[#A89B8C] leading-relaxed font-normal">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
