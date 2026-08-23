import { TimelineStep } from '@/types/timeline';

/**
 * 7-STAGE ADMISSION PROCESS ROADMAP DATA
 * Clearly marked placeholder milestones and advisory timelines.
 */
export const ADMISSION_STEPS: TimelineStep[] = [
  {
    stepNumber: 1,
    title: 'Free Consultation',
    tagline: 'Initial Alignment',
    description: '1-on-1 strategy call with an admissions advisor to understand your academic background, target countries, and career ambitions.',
    iconName: 'MessageSquare',
    badge: 'Stage 01',
  },
  {
    stepNumber: 2,
    title: 'Profile Evaluation',
    tagline: 'Deep Diagnostic Audit',
    description: 'Comprehensive assessment of academic GPA, standardized test readiness, extracurricular leadership, and research achievements.',
    iconName: 'Compass',
    badge: 'Stage 02',
  },
  {
    stepNumber: 3,
    title: 'University Shortlisting',
    tagline: 'Strategic Matrix',
    description: 'Data-driven categorization of Dream, Target, and Safe universities across the USA, UK, Canada, Germany, and Australia.',
    iconName: 'Target',
    badge: 'Stage 03',
  },
  {
    stepNumber: 4,
    title: 'Application Assistance',
    tagline: 'Editorial Excellence',
    description: 'Bespoke drafting and multi-round editing of SOPs, personal essays, academic CVs, and faculty recommendation letters.',
    iconName: 'Send',
    badge: 'Stage 04',
  },
  {
    stepNumber: 5,
    title: 'Offer Letter',
    tagline: 'Admissions & Scholarships',
    description: 'Reviewing institutional acceptances, fellowship award packages, and tuition waiver conditions to finalize university choice.',
    iconName: 'MailCheck',
    badge: 'Stage 05',
  },
  {
    stepNumber: 6,
    title: 'Visa Processing',
    tagline: 'Flawless Documentation',
    description: 'Complete guidance on consular documentation, financial audits, DS-160/CAS forms, and 1-on-1 mock consular interview drills.',
    iconName: 'ShieldCheck',
    badge: 'Stage 06',
  },
  {
    stepNumber: 7,
    title: 'Pre-Departure Guidance',
    tagline: 'Campus Readiness',
    description: 'Orientation on international banking, student accommodation, health insurance, travel logistics, and alumni community network.',
    iconName: 'Plane',
    badge: 'Stage 07',
  },
];

export const ROADMAP_HEADER = {
  badge: '7-Stage Roadmap',
  title: 'Your Step-by-Step',
  highlight: 'Admission Process.',
  subtitle: 'A structured, transparent roadmap from initial diagnostic evaluation to landing safely on your dream global campus.',
};
