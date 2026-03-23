'use client';

import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-[rgba(212,160,23,0.2)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <FadeUp>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                <span className="text-white font-bold text-xl">VILLAGE</span>
                <span className="text-gold font-bold text-xl">KITCHEN</span>
              </div>
              <p className="text-muted text-sm mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Dargai&apos;s favorite fast food destination since 2024.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: MessageCircle, href: 'https://wa.me/923471900500' },
                ].map(({ icon: Icon, href }, i) => (
                  <Link key={i} href={href} className="w-9 h-9 rounded-full border border-[rgba(212,160,23,0.3)] flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all">
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <h3 className="text-white text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>Quick Links</h3>
              <div className="flex flex-col gap-2">
                {['Home', 'Menu', 'Contact', 'Order on WhatsApp'].map((link) => (
                  <Link key={link} href={link === 'Home' ? '/' : link === 'Order on WhatsApp' ? 'https://wa.me/923471900500' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-muted hover:text-gold transition text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h3 className="text-white text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>Opening Hours</h3>
              <div className="text-muted text-sm space-y-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <p>Monday – Sunday</p>
                <p className="text-white">11:00 AM – 12:00 AM</p>
                <p className="text-xs mt-2">Last order 30 mins before closing</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div>
              <h3 className="text-white text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>Find Us</h3>
              <div className="text-muted text-sm space-y-2 mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <p>GV5X+2F6, Dargai, KPK</p>
                <p className="text-white">0347-1900500</p>
              </div>
              <Link href="https://wa.me/923471900500" className="inline-block bg-[#25D366] text-white text-xs px-4 py-2 rounded-full" style={{ fontFamily: 'var(--font-syne)' }}>
                Chat on WhatsApp
              </Link>
            </div>
          </FadeUp>
        </div>

        <div className="border-t border-[rgba(212,160,23,0.1)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            &copy; 2025 Village Kitchen Dargai. All rights reserved.
          </p>
          <p className="text-muted text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Made with in Dargai
          </p>
        </div>
      </div>
    </footer>
  );
};