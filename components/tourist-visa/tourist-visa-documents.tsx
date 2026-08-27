'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FileCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
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

        {/* 6-Card Checklist Grid (5 Standard Categories + 1 Personalized Advisory Card) */}
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

          {/* Harmonized Personalized Checklist Advisory Card */}
          <motion.div
            variants={itemVariants}
            className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#00A8C6]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8FBE00]/15 text-[#5a7b00]">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Personalized Checklist
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#00A8C6]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#00A8C6] border border-[#00A8C6]/20">
                  Custom
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Need a country-tailored document checklist for your upcoming holiday? Our advisors provide custom checklists aligned with current embassy rules.
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Tied directly to your employment profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Bank balance sufficiency verification</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck className="h-4 w-4 text-[#8FBE00] shrink-0" />
              <span>Direct official embassy compliance</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
