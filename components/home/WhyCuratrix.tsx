'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/home/FeatureCard';
import { Button } from '@/components/ui/button';
import { WHY_CURATRIX_FEATURES, WHY_CURATRIX_HEADER } from '@/data/whyCuratrix';
import { CONTACT_INFO } from '@/data/navigation';

export function WhyCuratrix() {
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
      id="why-curatrix"
      aria-label="Why Choose Curatrix Academic Advisors"
      className="pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-[#F7FAF2] via-[#F3F9EA]/60 to-[#F7F8F5] border-t border-[#8FBE00]/20"
    >
      {/* Subtle Ambient Radial Mesh Glows */}
      <div
        className="pointer-events-none absolute top-10 -right-20 w-[450px] h-[450px] bg-[#8FBE00]/8 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#00A8C6]/8 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge={WHY_CURATRIX_HEADER.badge}
          badgeVariant="green"
          title={WHY_CURATRIX_HEADER.title}
          highlight={WHY_CURATRIX_HEADER.highlight}
          subtitle={WHY_CURATRIX_HEADER.subtitle}
          className="mb-8 sm:mb-10"
        />

        {/* 6-Card Grid: Desktop 3 Cols / Tablet 2 Cols / Mobile 1 Col */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {WHY_CURATRIX_FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="flex h-full">
              <FeatureCard feature={feature} className="w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Mentorship Guarantee / Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8FBE00]/20 text-[#5a7b00]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Experience Personalized Global Admissions Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                Connect with our advisory board to build a strategic admissions profile tailored to top universities in the USA, UK, Canada, Germany, or Australia.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto">
            <Button
              href={CONTACT_INFO.bookingHref}
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-bold shadow-sm"
              leadingIcon={<Calendar className="h-4 w-4" />}
              trailingIcon={<ArrowRight className="h-3.5 w-3.5" />}
            >
              Book Free Strategy Call
            </Button>
            <Button
              href="#calculator"
              variant="outline"
              size="md"
              className="w-full sm:w-auto text-slate-800 font-semibold"
            >
              Check Eligibility
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
