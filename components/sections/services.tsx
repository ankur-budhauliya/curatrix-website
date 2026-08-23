'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { SERVICES_DATA } from '@/data/services';
import { WHATSAPP_CONFIG } from '@/data/navigation';

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
      className="py-12 sm:py-16 lg:py-20 bg-[#F7F8F5] border-t border-slate-200/80 relative"
    >
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
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6"
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
                Connect on WhatsApp with an admissions mentor to assess your profile and map out targeted university brackets.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_CONFIG.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] px-5 py-3 text-sm font-bold text-slate-950 shadow-xs transition-all duration-200 shrink-0"
          >
            <MessageSquare className="h-4 w-4 fill-slate-950/20" />
            <span>Book Strategy Session on WhatsApp</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
