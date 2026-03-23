'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { menuCategories } from '@/lib/menuData';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { MenuSection } from '@/components/menu/MenuSection';
import { CartBar } from '@/components/menu/CartBar';
import { FadeUp } from '@/components/ui/FadeUp';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isClickScrollingRef = useRef(false);
  const lastScrollY = useRef(0);

  const handleCategoryChange = useCallback((categoryName: string) => {
    if (activeCategory === categoryName) return;
    setActiveCategory(categoryName);
    isClickScrollingRef.current = true;
    const element = document.getElementById(categoryName.toLowerCase());
    if (element) {
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => { isClickScrollingRef.current = false; }, 1000);
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        if (isClickScrollingRef.current) return;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => { isClickScrollingRef.current = false; }, 150);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current); };
  }, []);

  useEffect(() => {
    const observerOptions = { rootMargin: '-20% 0px -60% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      if (isClickScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          const category = entry.target.getAttribute('data-category');
          if (category && category !== activeCategory) setActiveCategory(category);
        }
      });
    }, observerOptions);
    menuCategories.forEach((category) => {
      const element = document.getElementById(category.name.toLowerCase());
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <div className="bg-black min-h-screen pb-24 sm:pb-28 md:pb-32">
      <section className="relative h-[35vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1800&fit=crop&q=80" alt="Menu Background" fill className="object-cover" style={{ filter: 'brightness(0.25)' }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeUp>
            <span className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D4A017] via-[#F5C842] to-[#D4A017] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer block mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
              Explore
            </span>
            <h1 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
              Our Menu
            </h1>
            <p className="text-muted text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>Home &rarr; Menu</p>
          </FadeUp>
        </div>
      </section>

      <CategoryTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <div className="w-full">
        {menuCategories.map((category) => (
          <div key={category.name} id={category.name.toLowerCase()} data-category={category.name}>
            <MenuSection category={category} />
          </div>
        ))}
      </div>

      <CartBar />
    </div>
  );
}