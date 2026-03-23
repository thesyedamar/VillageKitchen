'use client';

import { motion } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeUp = ({ children, delay = 0, className = '' }: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};