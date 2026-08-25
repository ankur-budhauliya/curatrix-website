'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FileCheck, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TOURIST_VISA_REQUIRED_DOCUMENTS } from '@/data/touristVisaCountries';

export function TouristVisaDocuments() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
      id="required-documents"
      aria-label="Tourist Visa Required Documents Checklist"
      className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Essential Checklist"
          badgeVariant="green"
          title="Standard Required"
          highlight="Documents."
          subtitle="While specific consular requirements vary by destination, here is the universal core documentation checklist needed for international tourist visa filings."
          className="mb-8 sm:mb-10"
        />

        {/* 5-Category Checklist Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TOURIST_VISA_REQUIRED_DOCUMENTS.map((docCat) => (
            <motion.div
              key={docCat.id}
              variants={itemVariants}
              className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6]">
                    <FileCheck className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {docCat.category}
                  </h3>
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                  {docCat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Quick Advisory Callout Card */}
          <motion.div
            variants={itemVariants}
            className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8FBE00]/20 text-[#8FBE00]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  Personalized Checklist
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need a country-tailored document checklist for your upcoming holiday? Our advisors provide custom checklists aligned with current embassy rules.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#8FBE00] font-semibold">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>Zero fake processing claims or guarantees.</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
