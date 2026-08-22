'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  GraduationCap,
  Coins,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { DestinationItem } from '@/types/destination';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: DestinationItem;
  className?: string;
}

export function DestinationCard({ destination, className }: DestinationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300',
        'bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-[#00A8C6]/10 hover:border-[#00A8C6]/50',
        className
      )}
    >
      {/* Top Banner Image with Overlay Scrim */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <Image
          src={destination.image}
          alt={`Study in ${destination.country} with Curatrix Academic Advisors`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Floating Top Flag & Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-slate-900 shadow-xs">
            <span className="text-base leading-none">{destination.flagEmoji}</span>
            <span>{destination.code}</span>
          </span>

          {destination.highlightBadge && (
            <Badge variant="green" size="sm">
              {destination.highlightBadge}
            </Badge>
          )}
        </div>

        {/* On-Image Country Title */}
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <h3 className="text-lg font-black tracking-tight text-white leading-tight drop-shadow-xs">
            {destination.country}
          </h3>
          <p className="text-[11px] font-medium text-slate-200 truncate">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Brief Summary */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
            {destination.description}
          </p>

          {/* Key Facts & Guidelines Grid */}
          <div className="space-y-2 pt-2.5 border-t border-slate-100 text-xs">
            {/* Intakes */}
            <div className="flex items-start gap-2">
              <Calendar className="h-3.5 w-3.5 text-[#00A8C6] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800">Intakes: </span>
                <span className="text-slate-500 text-[11px]">{destination.popularIntakes}</span>
              </div>
            </div>

            {/* Tuition & Living Cost */}
            <div className="flex items-start gap-2">
              <Coins className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800">Tuition: </span>
                <span className="text-slate-500 text-[11px]">{destination.avgTuitionRange}</span>
              </div>
            </div>

            {/* Work Rights */}
            <div className="flex items-start gap-2">
              <Briefcase className="h-3.5 w-3.5 text-[#00A8C6] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800">Post-Study Work: </span>
                <span className="text-slate-500 text-[11px]">{destination.workOpportunities}</span>
              </div>
            </div>
          </div>

          {/* Popular Degrees Chips */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Popular Programs:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {destination.popularDegrees.slice(0, 3).map((deg) => (
                <span
                  key={deg}
                  className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-700"
                >
                  {deg}
                </span>
              ))}
              {destination.popularDegrees.length > 3 && (
                <span className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                  +{destination.popularDegrees.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="mt-4 pt-3 border-t border-slate-100/80">
          <Link
            href={destination.ctaHref}
            className="group/btn w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2 px-3 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#00A8C6] active:scale-[0.98]"
          >
            <span>Explore {destination.country}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
