'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Home, Globe, Compass } from 'lucide-react';
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
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-14 pb-14 sm:pb-18 lg:pb-20 bg-[#F7F8F5]">
      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center"
        >
          {/* Left Column: Value Proposition & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Cohort Announcement Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-xs border border-slate-200/90">
                <span className="flex h-2 w-2 rounded-full bg-[#8FBE00]" />
                <span className="text-[#00A8C6]">Fall 2026 &amp; Spring 2027</span>
                <span className="text-slate-300">|</span>
                <span>Global Admissions Open</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8C6] to-[#8FBE00]">
                Study Abroad Partner
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Personalized admission mentorship, profile building, university shortlisting, scholarship guidance, visa assistance and end-to-end support for students planning to study overseas.
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

            {/* Primary Action Button (Direct WhatsApp) & Secondary CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 fill-slate-950/20" />
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 text-slate-950" />
              </a>

              <a
                href="#destinations"
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 text-slate-800 font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Compass className="h-4 w-4 text-[#00A8C6]" />
                <span>Explore Destinations</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Campus Showcase Card (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] lg:max-w-none rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-4 sm:p-5 transition-all duration-300">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Students on university campus with Curatrix Private Limited"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8FBE00] drop-shadow-xs">
                    Overseas Education Advisory
                  </span>
                  <div className="text-lg sm:text-xl font-black text-white leading-tight mt-1 drop-shadow-sm">
                    Curatrix Private Limited
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-200 mt-1 font-medium">
                    Global university admissions mentorship
                  </p>
                </div>
              </div>

              <div className="mt-3.5 px-2 py-1 flex items-center justify-between text-xs">
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

        {/* Value Pillars Strip (Strictly Study Abroad) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12 sm:mt-14 pt-8 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">5 Premier Countries</div>
                <div className="text-[11px] text-slate-500 mt-0.5">USA, UK, Canada, Germany, Australia</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8FBE00]/15 text-[#3b5200]">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Home Counselling</div>
                <div className="text-[11px] text-slate-500 mt-0.5">In-person guidance for families</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/10 text-[#00A8C6]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Transparent Advisory</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Zero hidden commercial bias</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-[#8FBE00]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">End-to-End Support</div>
                <div className="text-[11px] text-slate-500 mt-0.5">From shortlist to visa &amp; arrival</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
