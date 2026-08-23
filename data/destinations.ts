import { DestinationItem } from '@/types/destination';
import { WHATSAPP_CONFIG } from '@/data/navigation';

/**
 * STUDY DESTINATIONS DATA
 * Strictly restricted to USA, UK, Canada, Germany, and Australia.
 * Uses official country flag photography hosted in /public/images/destinations/
 * All consultation CTAs route to WhatsApp.
 */
export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'usa',
    country: 'United States',
    code: 'USA',
    flagEmoji: '🇺🇸',
    tagline: 'Ivy League & Tier-1 STEM Research',
    description:
      'World-renowned research institutions, flexible curricula, vast campus resources, and extensive post-graduation career opportunities in tech, finance, and engineering.',
    popularIntakes: 'Fall (Aug/Sep) • Spring (Jan)',
    popularDegrees: ['Computer Science', 'Data Science', 'MBA / Finance', 'Biotech', 'Electrical Eng.'],
    avgTuitionRange: '$25,000 – $55,000 / yr (Estimate)',
    avgLivingCost: '$12,000 – $18,000 / yr (Estimate)',
    workOpportunities: 'Up to 3-Year STEM OPT • 20 hrs/wk On-Campus',
    highlightBadge: 'Top Global Choice',
    image: '/images/destinations/usa.jpg',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    code: 'UK',
    flagEmoji: '🇬🇧',
    tagline: 'Russell Group & Historic Academic Prestige',
    description:
      'Accelerated 1-year Master’s programs, centuries-old academic traditions, globally recognized qualifications, and direct connections to European financial capitals.',
    popularIntakes: 'September (Autumn) • January (Winter)',
    popularDegrees: ['Business Analytics', 'Law / LLM', 'Finance', 'AI & Robotics', 'International Relations'],
    avgTuitionRange: '£15,000 – £35,000 / yr (Estimate)',
    avgLivingCost: '£10,000 – £14,000 / yr (Estimate)',
    workOpportunities: '2-Year Graduate Route (PSW) • 20 hrs/wk Term-Time',
    highlightBadge: '1-Year Master’s',
    image: '/images/destinations/uk.jpg',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'canada',
    country: 'Canada',
    code: 'CAN',
    flagEmoji: '🇨🇦',
    tagline: 'High Quality of Life & Progressive Pathways',
    description:
      'U15 top-tier research universities, welcoming multicultural communities, co-op work-integrated learning, and transparent post-graduation work rights.',
    popularIntakes: 'Fall (September) • Winter (January)',
    popularDegrees: ['Software Engineering', 'Information Systems', 'Management', 'Health Sciences', 'Environmental Eng.'],
    avgTuitionRange: 'CAD $20,000 – $45,000 / yr (Estimate)',
    avgLivingCost: 'CAD $14,000 – $18,000 / yr (Estimate)',
    workOpportunities: 'Up to 3-Year PGWP • Off-Campus Work Rights',
    highlightBadge: 'High Career ROI',
    image: '/images/destinations/canada.jpg',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'germany',
    country: 'Germany',
    code: 'GER',
    flagEmoji: '🇩🇪',
    tagline: 'Engineering Capital & Zero Tuition Model',
    description:
      'Leading public universities with zero-to-low tuition fees, cutting-edge automotive and industrial technology faculties, and robust English-taught STEM programs.',
    popularIntakes: 'Winter (October) • Summer (April)',
    popularDegrees: ['Mechanical & Auto Eng.', 'Computer Science', 'Data Analytics', 'Renewable Energy', 'Applied Physics'],
    avgTuitionRange: '€0 – €3,000 / yr Public (Estimate)',
    avgLivingCost: '€10,500 – €12,500 / yr Blocked Acct (Estimate)',
    workOpportunities: '18-Month Post-Study Jobseeker Visa • 140 Full Days/yr',
    highlightBadge: 'Zero Tuition Hub',
    image: '/images/destinations/germany.jpg',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'australia',
    country: 'Australia',
    code: 'AUS',
    flagEmoji: '🇦🇺',
    tagline: 'Group of Eight & Vibrant Student Lifestyle',
    description:
      'Prestigious Group of Eight universities, exceptional lifestyle in top global student cities, industry-aligned training, and generous regional post-study work entitlements.',
    popularIntakes: 'Semester 1 (Feb/Mar) • Semester 2 (Jul/Aug)',
    popularDegrees: ['Cybersecurity', 'Civil Engineering', 'Accounting & Finance', 'Public Health', 'Agribusiness'],
    avgTuitionRange: 'AUD $28,000 – $48,000 / yr (Estimate)',
    avgLivingCost: 'AUD $20,000 – $25,000 / yr (Estimate)',
    workOpportunities: '2 to 4-Year Post-Study Work Rights • 48 hrs/fortnight',
    highlightBadge: 'Generous PSW Rights',
    image: '/images/destinations/australia.jpg',
    ctaHref: WHATSAPP_CONFIG.link,
  },
];
