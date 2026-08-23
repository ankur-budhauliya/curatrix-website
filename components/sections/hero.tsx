'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Home, Globe } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { WHATSAPP_CONFIG } from '@/data/navigation';

export function Hero() {
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
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-18 bg-[#F7F8F5]">
      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Value Proposition & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Cohort Announcement Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-xs border border-slate-200">
                <span className="flex h-2 w-2 rounded-full bg-[#8FBE00]" />
                <span className="text-[#00A8C6]">Fall 2026 &amp; Spring 2027</span>
                <span className="text-slate-300">|</span>
                <span>Global Admissions Mentorship</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              Your Strategic Gateway to the World’s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8C6] to-[#8FBE00]">
                Elite Universities.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Bespoke admissions mentorship, strategic profile building, scholarship guidance, and personalized home counselling for students targeting top-tier global institutions across the USA, UK, Canada, Germany, and Australia.
            </motion.p>

            {/* Core Value Checklist */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#8FBE00]" />
                <span>1-on-1 Profile Strategy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#8FBE00]" />
                <span>Home Counselling Available</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#8FBE00]" />
                <span>Transparent &amp; Ethical Process</span>
              </span>
            </motion.div>

            {/* Primary Action Button (Direct WhatsApp) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] py-3.5 px-6 text-sm sm:text-base font-bold text-slate-950 shadow-sm transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 fill-slate-950/20" />
                <span>Book Free Strategy Session on WhatsApp</span>
                <ArrowRight className="h-4 w-4 text-slate-950" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Campus Showcase Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-md p-3 sm:p-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Students on university campus with Curatrix Private Limited"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8FBE00]">
                    Bespoke Advisory
                  </span>
                  <div className="text-base font-black text-white leading-tight mt-0.5">
                    Curatrix Private Limited
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Global admissions &amp; educational mentorship
                  </p>
                </div>
              </div>

              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  5 Key Study Destinations
                </span>
                <span className="font-semibold text-[#00A8C6]">
                  USA • UK • CA • DE • AU
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Value Pillars Strip (Zero Fake Numbers) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00A8C6]/10 text-[#00A8C6]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">5 Top Destinations</div>
                <div className="text-[11px] text-slate-500">USA, UK, Canada, Germany, Australia</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8FBE00]/15 text-[#5a7b00]">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Home Counselling</div>
                <div className="text-[11px] text-slate-500">In-person guidance for families</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00A8C6]/10 text-[#00A8C6]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Transparent Advisory</div>
                <div className="text-[11px] text-slate-500">Zero hidden commercial bias</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">End-to-End Support</div>
                <div className="text-[11px] text-slate-500">From shortlist to visa &amp; arrival</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
