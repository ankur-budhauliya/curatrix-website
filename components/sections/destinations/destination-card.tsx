'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Calendar,
  GraduationCap,
  Coins,
  Briefcase,
  MessageSquare,
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
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 ease-out h-full',
        'bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#00A8C6] hover:ring-2 hover:ring-[#00A8C6]/15',
        className
      )}
    >
      {/* Large Image Banner with Strong Dark Gradient Scrim */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={destination.image}
          alt={`Study abroad in ${destination.country} with Curatrix Private Limited`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Stronger overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        {/* Floating Top Flag & Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white border border-white/20 shadow-xs">
            <span className="text-base leading-none">{destination.flagEmoji}</span>
            <span>{destination.code}</span>
          </span>

          {destination.highlightBadge && (
            <Badge variant="dark" size="sm">
              {destination.highlightBadge}
            </Badge>
          )}
        </div>

        {/* Prominent Country Name Overlaid on Image with High Contrast */}
        <div className="absolute bottom-3 left-3.5 right-3.5 text-white z-10">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            {destination.country}
          </h3>
          <p className="text-xs font-semibold text-white/95 drop-shadow-xs truncate mt-0.5">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3.5">
          {/* Brief Summary */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
            {destination.description}
          </p>

          {/* Key Facts & Guidelines Grid */}
          <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
            {/* Intakes */}
            <div className="flex items-start gap-2">
              <Calendar className="h-3.5 w-3.5 text-[#00A8C6] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold text-slate-800">Intakes: </span>
                <span className="text-slate-600 text-[11px] font-medium">{destination.popularIntakes}</span>
              </div>
            </div>

            {/* Tuition & Living Cost */}
            <div className="flex items-start gap-2">
              <Coins className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold text-slate-800">Tuition: </span>
                <span className="text-slate-600 text-[11px] font-medium">{destination.avgTuitionRange}</span>
              </div>
            </div>

            {/* Work Rights */}
            <div className="flex items-start gap-2">
              <Briefcase className="h-3.5 w-3.5 text-[#00A8C6] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="font-bold text-slate-800">Post-Study Work: </span>
                <span className="text-slate-600 text-[11px] font-medium">{destination.workOpportunities}</span>
              </div>
            </div>
          </div>

          {/* Popular Degrees Chips */}
          <div className="pt-2.5 border-t border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-[#00A8C6]" />
              <span>Popular Programs:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {destination.popularDegrees.slice(0, 3).map((deg) => (
                <span
                  key={deg}
                  className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700 border border-slate-200/60"
                >
                  {deg}
                </span>
              ))}
              {destination.popularDegrees.length > 3 && (
                <span className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                  +{destination.popularDegrees.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Action -> Direct WhatsApp */}
        <div className="mt-4 pt-3.5 border-t border-slate-100">
          <a
            href={destination.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-[#00A8C6] text-white py-2.5 px-3 text-xs font-bold shadow-xs transition-all duration-200 active:scale-[0.98]"
          >
            <MessageSquare className="h-3.5 w-3.5 text-[#8FBE00]" />
            <span>Consult on {destination.country}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
