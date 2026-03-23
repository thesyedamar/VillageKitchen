'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { featuredItems, getImageUrl } from '@/lib/menuData';
import { useCartStore } from '@/lib/cartStore';

export const FeaturedItems = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <span
              className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer block mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Signature Items
            </span>
            <h2
              className="text-white text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
            >
              Our Finest Creations
            </h2>
            <p className="text-muted" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Each dish crafted with the finest ingredients and love
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: '0 25px 60px rgba(212,160,23,0.25)' }}
              className="bg-black3 rounded-xl overflow-hidden border border-[rgba(212,160,23,0.15)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={getImageUrl(item.img)}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold text-[0.6rem] uppercase tracking-wider px-2 py-1 rounded" style={{ fontFamily: 'var(--font-syne)' }}>
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white text-sm uppercase tracking-wide mb-1" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
                  {item.name}
                </h3>
                <p className="text-muted text-xs line-clamp-2 mb-3" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gold text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR</span>
                    <span className="text-white text-sm ml-1" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}>
                      {item.price.toLocaleString()}
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border border-gold text-gold px-10 py-4 rounded-full uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              View Full Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};