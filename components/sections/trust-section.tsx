'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Home,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  UNIVERSITY_PARTNERS,
  TRUST_CORE_VALUES,
  TRUST_ACCREDITATIONS,
} from '@/data/trust';
import { TrustValueItem } from '@/types/trust';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<TrustValueItem['iconName'], LucideIcon> = {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Home,
  Workflow,
};

export function TrustSection() {
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
      id="trust"
      aria-label="Our Values, Global Institutions, and Standards"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-y border-slate-200/80 relative"
    >
      {/* 1. Global Institutions Marquee */}
      <div className="mb-10 sm:mb-12">
        <Container size="wide">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Guidance for Leading Global Institutions Across 5 Key Destinations
            </span>
          </div>
        </Container>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-3.5 py-1.5">
            {[...UNIVERSITY_PARTNERS, ...UNIVERSITY_PARTNERS].map((uni, idx) => (
              <div
                key={`${uni.id}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#00A8C6]/50 transition-all shrink-0 cursor-default"
              >
                {/* Monogram Emblem */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-black text-[11px] tracking-wider">
                  {uni.shortName.slice(0, 2).toUpperCase()}
                </div>

                {/* Name & Badge */}
                <div className="flex flex-col text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {uni.shortName}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[9px] font-semibold text-[#00A8C6] uppercase">
                      {uni.country}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[9px] text-slate-500 font-medium">
                      {uni.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Core Values Grid (No fake numbers or statistics) */}
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Our Commitments"
          badgeVariant="blue"
          title="Our Foundation. Built on"
          highlight="Integrity & Excellence."
          subtitle="Every student’s aspiration is unique. We provide transparent, ethical, and dedicated admissions mentorship designed around candidate success."
          className="mb-8 sm:mb-10"
        />

        {/* 6 Core Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TRUST_CORE_VALUES.map((val) => {
            const IconComponent = iconMap[val.iconName] || Compass;

            return (
              <motion.div
                key={val.id}
                variants={itemVariants}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#00A8C6]/40"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6] group-hover:bg-[#00A8C6] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {val.badge && (
                      <Badge variant="slate" size="sm">
                        {val.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Value Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00A8C6] transition-colors mb-2">
                    {val.title}
                  </h3>

                  {/* Value Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. Accreditations & Standards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 sm:mt-12 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-white/10 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#8FBE00] mb-1.5 border border-white/15">
                Advisory Integrity
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Admissions Standards &amp; Professional Ethics
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
              Curatrix Private Limited operates strictly under transparent global international education guidelines, ensuring honest university representations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
            {TRUST_ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00A8C6]/20 text-[#00A8C6]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {acc.title}
                  </h4>
                  <div className="text-[11px] text-[#8FBE00] font-medium mt-0.5">
                    {acc.issuer}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
