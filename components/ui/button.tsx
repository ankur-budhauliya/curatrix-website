import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'blue' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  leadingIcon,
  trailingIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2 font-semibold',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#8FBE00] text-slate-950 hover:bg-[#7ea800] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-[#8FBE00]/20 focus-visible:ring-[#8FBE00]',
    blue:
      'bg-[#00A8C6] text-white hover:bg-[#0094ae] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-[#00A8C6]/20 focus-visible:ring-[#00A8C6]',
    outline:
      'border border-slate-300 text-slate-800 bg-transparent hover:bg-slate-100 hover:border-slate-400 active:scale-[0.98] focus-visible:ring-slate-400',
    ghost:
      'text-slate-700 bg-transparent hover:bg-slate-200/60 active:scale-[0.98] focus-visible:ring-slate-400',
    glass:
      'bg-white/80 backdrop-blur-md border border-white/60 text-slate-900 hover:bg-white/95 shadow-sm active:scale-[0.98] focus-visible:ring-[#00A8C6]',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={combinedClasses}
        >
          {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
          <span>{children}</span>
          {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="shrink-0">{trailingIcon}</span>}
    </button>
  );
}
