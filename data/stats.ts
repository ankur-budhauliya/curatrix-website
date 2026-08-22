import { TrustStat, HeroAdmitHighlight } from '@/types/stats';

/**
 * PLACEHOLDER BUSINESS STATISTICS
 * Replace these values with verified business metrics when available.
 */
export const HERO_STATS: TrustStat[] = [
  {
    id: 'admits',
    value: 500,
    prefix: '',
    suffix: '+',
    label: 'University Admits (Client Statistic)',
    description: 'Top-tier global institution placements',
    highlight: true,
  },
  {
    id: 'scholarships',
    value: 5.0,
    prefix: '$',
    suffix: 'M+',
    label: 'Scholarship Aid (Client Statistic)',
    description: 'Cumulative institutional grant aid',
  },
  {
    id: 'visa-rate',
    value: 99,
    prefix: '',
    suffix: '%',
    label: 'Visa Success (Client Statistic)',
    description: 'Application filing approval rate',
    highlight: true,
  },
  {
    id: 'destinations',
    value: 30,
    prefix: '',
    suffix: '+',
    label: 'Destination Partners (Client Statistic)',
    description: 'Countries with university networks',
  },
];

/**
 * PLACEHOLDER ADMISSION HIGHLIGHT
 * Replace with verified student success stories when available.
 */
export const HERO_ADMIT_HIGHLIGHT: HeroAdmitHighlight = {
  studentName: 'Student Name (Placeholder)',
  university: 'University Placement (Placeholder)',
  program: 'Degree & Program (Placeholder)',
  scholarship: 'Merit Award (Placeholder)',
  country: 'Target Destination (Placeholder)',
};

/**
 * TRUST & SPECIALIZATION PILLS
 */
export const TRUST_PILLS = [
  { label: 'Top-Tier Admissions Guidance', icon: '🏛️' },
  { label: 'Visa & Documentation Support', icon: '🛡️' },
  { label: 'Scholarship Application Mentorship', icon: '💎' },
  { label: '1-on-1 Profile Strategy', icon: '🎓' },
];

export const MENTOR_PREVIEW = {
  title: 'Admissions Advisors (Placeholder)',
  subtitle: 'Global Alumni Mentorship Network',
  ratingLabel: '5.0 ★ (Client Metric)',
};
