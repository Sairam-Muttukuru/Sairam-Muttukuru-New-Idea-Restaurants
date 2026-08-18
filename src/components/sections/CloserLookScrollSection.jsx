import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, ShoppingBag, Eye, Award, CheckCircle2 } from 'lucide-react';
import Food3DViewer from '../3d/Food3DViewer';

export default function CloserLookScrollSection({ onOpenModal, onOpenFullscreen3D }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handiDishData = {
    name: 'Slow-Cooked Wood-Fired Clay Handi Natukodi',
    price: '₹200',
    halfPrice: '₹120',
    rating: '4.9',
    dishType: 'handi_chicken',
    description: 'Tender country chicken simmered slow in authentic earthen handi pots over natural flames with fresh hand-ground spices and pure desi ghee.'
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-[#0C0908] relative overflow-hidden border-b border-[#D84315]/20">
      
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#E65100]/10 rounded-full blur-[220px] pointer-events-none animate-flame-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="badge-dhaba shadow-lg">
            <Eye className="w-3.5 h-3.5 text-[#FFB300]" /> SCROLL-DRIVEN 3D CINEMATIC EXPERIENCE
          </span>
          <h2 className="font-serif-title font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            A Closer Look At Our <br />
            <span className="text-gradient-dhaba">Slow-Cooked Natukodi Handi</span>
          </h2>
          <p className="text-[#A89B8C] text-base sm:text-lg leading-relaxed font-normal">
            Explore every dimension of Simhapuri's signature earthen clay pot dish with live WebGL 3D manipulation.
          </p>
        </div>

        {/* Main 3D Interactive Center Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stage Details reveal on scroll */}
          <div className="lg:col-span-4 space-y-6 text-left order-2 lg:order-1">
            <div className="glass-dhaba p-6 rounded-3xl border border-[#FFB300]/30 space-y-4 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#FFB300] uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#FFB300]" /> CHEF SPECIALTY #1
              </div>
              <h3 className="font-serif-title font-extrabold text-2xl text-white">
                Earthen Clay Pot Flavor
              </h3>
              <p className="text-xs sm:text-sm text-[#A89B8C] leading-relaxed">
                As you scroll, the camera approaches the clay handi to inspect hand-ground black pepper, roasted curry leaves, and tender country chicken cooked slow in desi ghee.
              </p>

              <div className="space-y-2 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Desi Country Chicken</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Wood-Fired Natural Flames</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Hand-Ground Nellore Spices</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => onOpenFullscreen3D(handiDishData)}
                className="btn-dhaba-gold py-4 px-6 text-sm font-extrabold justify-center shadow-xl"
              >
                <Sparkles className="w-4 h-4" /> Fullscreen 3D Configurator
              </button>

              <button
                onClick={() => onOpenModal(handiDishData)}
                className="btn-dhaba-primary py-4 px-6 text-sm font-extrabold justify-center shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" /> Pre-Order Handi (₹200)
              </button>
            </div>
          </div>

          {/* Right Column: WebGL Interactive 3D Canvas */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative">
              <Food3DViewer 
                dishType="handi_chicken"
                autoRotate={true}
                enableControls={true}
                height="h-[420px] sm:h-[500px]"
                onOpenFullscreen={() => onOpenFullscreen3D(handiDishData)}
                showControlsBar={true}
              />

              {/* Scroll Progress Indicator Bar */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-[#A89B8C] px-2">
                <span>3D Storyteller Mode</span>
                <span className="text-[#FFB300]">Scroll Progress: {Math.round(scrollProgress * 100)}%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
