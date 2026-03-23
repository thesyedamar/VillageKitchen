'use client';

import Image from 'next/image';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1800&fit=crop&q=80" alt="Contact Background" fill className="object-cover" style={{ filter: 'brightness(0.25)' }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <FadeUp>
            <h1 className="text-white text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
              Find Us
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeUp>
              <div className="space-y-4">
                <div className="bg-black3 rounded-xl p-5 border border-[rgba(212,160,23,0.2)]">
                  <MapPin className="text-gold text-xl mb-2" size={24} />
                  <p className="text-muted text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Address</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>GV5X+2F6, Dargai, Khyber Pakhtunkhwa, Pakistan</p>
                </div>
                <a href="tel:03471900500" className="block bg-black3 rounded-xl p-5 border border-[rgba(212,160,23,0.2)] hover:border-gold transition-colors">
                  <Phone className="text-gold text-xl mb-2" size={24} />
                  <p className="text-muted text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Phone</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>0347-1900500</p>
                </a>
                <a href="https://wa.me/923471900500" className="block bg-black3 rounded-xl p-5 border border-[rgba(212,160,23,0.2)] hover:border-gold transition-colors">
                  <MessageCircle className="text-gold text-xl mb-2" size={24} />
                  <p className="text-muted text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-syne)' }}>WhatsApp</p>
                  <span className="inline-block bg-[#25D366] text-white text-xs px-4 py-2 rounded-full">Chat on WhatsApp</span>
                </a>
                <div className="bg-black3 rounded-xl p-5 border border-[rgba(212,160,23,0.2)]">
                  <Clock className="text-gold text-xl mb-2" size={24} />
                  <p className="text-muted text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Hours</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>Monday – Sunday: 11:00 AM – 12:00 AM</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-black3 rounded-xl border border-[rgba(212,160,23,0.2)] overflow-hidden h-[320px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26268.4!2d72.0!3d34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deb6c2e2d2d2d2%3A0x2f2f2f2f2f2f2f2f!2sDargai%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-black3 rounded-xl p-8 border border-[rgba(212,160,23,0.2)]">
                <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>Order Right Now</h3>
                <p className="text-muted mb-6" style={{ fontFamily: 'var(--font-dm-sans)' }}>Don&apos;t want to call? WhatsApp us your order directly.</p>
                <a href="https://wa.me/923471900500?text=Hi!%20I'd%20like%20to%20order%20from%20Village%20Kitchen%20Dargai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1aad54] text-white px-8 py-4 rounded-xl font-semibold uppercase tracking-wider transition-colors w-full justify-center" style={{ fontFamily: 'var(--font-syne)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}