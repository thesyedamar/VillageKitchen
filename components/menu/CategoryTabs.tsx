'use client';

import { useRef, useEffect } from 'react';
import { menuCategories } from '@/lib/menuData';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabsContainer = tabsRef.current;
    if (!tabsContainer) return;

    const activeButton = tabsContainer.querySelector('.active-tab');
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryName: string) => {
    onCategoryChange(categoryName);
    const element = document.getElementById(categoryName.toLowerCase());
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div ref={tabsRef} className="sticky top-[64px] z-30 bg-black/95 backdrop-blur border-b border-[rgba(212,160,23,0.2)] px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest whitespace-nowrap transition-all flex-shrink-0 ${
                activeCategory === category.name
                  ? 'bg-gold text-black border-gold font-semibold active-tab'
                  : 'bg-black3 border border-[rgba(212,160,23,0.2)] text-muted hover:text-white hover:border-white/20'
              }`}
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};