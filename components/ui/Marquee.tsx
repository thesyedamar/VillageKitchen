'use client';

import { motion } from 'framer-motion';

export const Marquee = () => {
  const text = 'VILLAGE KITCHEN • FRESH DAILY • SMASH BURGERS • CRISPY ROLLS • DARGAI\'S FINEST • ORDER ON WHATSAPP • FAST DELIVERY • PREMIUM QUALITY •';
  
  return (
    <div className="overflow-hidden bg-black2 py-5 border-y border-[rgba(212,160,23,0.2)]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        <span className="text-gold uppercase text-sm tracking-widest mr-8">{text}</span>
        <span className="text-gold uppercase text-sm tracking-widest mr-8">{text}</span>
      </motion.div>
    </div>
  );
};