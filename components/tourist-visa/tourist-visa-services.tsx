'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
  Compass,
  FileCheck,
  Search,
  Calendar,
  Plane,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TOURIST_VISA_SERVICES, TOURIST_VISA_WHATSAPP } from '@/data/touristVisaCountries';
import { TouristVisaService } from '@/types/touristVisa';

const iconMap: Record<TouristVisaService['iconName'], LucideIcon> = {
  Compass,
  FileCheck,
  SearchCheck: Search,
  CalendarCheck: Calendar,
  Plane,
};

export function TouristVisaServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
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
      id="what-we-help-with"
      aria-label="Tourist Visa Services and Assistance"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Visa Assistance & Advisory"
          badgeVariant="green"
          title="Why Choose Curatrix for"
          highlight="Tourist Visas."
          subtitle="From embassy document verification and financial proof formatting to appointment booking and itinerary structuring—we ensure a seamless travel preparation experience."
          className="mb-10 sm:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Tourist Visual Showcase Banner (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl p-3.5 sm:p-4 group">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/tourist-visa/tourist.jpg"
                  alt="Traveler exploring international destinations with Curatrix Private Limited tourist visa guidance"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Floating Top Pill */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20 shadow-xs">
                    <Sparkles className="h-3.5 w-3.5 text-[#8FBE00]" />
                    <span>Hassle-Free Travel</span>
                  </div>
                </div>

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8FBE00] drop-shadow-xs">
                    Curatrix Private Limited
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-white leading-tight mt-1 drop-shadow-sm">
                    Plan Your Next Getaway with Complete Confidence
                  </div>
                  <p className="text-xs text-slate-200 mt-1.5 font-medium leading-relaxed">
                    Reliable tourist visa consultation for leisure vacations, business trips, and family holidays across 10 global destinations.
                  </p>
                </div>
              </div>

              {/* Bottom Card Summary Bar */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs border-t border-slate-100">
                <span className="font-bold text-slate-800">
                  100% Transparent Documentation
                </span>
                <span className="font-bold text-[#00A8C6]">
                  Direct Embassy Guidelines
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Services Grid (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 space-y-4"
          >
            {TOURIST_VISA_SERVICES.map((srv) => {
              const IconComponent = iconMap[srv.iconName] || Compass;

              return (
                <motion.article
                  key={srv.id}
                  variants={itemVariants}
                  whileHover={{ y: -2, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#00A8C6]/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-2xs mt-0.5">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00A8C6] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-1 mb-2.5">
                        {srv.description}
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 border-t border-slate-100">
                        {srv.deliverables.map((del, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={TOURIST_VISA_WHATSAPP.heroCta}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 fill-slate-950/20" />
                <span>Talk to a Tourist Visa Specialist</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
