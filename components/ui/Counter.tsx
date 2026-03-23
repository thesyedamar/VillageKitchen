'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, motion } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  decimals?: number;
}

export const Counter = ({ to, suffix = '', decimals = 0 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const displayValue = useTransform(motionValue, (value) => {
    return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      style={{ fontFamily: 'var(--font-syne)' }}
    >
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};