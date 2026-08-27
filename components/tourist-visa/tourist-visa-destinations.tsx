'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TOURIST_VISA_COUNTRIES } from '@/data/touristVisaCountries';

export function TouristVisaDestinations() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="countries"
      aria-label="Tourist Visa Countries We Cover"
      className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="10 Global Destinations"
          badgeVariant="blue"
          title="Countries We"
          highlight="Cover."
          subtitle="Explore our specialized tourist and visitor visa documentation guidance across 10 top international travel destinations."
          className="mb-8 sm:mb-10"
        />

        {/* 10-Card Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {TOURIST_VISA_COUNTRIES.map((country) => (
            <motion.article
              key={country.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#00A8C6] hover:ring-2 hover:ring-[#00A8C6]/15 transition-all duration-300 ease-out h-full"
            >
              {/* Country Image Banner with Dark Gradient Scrim */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={country.image}
                  alt={`${country.country} Tourist Visa Assistance - Curatrix Private Limited`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                {/* Top Country Code Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                  <span className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white border border-white/20 shadow-xs">
                    <span className="text-base leading-none">{country.flagEmoji}</span>
                    <span>{country.code}</span>
                  </span>
                </div>

                {/* Prominent Country Name Overlaid on Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white z-10">
                  <h3 className="text-xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                    {country.country}
                  </h3>
                  <p className="text-[11px] font-semibold text-white/95 drop-shadow-xs truncate mt-0.5">
                    {country.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category Pill */}
                  <div className="inline-block px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-800">
                    {country.visaType}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {country.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    {country.popularHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={country.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-[#00A8C6] text-white py-2.5 px-3 text-xs font-bold shadow-xs transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-[#8FBE00]" />
                    <span>Inquire for {country.country}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
