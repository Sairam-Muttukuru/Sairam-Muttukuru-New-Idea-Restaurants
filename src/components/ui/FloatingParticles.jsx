import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const particles = [
    { id: 1, top: '15%', left: '8%', size: 10, delay: 0, duration: 10 },
    { id: 2, top: '35%', right: '10%', size: 14, delay: 2, duration: 12 },
    { id: 3, top: '65%', left: '5%', size: 12, delay: 1, duration: 11 },
    { id: 4, top: '80%', right: '15%', size: 8, delay: 1.5, duration: 9 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#D4AF37] blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
