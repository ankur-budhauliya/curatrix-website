'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle2, Plane, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { WHATSAPP_CONFIG } from '@/data/navigation';

interface TouristCountryCard {
  id: string;
  country: string;
  code: string;
  flag: string;
  image: string;
  visaType: string;
  tagline: string;
}

const TOURIST_COUNTRIES: TouristCountryCard[] = [
  {
    id: 'usa',
    country: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    image: '/images/tourist-visa/usa.jpg',
    visaType: 'B1 / B2 Tourist Visa',
    tagline: 'DS-160 & Consular Appointment Support',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    image: '/images/tourist-visa/uk.jpg',
    visaType: 'Standard Visitor Visa (6M)',
    tagline: 'Cover Letter & VFS Submission Guidance',
  },
  {
    id: 'canada',
    country: 'Canada',
    code: 'CAN',
    flag: '🇨🇦',
    image: '/images/tourist-visa/canada.jpg',
    visaType: 'Visitor Visa / TRV',
    tagline: 'Portal Filing & Purpose of Travel Support',
  },
  {
    id: 'germany',
    country: 'Germany',
    code: 'GER',
    flag: '🇩🇪',
    image: '/images/tourist-visa/germany.jpg',
    visaType: 'Schengen Tourist Visa',
    tagline: 'European Travel & Insurance Checklist',
  },
  {
    id: 'uae',
    country: 'United Arab Emirates',
    code: 'UAE',
    flag: '🇦🇪',
    image: '/images/tourist-visa/uae.jpg',
    visaType: '30 / 60-Day Tourist Visa',
    tagline: 'Express Dubai Holiday Documentation',
  },
  {
    id: 'singapore',
    country: 'Singapore',
    code: 'SGP',
    flag: '🇸🇬',
    image: '/images/tourist-visa/singapore.jpg',
    visaType: 'Electronic Tourist Visa',
    tagline: 'eVisa & Form 14A Verification',
  },
  {
    id: 'thailand',
    country: 'Thailand',
    code: 'THA',
    flag: '🇹🇭',
    image: '/images/tourist-visa/thailand.jpg',
    visaType: 'Single Entry Tourist Visa',
    tagline: 'eVisa & Entry Requirements Check',
  },
];

export function TouristVisaSection() {
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
      id="tourist-visa-section"
      aria-label="Tourist Visa Services by Curatrix Private Limited"
      className="py-14 sm:py-18 lg:py-22 bg-[#0B1519] text-white border-t border-white/10 relative overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8FBE00] border border-white/15">
            <Plane className="h-3.5 w-3.5" />
            <span>Complementary Travel Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Tourist Visa Services
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Planning an international vacation? We provide professional tourist visa assistance, documentation support, and application guidance for selected countries.
          </p>
        </div>

        {/* 7-Card Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {TOURIST_COUNTRIES.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00A8C6] hover:ring-2 hover:ring-[#00A8C6]/20 transition-all duration-300 ease-out h-full shadow-lg hover:shadow-2xl"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={`${item.country} Tourist Visa with Curatrix Private Limited`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                {/* Country Flag & Code Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white border border-white/20 shadow-xs">
                  <span>{item.flag}</span>
                  <span>{item.code}</span>
                </div>

                {/* Country Name Overlaid */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <h3 className="text-xl font-black tracking-tight text-white drop-shadow-md">
                    {item.country}
                  </h3>
                  <div className="text-xs font-semibold text-[#8FBE00] drop-shadow-xs truncate">
                    {item.visaType}
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00A8C6] shrink-0" />
                    <span>Documentation Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#8FBE00] shrink-0" />
                    <span>Application Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00A8C6] shrink-0" />
                    <span>Embassy &amp; Slot Guidance</span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-white/10">
                  <a
                    href={WHATSAPP_CONFIG.touristVisaCountryLink(item.country)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-[#00A8C6] text-white py-2.5 px-3 text-xs font-bold transition-all duration-200"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-[#8FBE00]" />
                    <span>Inquire for {item.country}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          {/* 8th Card: Full Tourist Visa Page Portal Link */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between rounded-2xl p-6 bg-gradient-to-br from-[#00A8C6]/25 to-[#8FBE00]/25 border border-white/20 h-full shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8FBE00] text-slate-950 font-bold shadow-xs">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black text-white">
                Detailed Tourist Visa Guide
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Explore comprehensive document checklists, step-by-step submission timelines, and visa requirements across all destinations.
              </p>
            </div>

            <Link
              href="/tourist-visa"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 py-3 px-4 text-xs font-bold transition-all duration-200 shadow-sm"
            >
              <span>View Dedicated Visa Page</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
