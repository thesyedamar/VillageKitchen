'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

export const CTABanner = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: '#D4A017',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeUp>
          <h2
            className="text-black text-5xl md:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
          >
            Ready to Order?
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-black/70 text-lg" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Skip the line. Order directly on WhatsApp in 30 seconds.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <motion.a
            href="https://wa.me/923471900500?text=Hi!%20I'd%20like%20to%20order%20from%20Village%20Kitchen%20Dargai"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full mt-8 hover:bg-black/90 transition-colors shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}
          >
            <MessageCircle size={20} />
            Order on WhatsApp Now
          </motion.a>
        </FadeUp>
      </div>
    </section>
  );
};