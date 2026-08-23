'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Accordion } from '@/components/ui/accordion';
import { FAQS_DATA, FAQS_HEADER } from '@/data/faqs';
import { WHATSAPP_CONFIG } from '@/data/navigation';
import { cn } from '@/lib/utils';

const categories = ['All', 'Admissions', 'Home Counselling', 'Scholarships', 'Visas'] as const;

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS_DATA
      : FAQS_DATA.filter((faq) => faq.category === activeCategory);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative"
    >
      <Container size="narrow">
        {/* Section Heading */}
        <SectionHeading
          badge={FAQS_HEADER.badge}
          badgeVariant="green"
          title={FAQS_HEADER.title}
          highlight={FAQS_HEADER.highlight}
          subtitle={FAQS_HEADER.subtitle}
          className="mb-8 sm:mb-10"
        />

        {/* Category Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer',
                activeCategory === cat
                  ? 'bg-[#00A8C6] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200/80'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reusable Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <Accordion items={filteredFaqs} />
        </motion.div>

        {/* Bottom Contact Help Callout */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A8C6]/15 text-[#00A8C6]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Have a specific question about your profile or destination?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our advisors are available on WhatsApp for direct consultations.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_CONFIG.link}
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
