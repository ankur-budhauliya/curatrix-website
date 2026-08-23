'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  MessageSquare,
  Compass,
  Target,
  Send,
  MailCheck,
  ShieldCheck,
  Plane,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ADMISSION_STEPS, ROADMAP_HEADER } from '@/data/roadmap';
import { TimelineStep } from '@/types/timeline';
import { WHATSAPP_CONFIG } from '@/data/navigation';

const iconMap: Record<TimelineStep['iconName'], LucideIcon> = {
  MessageSquare,
  Compass,
  Target,
  Send,
  MailCheck,
  ShieldCheck,
  Plane,
};

export function AdmissionProcess() {
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
      id="roadmap"
      aria-label="7-Stage Admission Process Roadmap"
      className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 relative"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge={ROADMAP_HEADER.badge}
          badgeVariant="blue"
          title={ROADMAP_HEADER.title}
          highlight={ROADMAP_HEADER.highlight}
          subtitle={ROADMAP_HEADER.subtitle}
          className="mb-8 sm:mb-10"
        />

        {/* 7-Step Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative"
        >
          {ADMISSION_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.iconName] || Compass;

            return (
              <motion.div
                key={step.stepNumber}
                variants={itemVariants}
                className="group relative flex flex-col justify-between rounded-2xl p-4 sm:p-4.5 bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#00A8C6]/50 hover:bg-white transition-all duration-300 h-full"
              >
                <div>
                  {/* Step Milestone Indicator & Number */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComponent className="h-4 w-4" />
                    </div>

                    <span className="text-xs font-black tracking-wider text-slate-400 group-hover:text-[#00A8C6] transition-colors">
                      0{step.stepNumber}
                    </span>
                  </div>

                  {/* Subtitle / Tagline */}
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#00A8C6] mb-0.5">
                    {step.tagline}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 leading-snug mb-2 group-hover:text-[#00A8C6] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Connector Arrow (hidden on last item) */}
                {idx < ADMISSION_STEPS.length - 1 && (
                  <div className="hidden xl:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-[#00A8C6] transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 max-w-xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Ready to begin Stage 01 of your admissions roadmap?
            </span>
            <a
              href={WHATSAPP_CONFIG.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] px-4 py-2 text-xs font-bold text-slate-950 shadow-xs transition-all duration-200 whitespace-nowrap"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-slate-950/20" />
              <span>Start on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
