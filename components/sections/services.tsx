'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { Button } from '@/components/ui/button';
import { SERVICES_DATA } from '@/data/services';
import { CONTACT_INFO } from '@/data/navigation';

export function ServicesSection() {
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
      id="services"
      aria-label="Study Abroad Consulting Services"
      className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-[#F7F8F5] via-[#F0F8FA]/50 to-[#F7F8F5]"
    >
      {/* Soft Ambient Mesh Background Glows */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#00A8C6]/8 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#8FBE00]/8 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="End-to-End Mentorship Matrix"
          badgeVariant="blue"
          title="Precision Advisory for Your"
          highlight="Global Journey."
          subtitle="From profile diagnostics and Ivy-grade essay polish to visa mock drills and scholarship discovery—our bespoke services cover every milestone."
          className="mb-8 sm:mb-10"
        />

        {/* Services Cards Grid (3x3 Layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="flex">
              <ServiceCard service={service} className="w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Consultation Advisory Callout */}
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
                Unsure which mentorship plan matches your profile?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                Schedule a complimentary 30-minute diagnostic session with an admissions mentor to assess your profile and map out targeted university brackets.
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
            >
              Book 1-on-1 Strategy Session
            </Button>
            <Button
              href="#calculator"
              variant="outline"
              size="md"
              className="w-full sm:w-auto text-slate-800 font-semibold"
            >
              Free Eligibility Check
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
