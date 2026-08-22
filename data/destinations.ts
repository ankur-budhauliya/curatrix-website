import { DestinationItem } from '@/types/destination';

/**
 * STUDY DESTINATIONS DATA
 * Strictly restricted to USA, UK, Canada, Germany, and Australia.
 * All quantitative estimates and program details are clearly designated as structured placeholders.
 */
export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'usa',
    country: 'United States',
    code: 'USA',
    flagEmoji: '🇺🇸',
    tagline: 'Ivy League & Tier-1 Research',
    description:
      'Home to world-renowned research institutions, flexible curricula, vast campus resources, and extensive post-graduation career opportunities in tech, finance, and engineering.',
    popularIntakes: 'Fall (Aug/Sep) • Spring (Jan)',
    popularDegrees: ['Computer Science', 'Data Science', 'MBA / Finance', 'Biotech', 'Electrical Eng.'],
    avgTuitionRange: '$25,000 – $55,000 / yr (Estimate Placeholder)',
    avgLivingCost: '$12,000 – $18,000 / yr (Estimate Placeholder)',
    workOpportunities: 'Up to 3-Year STEM OPT • 20 hrs/wk On-Campus (Placeholder)',
    highlightBadge: 'Top Global Choice',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=800&auto=format&fit=crop',
    ctaHref: '#book-consultation',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    code: 'UK',
    flagEmoji: '🇬🇧',
    tagline: 'Russell Group & Historic Academic Prestige',
    description:
      'Accelerated 1-year Master’s programs, centuries-old academic traditions, globally recognized qualifications, and direct connections to European financial and cultural capitals.',
    popularIntakes: 'September (Autumn) • January (Winter)',
    popularDegrees: ['Business Analytics', 'Law / LLM', 'Finance', 'AI & Robotics', 'International Relations'],
    avgTuitionRange: '£15,000 – £35,000 / yr (Estimate Placeholder)',
    avgLivingCost: '£10,000 – £14,000 / yr (Estimate Placeholder)',
    workOpportunities: '2-Year Graduate Route (PSW) • 20 hrs/wk Term-Time (Placeholder)',
    highlightBadge: '1-Year Master’s',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    ctaHref: '#book-consultation',
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
    avgTuitionRange: 'CAD $20,000 – $45,000 / yr (Estimate Placeholder)',
    avgLivingCost: 'CAD $14,000 – $18,000 / yr (Estimate Placeholder)',
    workOpportunities: 'Up to 3-Year PGWP • Off-Campus Work Rights (Placeholder)',
    highlightBadge: 'High Career ROI',
    image: 'https://images.unsplash.com/photo-1517935703635-27190760b79e?q=80&w=800&auto=format&fit=crop',
    ctaHref: '#book-consultation',
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
    avgTuitionRange: '€0 – €3,000 / yr Public (Estimate Placeholder)',
    avgLivingCost: '€10,500 – €12,500 / yr Blocked Acct (Estimate Placeholder)',
    workOpportunities: '18-Month Post-Study Jobseeker Visa • 140 Full Days/yr (Placeholder)',
    highlightBadge: 'Zero Tuition Hub',
    image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=800&auto=format&fit=crop',
    ctaHref: '#book-consultation',
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
    avgTuitionRange: 'AUD $28,000 – $48,000 / yr (Estimate Placeholder)',
    avgLivingCost: 'AUD $20,000 – $25,000 / yr (Estimate Placeholder)',
    workOpportunities: '2 to 4-Year Post-Study Work Rights • 48 hrs/fortnight (Placeholder)',
    highlightBadge: 'Generous PSW Rights',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
    ctaHref: '#book-consultation',
  },
];
