'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/lib/menuData';
import { useCartStore } from '@/lib/cartStore';
import { getImageUrl } from '@/lib/menuData';

interface ItemCardProps {
  item: MenuItem;
  index: number;
}

export const ItemCard = ({ item, index }: ItemCardProps) => {
  const { items, addItem, increment, decrement } = useCartStore();
  const cartItem = items.find((i) => i.id === item.id);
  const qty = cartItem?.qty || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 50px rgba(212,160,23,0.25)' }}
      className={`bg-black3 rounded-xl overflow-hidden border ${
        qty > 0 ? 'border-gold shadow-[0_0_15px_rgba(212,160,23,0.15)]' : 'border-[rgba(212,160,23,0.15)]'
      } transition-all`}
    >
      <div className="relative aspect-square overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="relative w-full h-full">
          <Image src={getImageUrl(item.img)} alt={item.name} fill className="object-cover" />
        </motion.div>
        {item.badge && (
          <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold text-[0.6rem] uppercase tracking-wider px-2 py-1 rounded" style={{ fontFamily: 'var(--font-syne)' }}>
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-white text-sm uppercase tracking-wide mb-1" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
          {item.name}
        </h3>
        <p className="text-muted text-xs line-clamp-2 mb-3 hidden sm:block" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {item.desc}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-gold text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR</span>
            <span className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}>
              {item.price.toLocaleString()}
            </span>
          </div>
          {qty === 0 ? (
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
              className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center hover:bg-gold-light transition-colors"
            >
              <Plus size={16} />
            </motion.button>
          ) : (
            <div className="flex items-center rounded-full border border-gold bg-black4">
              <button onClick={() => decrement(item.id)} className="w-8 h-8 flex items-center justify-center text-muted hover:text-white">
                <Minus size={14} />
              </button>
              <span className="text-gold text-sm px-1 min-w-[2rem] text-center font-semibold" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
                {qty}
              </span>
              <button onClick={() => increment(item.id)} className="w-8 h-8 flex items-center justify-center text-gold hover:text-gold-light">
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};