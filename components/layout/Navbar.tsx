'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useCartStore } from '@/lib/cartStore';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const cartRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const { items, increment, decrement, removeItem, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(8,8,8,0)', 'rgba(8,8,8,0.95)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(212,160,23,0)', 'rgba(212,160,23,0.3)']
  );

  useEffect(() => {
    setIsOpen(false);
    setIsCartOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      >
        <motion.div
          style={{ borderBottomColor: borderColor }}
          className="border-b border-transparent transition-colors"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <div className="flex items-baseline gap-1" style={{ fontFamily: 'var(--font-syne)' }}>
                <span className="text-white font-bold text-xl">VILLAGE</span>
                <span className="text-gold font-bold text-xl">KITCHEN</span>
              </div>
              <span className="text-muted text-[0.65rem] tracking-wider">Dargai Branch</span>
            </Link>

            <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'var(--font-syne)' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest transition-colors relative group ${
                    pathname === link.href ? 'text-gold' : 'text-white/60 hover:text-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-1/2 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? 'w-full -translate-x-1/2' : 'w-0 group-hover:w-full group-hover:-translate-x-1/2'
                  }`} />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="relative" ref={cartRef}>
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 text-white hover:text-gold transition-colors"
                >
                  <ShoppingBag size={24} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold text-black w-5 h-5 rounded-full text-[0.6rem] flex items-center justify-center font-bold">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {isCartOpen && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-40 hidden md:block"
                        onClick={() => setIsCartOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-80 bg-black2 border border-[rgba(212,160,23,0.3)] rounded-xl overflow-hidden shadow-xl z-50 hidden md:block"
                      >
                        <CartDropdown
                          items={items}
                          totalPrice={totalPrice}
                          onIncrement={increment}
                          onDecrement={decrement}
                          onRemove={removeItem}
                          onClose={() => setIsCartOpen(false)}
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              
              <MagneticButton href="/menu" variant="primary">
                Order Now
              </MagneticButton>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-white"
                >
                  <ShoppingBag size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold text-black w-4 h-4 rounded-full text-[0.5rem] flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-50 md:hidden"
          >
            <div className="bg-black2 border-t border-[rgba(212,160,23,0.3)] rounded-t-2xl max-h-[85vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-[rgba(212,160,23,0.2)]">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
                  Your Cart ({totalItems})
                </h3>
                <button onClick={() => setIsCartOpen(false)} className="text-muted hover:text-white p-2">
                  <X size={20} />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                <CartDropdownMobile
                  items={items}
                  totalPrice={totalPrice}
                  onIncrement={increment}
                  onDecrement={decrement}
                  onRemove={removeItem}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-black border-l border-[rgba(212,160,23,0.2)] p-8 flex flex-col gap-6">
          <button onClick={() => setIsOpen(false)} className="self-end text-white">
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl uppercase tracking-widest ${pathname === link.href ? 'text-gold' : 'text-white'}`}
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto">
            <MagneticButton href="/menu" variant="primary">
              Order Now
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </>
  );
};

function CartDropdown({ items, totalPrice, onIncrement, onDecrement, onRemove, onClose }: {
  items: { id: number; name: string; price: number; qty: number }[];
  totalPrice: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="p-4 border-b border-[rgba(212,160,23,0.2)]">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>Your Cart</h3>
          <span className="text-gold text-sm" style={{ fontFamily: 'var(--font-syne)' }}>PKR {totalPrice.toLocaleString()}</span>
        </div>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingBag className="mx-auto text-muted mb-2" size={32} />
            <p className="text-muted text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>Your cart is empty</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-3 border-b border-[rgba(212,160,23,0.1)] last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="text-white text-sm" style={{ fontFamily: 'var(--font-syne)' }}>{item.name}</h4>
                  <p className="text-gold text-xs" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR {item.price.toLocaleString()} each</p>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-muted hover:text-red-500 p-1">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full border border-gold bg-black4">
                  <button onClick={() => onDecrement(item.id)} className="w-7 h-7 flex items-center justify-center text-muted hover:text-white">
                    <Minus size={12} />
                  </button>
                  <span className="text-gold text-sm px-2 font-semibold min-w-[2rem] text-center" style={{ fontFamily: 'var(--font-syne)' }}>{item.qty}</span>
                  <button onClick={() => onIncrement(item.id)} className="w-7 h-7 flex items-center justify-center text-gold hover:text-gold-light">
                    <Plus size={12} />
                  </button>
                </div>
                <span className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR {(item.price * item.qty).toLocaleString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 bg-black">
          <Link href="/menu" onClick={onClose} className="block w-full text-center bg-gold text-black py-3 rounded-lg font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
}

function CartDropdownMobile({ items, totalPrice, onIncrement, onDecrement, onRemove }: {
  items: { id: number; name: string; price: number; qty: number }[];
  totalPrice: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <ShoppingBag className="mx-auto text-muted mb-4" size={48} />
        <p className="text-muted mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>Your cart is empty</p>
        <Link href="/menu" className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-syne)' }}>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-black3 rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-white" style={{ fontFamily: 'var(--font-syne)' }}>{item.name}</h4>
                <p className="text-gold text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR {item.price.toLocaleString()} x {item.qty}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-muted hover:text-red-500 p-1">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center rounded-full border border-gold bg-black4">
                <button onClick={() => onDecrement(item.id)} className="w-10 h-10 flex items-center justify-center text-muted hover:text-white">
                  <Minus size={16} />
                </button>
                <span className="text-gold text-base px-3 font-semibold min-w-[3rem] text-center" style={{ fontFamily: 'var(--font-syne)' }}>{item.qty}</span>
                <button onClick={() => onIncrement(item.id)} className="w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light">
                  <Plus size={16} />
                </button>
              </div>
              <span className="text-white text-lg font-semibold" style={{ fontFamily: 'var(--font-dm-sans)' }}>PKR {(item.price * item.qty).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-black border-t border-[rgba(212,160,23,0.2)]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted" style={{ fontFamily: 'var(--font-dm-sans)' }}>Total</span>
          <span className="text-gold text-2xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>PKR {totalPrice.toLocaleString()}</span>
        </div>
        <Link href="/menu" className="block w-full text-center bg-gold text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-gold-light transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
          Continue Shopping
        </Link>
      </div>
    </>
  );
}