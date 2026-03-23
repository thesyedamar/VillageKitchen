'use client';

import { Star } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

const testimonials = [
  {
    quote: "Best burger I've had in Dargai. The smash patty is just perfect.",
    name: 'Hamza K.',
    location: 'Dargai',
  },
  {
    quote: 'Delivery was super fast. Everything arrived hot. Will order again!',
    name: 'Fatima R.',
    location: 'Dargai',
  },
  {
    quote: 'The beef seekh roll is incredible. My whole family loves it.',
    name: 'Usman T.',
    location: 'Dargai',
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer block mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Testimonials
            </span>
            <h2
              className="text-white text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            >
              What People Say
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="bg-black3 rounded-xl p-6 border-l-4 border-gold border border-[rgba(212,160,23,0.1)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4A017" color="#D4A017" />
                  ))}
                </div>
                <p
                  className="text-white/80 text-base leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-gold text-sm uppercase mt-4" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
                  — {testimonial.name}, {testimonial.location}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};