'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Home,
  Building2,
  Coins,
  ShieldCheck,
  Workflow,
  FileText,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { WhyCuratrixFeature } from '@/types/feature';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const iconMap: Record<WhyCuratrixFeature['iconName'], LucideIcon> = {
  UserCheck,
  Home,
  Building2,
  Coins,
  ShieldCheck,
  Workflow,
  FileText,
};

interface FeatureCardProps {
  feature: WhyCuratrixFeature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const IconComponent = iconMap[feature.iconName] || UserCheck;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-out h-full overflow-hidden',
        'bg-white hover:bg-slate-50/60 border border-slate-200/90 hover:border-[#00A8C6] shadow-xs hover:shadow-xl hover:shadow-[#00A8C6]/10',
        className
      )}
    >
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-out shadow-2xs">
            <IconComponent className="h-5 w-5" />
          </div>

          {feature.badge && (
            <Badge variant={feature.badgeVariant || 'blue'} size="sm">
              {feature.badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#00A8C6] transition-colors duration-200 mb-2 leading-snug">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 font-normal">
          {feature.description}
        </p>

        {/* Highlight Points Checklist */}
        <div className="space-y-1.5 pt-3.5 border-t border-slate-100 mb-1">
          <ul className="space-y-1.5">
            {feature.highlightPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
