'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { Particles } from '@/components/ui/Particles';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Counter } from '@/components/ui/Counter';
import { FadeUp } from '@/components/ui/FadeUp';

export const Hero = () => {
  const titleWords = ["DARGAI'S", 'FINEST'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1800&fit=crop&q=80"
          alt="Village Kitchen Hero"
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.3)' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <FadeUp>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <span
                  className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  EST. 2024 • DARGAI, KPK
                </span>
              </div>
            </FadeUp>

            <div className="space-y-2">
              {titleWords.map((word, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 80, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`text-5xl md:text-6xl lg:text-7xl xl:text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] ${
                      index === 1 ? 'bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent' : 'text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            <FadeUp delay={0.6}>
              <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Premium smash burgers, crispy rolls & street-style flavors — made fresh to order at Dargai&apos;s favorite spot.
              </p>
            </FadeUp>

            <FadeUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton href="/menu" variant="primary">
                  Explore Full Menu
                  <ArrowRight size={18} />
                </MagneticButton>
                <MagneticButton href="https://wa.me/923471900500" variant="secondary">
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </MagneticButton>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="flex items-center gap-6 md:gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="text-gold text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                    <Counter to={500} suffix="+" />
                  </div>
                  <div className="text-muted text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Orders<br />Daily
                  </div>
                </div>
                <div className="h-8 w-px bg-gold/40" />
                <div className="flex items-center gap-3">
                  <div className="text-gold text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                    <Counter to={3.5} decimals={1} suffix="★" />
                  </div>
                  <div className="text-muted text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Google<br />Rating
                  </div>
                </div>
                <div className="h-8 w-px bg-gold/40" />
                <div className="flex items-center gap-3">
                  <div className="text-gold text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
                    <Counter to={15} suffix="min" />
                  </div>
                  <div className="text-muted text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Avg<br />Delivery
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-gold/30 -m-8"
            />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-gold shadow-[0_0_80px_rgba(212,160,23,0.4)]">
                <Image
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&fit=crop"
                  alt="Featured dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black border border-gold text-gold px-4 py-2 rounded-full text-xs uppercase tracking-wider flex items-center gap-1" style={{ fontFamily: 'var(--font-syne)' }}>
                <Star size={12} fill="currentColor" />
                #1 in Dargai
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};