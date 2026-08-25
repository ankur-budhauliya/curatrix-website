'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { TOURIST_VISA_WHATSAPP } from '@/data/touristVisaCountries';

export function TouristVisaCta() {
  return (
    <section
      id="tourist-visa-cta"
      aria-label="Tourist Visa Consultation Call-to-Action"
      className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-r from-[#00A8C6] via-[#0094ae] to-[#8FBE00] text-white"
    >
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="relative z-10 text-center space-y-6"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/30 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fast &amp; Transparent Assistance</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Need help with your Tourist Visa?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect directly with our visa documentation advisors on WhatsApp to review your target country, travel dates, and document checklist.
          </p>

          {/* Single Prominent WhatsApp CTA */}
          <div className="pt-2 flex justify-center">
            <a
              href={TOURIST_VISA_WHATSAPP.bottomCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 hover:bg-slate-900 active:scale-[0.98] py-4 px-8 text-base font-bold text-white shadow-lg transition-all duration-200"
            >
              <MessageSquare className="h-5 w-5 text-[#8FBE00]" />
              <span>Talk to a Visa Expert</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* Small Study Abroad Link at Bottom */}
          <div className="pt-4 border-t border-white/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Looking for university admissions or global mentorship? Explore our Study Abroad Services →</span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
