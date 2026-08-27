'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { TOURIST_VISA_FAQS, TOURIST_VISA_WHATSAPP } from '@/data/touristVisaCountries';

export function TouristVisaFaqs() {
  return (
    <section
      id="tourist-visa-faqs"
      aria-label="Frequently Asked Questions on Tourist Visas"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative"
    >
      <Container size="narrow">
        {/* Section Heading */}
        <SectionHeading
          badge="Clear Answers"
          badgeVariant="blue"
          title="Tourist Visa"
          highlight="FAQs."
          subtitle="Everything you need to know about processing timelines, financial proof, and international visitor visa applications."
          className="mb-8 sm:mb-10"
        />

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <Accordion items={TOURIST_VISA_FAQS} />
        </motion.div>

        {/* Support Help Callout */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/15 text-[#00A8C6]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Have a specific query about an upcoming holiday?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our visa advisors are available on WhatsApp for direct guidance.
              </p>
            </div>
          </div>

          <a
            href={TOURIST_VISA_WHATSAPP.bottomCta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8FBE00] hover:bg-[#7ea800] px-4 py-2.5 text-xs font-bold text-slate-950 shadow-xs transition-all duration-200 shrink-0"
          >
            <MessageSquare className="h-3.5 w-3.5 fill-slate-950/20" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
