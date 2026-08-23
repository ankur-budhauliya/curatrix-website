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
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300',
        'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-[#00A8C6]/10 hover:border-[#00A8C6]/50',
        className
      )}
    >
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A8C6]/15 to-[#8FBE00]/15 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
          </div>

          {feature.badge && (
            <Badge variant={feature.badgeVariant || 'blue'} size="sm">
              {feature.badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#00A8C6] transition-colors mb-2 leading-snug">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3.5 font-normal">
          {feature.description}
        </p>

        {/* Highlight Points Checklist */}
        <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-1">
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
