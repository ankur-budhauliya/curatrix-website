import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'blue' | 'slate' | 'outline' | 'gold';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export function Badge({
  className,
  variant = 'green',
  size = 'sm',
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    green: 'bg-[#8FBE00]/15 text-[#5e8000] border border-[#8FBE00]/30',
    blue: 'bg-[#00A8C6]/15 text-[#007d94] border border-[#00A8C6]/30',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
    gold: 'bg-amber-100/80 text-amber-900 border border-amber-300',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-semibold tracking-wide uppercase',
    md: 'text-xs px-2.5 py-1 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
