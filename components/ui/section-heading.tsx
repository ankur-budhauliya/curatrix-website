import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'green' | 'blue' | 'slate';
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  badge,
  badgeVariant = 'blue',
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
  titleAs: Component = 'h2',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl space-y-2 sm:space-y-2.5',
        isCentered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className={cn('flex pb-0.5', isCentered ? 'justify-center' : 'justify-start')}>
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}

      <Component className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.12]">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8C6] to-[#8FBE00]">
            {highlight}
          </span>
        )}
      </Component>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal pt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
