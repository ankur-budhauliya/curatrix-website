import { UniversityLogo, TrustValueItem, AccreditationItem } from '@/types/trust';

/**
 * REPRESENTATIVE GLOBAL INSTITUTIONS
 * Strictly restricted to USA, UK, Canada, Germany, and Australia.
 */
export const UNIVERSITY_PARTNERS: UniversityLogo[] = [
  {
    id: 'harvard',
    name: 'Harvard University',
    shortName: 'Harvard',
    country: 'USA',
    category: 'Ivy League',
  },
  {
    id: 'oxford',
    name: 'University of Oxford',
    shortName: 'Oxford',
    country: 'UK',
    category: 'Russell Group',
  },
  {
    id: 'toronto',
    name: 'University of Toronto',
    shortName: 'U of Toronto',
    country: 'Canada',
    category: 'U15 Member',
  },
  {
    id: 'tum',
    name: 'Technical University of Munich',
    shortName: 'TUM Munich',
    country: 'Germany',
    category: 'TU9 Excellence',
  },
  {
    id: 'melbourne',
    name: 'University of Melbourne',
    shortName: 'UniMelb',
    country: 'Australia',
    category: 'Group of Eight',
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    shortName: 'Stanford',
    country: 'USA',
    category: 'Tier-1 Research',
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    shortName: 'Cambridge',
    country: 'UK',
    category: 'Collegiate Flagship',
  },
  {
    id: 'ubc',
    name: 'University of British Columbia',
    shortName: 'UBC Canada',
    country: 'Canada',
    category: 'Top Global 40',
  },
  {
    id: 'rwth',
    name: 'RWTH Aachen University',
    shortName: 'RWTH Aachen',
    country: 'Germany',
    category: 'Engineering Pioneer',
  },
  {
    id: 'sydney',
    name: 'University of Sydney',
    shortName: 'USYD',
    country: 'Australia',
    category: 'Sandstone University',
  },
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    country: 'USA',
    category: 'STEM Powerhouse',
  },
  {
    id: 'imperial',
    name: 'Imperial College London',
    shortName: 'Imperial',
    country: 'UK',
    category: 'STEM & Business',
  },
];

/**
 * CORE VALUES & COMMITMENTS
 * Zero unverified statistics or fake metrics.
 */
export const TRUST_CORE_VALUES: TrustValueItem[] = [
  {
    id: 'personalized-guidance',
    title: 'Personalized Guidance',
    description:
      'Individual profile evaluation and bespoke application strategies tailored to each student’s unique strengths, interests, and aspirations.',
    iconName: 'UserCheck',
    badge: '1-on-1 Mentorship',
  },
  {
    id: 'transparent-process',
    title: 'Transparent Process',
    description:
      'Clear, honest university recommendations based entirely on candidate fit, academic criteria, and long-term career viability with zero hidden bias.',
    iconName: 'ShieldCheck',
    badge: 'Ethical Advisory',
  },
  {
    id: 'student-first-approach',
    title: 'Student-First Approach',
    description:
      'Prioritizing course relevance, student well-being, and true educational return on investment above all else throughout the application journey.',
    iconName: 'HeartHandshake',
    badge: 'Dedicated Focus',
  },
  {
    id: 'expert-mentorship',
    title: 'Expert Mentorship',
    description:
      'Advisory support from experienced education professionals who understand international admission criteria and evolving global visa policies.',
    iconName: 'Compass',
    badge: 'In-Depth Expertise',
  },
  {
    id: 'home-counselling',
    title: 'Home Counselling',
    description:
      'Personalized in-person sessions at the student’s residence for families who prefer face-to-face discussions, comprehensive roadmap planning, and alignment.',
    iconName: 'Home',
    badge: 'Bespoke Offline',
  },
  {
    id: 'end-to-end-support',
    title: 'End-to-End Support',
    description:
      'Comprehensive oversight across the entire study abroad lifecycle—from profile diagnostic and essay polish to visa filing and pre-departure briefing.',
    iconName: 'Workflow',
    badge: 'Full Lifecycle',
  },
];

export const TRUST_ACCREDITATIONS: AccreditationItem[] = [
  {
    id: 'ethical-guidelines',
    title: 'Ethical Advisory Standards',
    issuer: 'International Education Standards',
    description: 'Adhering to globally recognized best practices for transparent student representation and institutional counseling.',
  },
  {
    id: 'country-regulations',
    title: 'Global Compliance & Visas',
    issuer: 'Consular Frameworks',
    description: 'Up-to-date compliance with regulatory guidelines for the USA, UK, Canada, Germany, and Australia.',
  },
  {
    id: 'verified-partnerships',
    title: 'Institution-Aligned Mentorship',
    issuer: 'Curatrix Quality Commitment',
    description: 'Dedicated focus on student eligibility, course syllabus alignment, and university entry criteria.',
  },
];
