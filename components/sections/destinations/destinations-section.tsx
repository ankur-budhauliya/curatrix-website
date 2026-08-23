'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, Globe2 } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { DestinationCard } from '@/components/sections/destinations/destination-card';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { WHATSAPP_CONFIG } from '@/data/navigation';

export function DestinationsSection() {
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
      id="destinations"
      aria-label="Study Abroad Destinations"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Global Study Destinations"
          badgeVariant="blue"
          title="Strategic Pathways to the World’s Leading"
          highlight="Education Hubs."
          subtitle="Tailored admissions strategy, university shortlisting, and post-study work rights advisory across our 5 primary destinations."
          className="mb-8 sm:mb-10"
        />

        {/* 5-Card Grid: Desktop 5-Columns / Tablet 2-3 Columns / Mobile 1-Column */}
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

        {/* Bottom Country Comparison Advisory Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6"
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
                Connect directly with our senior advisors on WhatsApp to compare career outcomes, tuition fees, and scholarship opportunities.
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
            <span>Chat With Country Advisor</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
