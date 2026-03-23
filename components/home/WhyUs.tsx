'use client';

import { motion } from 'framer-motion';
import { Zap, ChefHat, Gem } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    text: 'Order in 30 seconds on WhatsApp. Delivered in 15 minutes.',
  },
  {
    icon: ChefHat,
    title: 'Fresh Every Order',
    text: 'We never pre-make. Every item is cooked fresh when you order.',
  },
  {
    icon: Gem,
    title: 'Premium Ingredients',
    text: 'Finest local ingredients. International quality. Dargai prices.',
  },
];

export const WhyUs = () => {
  return (
    <section className="bg-black2 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer block mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Why Village Kitchen
            </span>
            <h2
              className="text-white text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            >
              More Than Just Food
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="pt-8 border-t border-[rgba(212,160,23,0.3)]">
                <feature.icon className="text-gold text-3xl mb-4" size={32} />
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-muted" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {feature.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};