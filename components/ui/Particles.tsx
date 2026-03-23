'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  duration: number;
  delay: number;
}

export const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{ left: `${particle.x}%`, bottom: '0%' }}
          animate={{
            y: [-800],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};