'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = value % 1 !== 0 ? 1 : 0,
  duration = 2,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // luxury spring ease-out
      onUpdate(current) {
        setDisplayValue(current.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [isInView, value, decimals, duration]);

  return (
    <span
      ref={ref}
      aria-label={`${prefix}${value}${suffix}`}
      className={cn('tabular-nums font-bold tracking-tight', className)}
    >
      <span>{prefix}</span>
      <span>{displayValue}</span>
      <span>{suffix}</span>
    </span>
  );
}
