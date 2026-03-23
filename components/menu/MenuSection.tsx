'use client';

import { ItemCard } from './ItemCard';
import { MenuCategory } from '@/lib/menuData';

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <section className="scroll-mt-32 pt-8 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-6 sm:mb-8">
          <h2 className="text-white uppercase text-xl sm:text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}>
            {category.name}
          </h2>
          <span className="text-muted text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Gourmet Selection
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {category.items.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};