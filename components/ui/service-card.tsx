'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  Target,
  FileEdit,
  GraduationCap,
  ShieldCheck,
  Coins,
  Briefcase,
  PlaneTakeoff,
  Home,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { ServiceItem } from '@/types/service';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const iconMap: Record<ServiceItem['iconName'], LucideIcon> = {
  Compass,
  Target,
  FileEdit,
  GraduationCap,
  ShieldCheck,
  Coins,
  Briefcase,
  PlaneTakeoff,
  Home,
};

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Compass;

  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300',
        'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-[#00A8C6]/10 hover:border-[#00A8C6]/50',
        service.featured
          ? 'border-[#00A8C6]/40 ring-1 ring-[#00A8C6]/20 bg-gradient-to-b from-white via-white to-[#F2F8EA]/30'
          : 'hover:border-[#00A8C6]/40',
        className
      )}
    >
      {/* Featured Ribbon / Highlight */}
      {service.featured && (
        <div className="absolute -top-2.5 right-5 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#00A8C6] to-[#8FBE00] px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white shadow-xs">
            ★ Core Offering
          </span>
        </div>
      )}

      <div>
        {/* Header: Icon & Tag */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A8C6]/15 to-[#8FBE00]/15 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
          </div>

          {service.tag && (
            <Badge variant={service.tagVariant || 'blue'} size="sm">
              {service.tag}
            </Badge>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A8C6]">
            {service.subtitle}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#00A8C6] transition-colors mt-0.5 leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3.5 font-normal">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-3.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Key Deliverables:
          </span>
          <ul className="space-y-1.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-2 border-t border-slate-100/60">
        <Link
          href={service.ctaHref || '#book-consultation'}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8C6] group-hover:text-[#0094ae] hover:underline"
        >
          <span>{service.ctaLabel || 'Learn More'}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
