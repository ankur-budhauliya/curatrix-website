'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Compass,
  FileCheck,
  Search,
  Calendar,
  Plane,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TOURIST_VISA_SERVICES } from '@/data/touristVisaCountries';
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
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Comprehensive Support"
          badgeVariant="green"
          title="What We"
          highlight="Help With."
          subtitle="From understanding consular requirements to organizing your travel documents, our advisors provide structured assistance for every phase."
          className="mb-8 sm:mb-10"
        />

        {/* 5-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TOURIST_VISA_SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Compass;

            return (
              <motion.article
                key={srv.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-[#00A8C6]/50 h-full"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00A8C6] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-3.5">
                    {srv.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {srv.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
