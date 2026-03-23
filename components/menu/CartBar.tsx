'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';
import { buildWhatsAppMessage } from '@/lib/whatsapp';

export const CartBar = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const [pulse, setPulse] = useState(false);
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  useEffect(() => {
    if (totalItems > 0) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  const handleWhatsApp = () => {
    const url = buildWhatsAppMessage(items, totalPrice);
    window.open(url, '_blank');
  };

  const previewItems = items.slice(0, 2);
  const remainingItems = totalItems - 2;

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bottom-0 left-0 right-0 z-50 bg-black2 border-t border-[rgba(212,160,23,0.3)] px-4 pt-3 pb-4 ${pulse ? 'animate-[pulse-gold_0.6s_ease-out]' : ''}`}
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag className="text-gold" size={20} />
                  <span className="absolute -top-2 -right-2 bg-gold text-black w-5 h-5 rounded-full text-[0.6rem] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                </div>
                <span className="text-white text-sm" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}>
                  {totalItems} item{totalItems > 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex-1 px-4 truncate hidden sm:block">
                <p className="text-muted text-xs truncate" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {previewItems.map((item) => item.name).join(', ')}
                  {remainingItems > 0 && ` & ${remainingItems} more`}
                </p>
              </div>
              <div className="text-right">
                <div className="text-muted text-[0.6rem] uppercase tracking-widest hidden sm:block" style={{ fontFamily: 'var(--font-syne)' }}>
                  Total
                </div>
                <div className="text-gold text-lg" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
                  PKR {totalPrice.toLocaleString()}
                </div>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full h-14 rounded-xl bg-[#25D366] hover:bg-[#1aad54] flex items-center justify-center gap-2 text-white"
              style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ORDER ON WHATSAPP
            </motion.button>
          </div>
          <style jsx>{`
            @keyframes pulse-gold {
              0% { box-shadow: 0 0 0 0px rgba(212,160,23,0.5); }
              100% { box-shadow: 0 0 0 20px rgba(212,160,23,0); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};