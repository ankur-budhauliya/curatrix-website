'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { StatCounter } from '@/components/ui/stat-counter';
import {
  UNIVERSITY_PARTNERS,
  TRUST_SUCCESS_METRICS,
  TRUST_ACCREDITATIONS,
} from '@/data/trust';

export function TrustSection() {
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
      id="trust"
      aria-label="Trust, Partner Universities and Success Metrics"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-y border-slate-200/80 relative"
    >
      {/* 1. University Logos Marquee Header */}
      <div className="mb-8 sm:mb-10">
        <Container size="wide">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Students Mentored for Leading Global Institutions
            </span>
          </div>
        </Container>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-3.5 py-1.5">
            {/* Duplicated list for seamless infinite loop */}
            {[...UNIVERSITY_PARTNERS, ...UNIVERSITY_PARTNERS].map((uni, idx) => (
              <div
                key={`${uni.id}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#00A8C6]/50 hover:shadow-xs transition-all shrink-0 cursor-default"
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

      {/* 2. Success Numbers & Metrics */}
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Track Record"
          badgeVariant="blue"
          title="Global Reach."
          highlight="Measurable Excellence."
          subtitle="Strategic admissions advisory, competitive scholarship procurement, and comprehensive visa guidance."
          className="mb-8 sm:mb-10"
        />

        {/* 4-Card Success Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TRUST_SUCCESS_METRICS.map((metric) => (
            <motion.div
              key={metric.id}
              variants={itemVariants}
              className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#00A8C6]/40"
            >
              <div>
                {/* Top indicator pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {metric.label}
                  </span>
                </div>

                {/* Animated Counter */}
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight my-1.5">
                  <StatCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    className="text-slate-900"
                  />
                </div>
              </div>

              {/* Subtitle / Explanation */}
              <p className="mt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Accreditations & Quality Assurance */}
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
                Admissions Standards &amp; Certifications
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
              Curatrix operates strictly under global international recruitment frameworks, ensuring transparent university representations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
            {TRUST_ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00A8C6]/20 text-[#00A8C6]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
