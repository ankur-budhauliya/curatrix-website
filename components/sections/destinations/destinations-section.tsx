'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Globe2, Compass } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { DestinationCard } from '@/components/sections/destinations/destination-card';
import { Button } from '@/components/ui/button';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { CONTACT_INFO } from '@/data/navigation';

export function DestinationsSection() {
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
      id="destinations"
      aria-label="Study Abroad Destinations"
      className="pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-[#EBF7FA]/70 via-[#F3FAFC] to-[#F7F8F5] border-t border-slate-200/70"
    >
      {/* Soft Ambient Radial Mesh Glows */}
      <div
        className="pointer-events-none absolute top-10 -left-20 w-[500px] h-[500px] bg-[#00A8C6]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#8FBE00]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Global Study Destinations"
          badgeVariant="blue"
          title="Strategic Pathways to the World’s Leading"
          highlight="Education Hubs."
          subtitle="Tailored admissions strategy, university shortlisting, and post-study work rights advisory across top-tier destinations."
          className="mb-8 sm:mb-10"
        />

        {/* 5-Card Grid: Desktop 5-Columns / Tablet 2-3 Columns / Mobile Fluid Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {DESTINATIONS_DATA.map((dest) => (
            <motion.div key={dest.id} variants={itemVariants} className="flex h-full">
              <DestinationCard destination={dest} className="w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Country Matching Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/15 text-[#00A8C6]">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                Need help picking between the USA, UK, Canada, Germany, or Australia?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                Our advisors compare career outcomes, STEM OPT duration, tuition fees, and scholarship probability across destinations for your specific academic profile.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto">
            <Button
              href={CONTACT_INFO.bookingHref}
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-bold shadow-sm"
              leadingIcon={<Compass className="h-4 w-4" />}
            >
              Get Destination Comparison
            </Button>
            <Button
              href="#calculator"
              variant="outline"
              size="md"
              className="w-full sm:w-auto text-slate-800 font-semibold"
            >
              Calculate Profile Score
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
