'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const MagneticButton = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = variant === 'primary' 
    ? 'bg-gold text-black hover:bg-gold-light' 
    : 'border border-gold text-gold hover:bg-gold/10';

  const buttonContent = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, fontFamily: 'var(--font-syne)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold uppercase tracking-widest cursor-pointer transition-all duration-300 ${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};