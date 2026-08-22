'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'green' | 'slate';
}

export function GlowCard({
  children,
  className,
  glowColor = 'blue',
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowGradients = {
    blue: 'rgba(0, 168, 198, 0.15)',
    green: 'rgba(143, 190, 0, 0.15)',
    slate: 'rgba(15, 23, 42, 0.08)',
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 transition-all duration-300',
        className
      )}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {/* Spotlight cursor glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowGradients[glowColor]}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
