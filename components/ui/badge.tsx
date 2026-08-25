import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'blue' | 'slate' | 'outline' | 'gold' | 'dark';
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
    green: 'bg-[#8FBE00]/15 text-[#3b5200] border border-[#8FBE00]/40',
    blue: 'bg-[#00A8C6]/15 text-[#006072] border border-[#00A8C6]/40',
    slate: 'bg-slate-100 text-slate-800 border border-slate-200/90',
    outline: 'bg-white/80 text-slate-800 border border-slate-300',
    gold: 'bg-amber-100 text-amber-900 border border-amber-300/80',
    dark: 'bg-black/60 text-white border border-[#8FBE00]/60 backdrop-blur-md shadow-xs',
  };

  const sizeStyles = {
    sm: 'text-[10px] h-5 px-2.5 font-bold tracking-wider uppercase',
    md: 'text-xs h-6 px-3 font-bold tracking-wider uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full select-none shrink-0 leading-none transition-all duration-200',
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
      <span>{children}</span>
    </span>
  );
}
