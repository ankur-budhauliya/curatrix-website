import { UniversityLogo, TrustMetricItem, AccreditationItem } from '@/types/trust';

/**
 * UNIVERSITY PARTNERS & DESTINATION INSTITUTIONS
 * Restricted strictly to USA, UK, Canada, Germany, and Australia.
 */
export const UNIVERSITY_PARTNERS: UniversityLogo[] = [
  {
    id: 'uni-1',
    name: 'Harvard University (Target Placement)',
    shortName: 'Harvard',
    country: 'USA',
    category: 'Ivy League',
  },
  {
    id: 'uni-2',
    name: 'University of Oxford (Target Placement)',
    shortName: 'Oxford',
    country: 'UK',
    category: 'Oxbridge',
  },
  {
    id: 'uni-3',
    name: 'Stanford University (Target Placement)',
    shortName: 'Stanford',
    country: 'USA',
    category: 'Tier-1 STEM',
  },
  {
    id: 'uni-4',
    name: 'University of Cambridge (Target Placement)',
    shortName: 'Cambridge',
    country: 'UK',
    category: 'Oxbridge',
  },
  {
    id: 'uni-5',
    name: 'University of Toronto (Partner Placeholder)',
    shortName: 'Toronto',
    country: 'Canada',
    category: 'U15 Group',
  },
  {
    id: 'uni-6',
    name: 'University of Melbourne (Partner Placeholder)',
    shortName: 'Melbourne',
    country: 'Australia',
    category: 'Group of Eight',
  },
  {
    id: 'uni-7',
    name: 'Technical University of Munich (Partner Placeholder)',
    shortName: 'TUM',
    country: 'Germany',
    category: 'TU9 Excellence',
  },
  {
    id: 'uni-8',
    name: 'McGill University (Partner Placeholder)',
    shortName: 'McGill',
    country: 'Canada',
    category: 'U15 Group',
  },
  {
    id: 'uni-9',
    name: 'Imperial College London (Target Placement)',
    shortName: 'Imperial',
    country: 'UK',
    category: 'Russell Group',
  },
  {
    id: 'uni-10',
    name: 'University of Sydney (Partner Placeholder)',
    shortName: 'Sydney',
    country: 'Australia',
    category: 'Group of Eight',
  },
  {
    id: 'uni-11',
    name: 'Columbia University (Target Placement)',
    shortName: 'Columbia',
    country: 'USA',
    category: 'Ivy League',
  },
  {
    id: 'uni-12',
    name: 'Heidelberg University (Partner Placeholder)',
    shortName: 'Heidelberg',
    country: 'Germany',
    category: 'German Excellence',
  },
];

/**
 * SUCCESS NUMBERS & PERFORMANCE METRICS
 * Replace with verified business statistics when available.
 */
export const TRUST_SUCCESS_METRICS: TrustMetricItem[] = [
  {
    id: 'admits-metric',
    value: 500,
    prefix: '',
    suffix: '+',
    label: 'Student Success Placements',
    sublabel: 'Admissions secured across top USA, UK, Canada, Germany & Australia faculties (Client Statistic)',
    highlightColor: 'blue',
  },
  {
    id: 'scholarships-metric',
    value: 5.2,
    prefix: '$',
    suffix: 'M+',
    label: 'Scholarships Awarded',
    sublabel: 'Cumulative merit aid & tuition grants unlocked (Client Statistic)',
    highlightColor: 'green',
  },
  {
    id: 'visa-metric',
    value: 99.4,
    prefix: '',
    suffix: '%',
    label: 'Visa Success Rate',
    sublabel: 'Consular documentation & embassy interview readiness record (Client Statistic)',
    highlightColor: 'blue',
  },
  {
    id: 'partners-metric',
    value: 150,
    prefix: '',
    suffix: '+',
    label: 'Partner Universities',
    sublabel: 'Direct university networks & articulation pathways (Client Statistic)',
    highlightColor: 'slate',
  },
];

/**
 * ACCREDITATIONS & VERIFIED ADVISORY STANDARDS
 */
export const TRUST_ACCREDITATIONS: AccreditationItem[] = [
  {
    id: 'acc-1',
    title: 'AIRC Certified Advisory (Placeholder)',
    issuer: 'American International Recruitment Council',
    description: 'Adherence to ethical standards in international student recruitment.',
    icon: 'certificate',
  },
  {
    id: 'acc-2',
    title: 'British Council Trained (Placeholder)',
    issuer: 'British Council Education Agent Network',
    description: 'Certified counselors proficient in UK university applications and CAS compliance.',
    icon: 'shield',
  },
  {
    id: 'acc-3',
    title: 'NAFSA Member Network (Placeholder)',
    issuer: 'Association of International Educators',
    description: 'Global best practices in higher education advising and student mobility.',
    icon: 'globe',
  },
];
