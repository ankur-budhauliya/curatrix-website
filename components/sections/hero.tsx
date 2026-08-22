'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/ui/stat-counter';
import { GlowCard } from '@/components/ui/glow-card';
import {
  HERO_STATS,
  TRUST_PILLS,
  HERO_ADMIT_HIGHLIGHT,
  MENTOR_PREVIEW,
} from '@/data/stats';
import { CONTACT_INFO } from '@/data/navigation';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatBadgeVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-6, 6, -6],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const floatBadgeVariantsReverse: Variants = {
    initial: { y: 0 },
    animate: {
      y: [6, -6, 6],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-3 pb-10 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-14 bg-gradient-to-b from-[#F7F8F5] via-white to-[#F2F8EA]/30">
      {/* Subtle Background Glows */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[500px] bg-gradient-to-tr from-[#00A8C6]/15 via-[#8FBE00]/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#00A8C6]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#8FBE00]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Premium Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Cohort Announcement Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm border border-slate-200/80">
                <span className="flex h-2 w-2 rounded-full bg-[#8FBE00] animate-pulse" />
                <span className="text-[#00A8C6] font-bold">Fall 2026 & Spring 2027</span>
                <span className="text-slate-300">|</span>
                <span>Global Admissions Mentorship</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight text-slate-900 leading-[1.08]"
            >
              Your Gateway to the World’s{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A8C6] via-[#0094ae] to-[#8FBE00]">
                Elite Universities
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#8FBE00]/40 -z-10 h-3"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C65.5 3 184.5 3 247 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Bespoke end-to-end admissions mentorship, strategic profile building, and scholarship advisory for ambitious students targeting leading global institutions.
            </motion.p>

            {/* Action Buttons (Dual CTAs) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                href={CONTACT_INFO.bookingHref}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-[#8FBE00]/25 hover:shadow-xl hover:shadow-[#8FBE00]/35 transition-all text-slate-950 font-bold"
                trailingIcon={
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                }
              >
                Book Free Strategy Session
              </Button>

              <Button
                href="#calculator"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto text-slate-800 font-semibold border-slate-300/80 hover:bg-white"
                leadingIcon={
                  <svg
                    className="w-4 h-4 text-[#00A8C6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                Calculate Profile Strength
              </Button>
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3"
            >
              {TRUST_PILLS.map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70 shadow-2xs"
                >
                  <span className="text-sm">{pill.icon}</span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Student & Campus Visual Showcase */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Main Visual Glass Card */}
              <GlowCard glowColor="blue" className="p-3 sm:p-4">
                {/* Campus & Student Showcase Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Curatrix students on university campus"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    className="object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* On-Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#8FBE00]" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#8FBE00]">
                        Admissions Spotlight
                      </span>
                    </div>
                    <div className="text-sm font-bold truncate">
                      {HERO_ADMIT_HIGHLIGHT.studentName} → {HERO_ADMIT_HIGHLIGHT.university}
                    </div>
                    <div className="text-xs text-slate-300">
                      {HERO_ADMIT_HIGHLIGHT.program}
                    </div>
                  </div>
                </div>

                {/* Card Sub-strip: Mentors Stack & Rating */}
                <div className="mt-3.5 px-2 py-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Mentor Avatar Circles */}
                    <div className="flex -space-x-2 overflow-hidden">
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#00A8C6] text-white text-[11px] font-bold flex items-center justify-center">
                        M1
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#8FBE00] text-slate-950 text-[11px] font-bold flex items-center justify-center">
                        M2
                      </div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                        M3
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">
                        {MENTOR_PREVIEW.title}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {MENTOR_PREVIEW.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Rating Label */}
                  <div className="flex items-center gap-1 bg-[#8FBE00]/15 px-2.5 py-1 rounded-full border border-[#8FBE00]/30">
                    <span className="text-xs font-bold text-slate-800">
                      {MENTOR_PREVIEW.ratingLabel}
                    </span>
                  </div>
                </div>
              </GlowCard>

              {/* Floating Badge 1: Top Right - Scholarship Award */}
              <motion.div
                variants={floatBadgeVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-6 -right-4 sm:-right-6 z-20"
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80 max-w-[210px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#8FBE00]/20 text-xs">
                      🎓
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      Scholarship Guidance
                    </span>
                  </div>
                  <div className="text-sm font-black text-slate-900 truncate">
                    {HERO_ADMIT_HIGHLIGHT.scholarship}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {HERO_ADMIT_HIGHLIGHT.university}
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Visa Success Rate */}
              <motion.div
                variants={floatBadgeVariantsReverse}
                initial="initial"
                animate="animate"
                className="absolute -bottom-6 -left-4 sm:-left-6 z-20"
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/15 text-[#00A8C6]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900">
                        Visa Support (Client Metric)
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        Structured Guidance & Mock Drills
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Trust Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-2xs hover:border-[#00A8C6]/30 transition-colors"
              >
                <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                  <StatCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className={stat.highlight ? 'text-[#00A8C6]' : 'text-slate-900'}
                  />
                </div>
                <div className="mt-1.5 text-sm sm:text-base font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
