import { ServiceItem } from '@/types/service';
import { WHATSAPP_CONFIG } from '@/data/navigation';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-counselling',
    iconName: 'Home',
    title: 'Home Counselling',
    subtitle: 'Bespoke In-Person Mentorship',
    description:
      "Personalized counselling sessions at the student's home for families who prefer offline guidance, in-depth profile exploration, and parent alignment.",
    tag: 'Premium Bespoke',
    tagVariant: 'gold',
    deliverables: [
      'In-person diagnostic consultation with senior advisors',
      'Comprehensive family & student academic roadmap review',
      'Personalized admissions timeline and budget feasibility audit',
    ],
    ctaLabel: 'Book Home Session on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
  {
    id: 'profile-evaluation',
    iconName: 'Compass',
    title: '360° Profile Diagnostic & Strategy',
    subtitle: 'Holistic Candidate Audit',
    description:
      'Rigorous evaluation of academic transcripts, extracurricular leadership, research publications, and professional milestones to map high-probability admission pathways.',
    tag: 'Foundation',
    tagVariant: 'blue',
    deliverables: [
      'Academic & GPA percentile benchmarking',
      'Research & extracurricular spike roadmap',
      'Profile gap analysis & remediation plan',
    ],
    ctaLabel: 'Evaluate Profile on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'university-shortlisting',
    iconName: 'Target',
    title: 'Elite University Shortlisting',
    subtitle: 'Data-Backed Institution Fit',
    description:
      'Structured selection of Dream, Reach, Target, and Safe institutions across the USA, UK, Canada, Germany, and Australia based on admissions criteria and career outcomes.',
    tag: 'Admissions Fit',
    tagVariant: 'green',
    deliverables: [
      'Tier-1, Ivy League & Russell Group categorization',
      'Course syllabus & faculty alignment check',
      'Intake deadline & ROI comparison matrix',
    ],
    ctaLabel: 'Explore Universities on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
  {
    id: 'sop-essay-editing',
    iconName: 'FileEdit',
    title: 'SOP, Essays & Resume Polish',
    subtitle: 'Editorial Narrative Crafting',
    description:
      'Bespoke, multi-round editorial mentorship from experienced alumni to craft authentic, intellectually compelling Statements of Purpose and supplemental essays.',
    tag: 'Highest Impact',
    tagVariant: 'gold',
    deliverables: [
      'Storyline & thematic positioning development',
      'Line-by-line structural & rhetorical polish',
      'Academic CV & faculty letter of recommendation guidance',
    ],
    ctaLabel: 'Request Review on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
  {
    id: 'test-prep-strategy',
    iconName: 'GraduationCap',
    title: 'Standardized Test Strategy',
    subtitle: 'Diagnostic Target Planning',
    description:
      'Targeted preparation roadmaps and diagnostic strategy for GRE, GMAT, SAT, IELTS, and TOEFL exams tailored to target institution score percentiles.',
    tag: 'Score Mastery',
    tagVariant: 'blue',
    deliverables: [
      'Diagnostic test benchmarking',
      'Score target timeline & test waiver advisory',
      'Sectional performance improvement roadmap',
    ],
    ctaLabel: 'Plan Test Timeline on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'visa-mentorship',
    iconName: 'ShieldCheck',
    title: '100% Visa Filing & Consular Mocks',
    subtitle: 'Flawless Documentation',
    description:
      'Comprehensive visa application assistance (US F-1, UK Student Route, Canada Study Permit, Germany Student Visa, Australia Subclass 500) with consular mock interview drills.',
    tag: 'High Success',
    tagVariant: 'green',
    deliverables: [
      'Financial documentation & sponsorship audit',
      'DS-160 / CAS / GTE statement precision check',
      '1-on-1 mock consular interview drills',
    ],
    ctaLabel: 'Prepare Visa on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
  {
    id: 'scholarship-advisory',
    iconName: 'Coins',
    title: 'Scholarship & Funding Advisory',
    subtitle: 'Maximizing Grant Procurement',
    description:
      'Identifying and applying for institutional fellowships, merit scholarships, government grants, and international student funding opportunities.',
    tag: 'Funding Support',
    tagVariant: 'green',
    deliverables: [
      'University-specific merit scholarship matching',
      'External endowment & government grant essays',
      'Education loan negotiation advisory',
    ],
    ctaLabel: 'Explore Aid Options on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'career-pswr-strategy',
    iconName: 'Briefcase',
    title: 'Career & Post-Study Work Strategy',
    subtitle: 'Long-Term ROI Planning',
    description:
      'Aligning program choice with regional labor shortage lists, STEM OPT extensions (up to 3 years in US), UK Graduate Route (2 years), and global corporate recruitments.',
    tag: 'Global Mobility',
    tagVariant: 'blue',
    deliverables: [
      'STEM vs Non-STEM OPT work permit guidance',
      'Industry hiring trends & alumni networking',
      'International graduate wage benchmarking',
    ],
    ctaLabel: 'View ROI on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'pre-departure-briefing',
    iconName: 'PlaneTakeoff',
    title: 'Pre-Departure & Alumni Onboarding',
    subtitle: 'Seamless Transition to Campus',
    description:
      'Pre-departure orientation covering accommodation shortlisting, health insurance, international banking, flight logistics, and campus readiness.',
    tag: 'Arrival Ready',
    tagVariant: 'slate',
    deliverables: [
      'Student housing & city cost of living advisory',
      'Forex card & international bank account setup',
      'Campus alumni mentor introductions',
    ],
    ctaLabel: 'Get Ready on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
];
