'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { WHATSAPP_CONFIG } from '@/data/navigation';

export function ConsultationCta() {
  return (
    <section
      id="book-consultation"
      aria-label="Book a Free Study Abroad Consultation"
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
            <span>Begin Your Global Journey</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Ready to Begin Your Admissions Journey to Top Global Universities?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect directly with our senior admissions advisors on WhatsApp for an immediate profile diagnostic session and personalized roadmap.
          </p>

          {/* Single Prominent WhatsApp CTA */}
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_CONFIG.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 hover:bg-slate-900 active:scale-[0.98] py-4 px-8 text-base font-bold text-white shadow-lg transition-all duration-200"
            >
              <MessageSquare className="h-5 w-5 text-[#8FBE00]" />
              <span>Connect on WhatsApp for Free Consultation</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* Trust Micro-Text */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/90">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-white" />
              <span>100% Free Initial Diagnostic</span>
            </span>
            <span>•</span>
            <span>USA • UK • Canada • Germany • Australia</span>
            <span>•</span>
            <span>Home Counselling Available</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
