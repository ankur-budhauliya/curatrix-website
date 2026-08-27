import { ServiceItem } from '@/types/service';
import { WHATSAPP_CONFIG } from '@/data/navigation';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'profile-evaluation',
    iconName: 'Compass',
    title: 'Profile Evaluation',
    subtitle: 'Holistic Academic Diagnostic',
    description:
      'Rigorous evaluation of academic transcripts, GPA benchmarking, extracurricular leadership, research publications, and career milestones to map high-probability admission pathways.',
    tag: 'Foundation',
    tagVariant: 'blue',
    deliverables: [
      'Academic & GPA percentile benchmarking',
      'Research & extracurricular spike roadmap',
      'Profile gap analysis & remediation plan',
    ],
    ctaLabel: 'Evaluate Profile on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
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
      'In-person diagnostic consultation with senior mentors',
      'Comprehensive family & student academic roadmap review',
      'Personalized admissions timeline and budget feasibility audit',
    ],
    ctaLabel: 'Book Home Session on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
    featured: true,
  },
  {
    id: 'university-shortlisting',
    iconName: 'Target',
    title: 'University Shortlisting',
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
    id: 'scholarship-assistance',
    iconName: 'Coins',
    title: 'Scholarship Assistance',
    subtitle: 'Maximizing Grant Procurement',
    description:
      'Identifying and applying for institutional fellowships, merit scholarships, government grants, and international student funding opportunities.',
    tag: 'Funding Support',
    tagVariant: 'green',
    deliverables: [
      'University-specific merit scholarship matching',
      'External endowment & government grant essays',
      'Tuition budget optimization & funding strategy',
    ],
    ctaLabel: 'Explore Aid Options on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'sop-application-support',
    iconName: 'FileEdit',
    title: 'SOP & Application Support',
    subtitle: 'Editorial Narrative Crafting',
    description:
      'Bespoke, multi-round editorial mentorship from experienced alumni to craft authentic, intellectually compelling Statements of Purpose, resumes, and supplemental essays.',
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
    id: 'student-visa-guidance',
    iconName: 'ShieldCheck',
    title: 'Student Visa Guidance',
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
    id: 'financial-loan-guidance',
    iconName: 'GraduationCap',
    title: 'Financial & Education Loan Guidance',
    subtitle: 'Transparent Funding Pathways',
    description:
      'Guidance on collateral and non-collateral education loan structures, forex remittances, blocked accounts for Germany, and proof of funds compliance.',
    tag: 'Financial Aid',
    tagVariant: 'blue',
    deliverables: [
      'Collateral & Non-Collateral loan advisory',
      'German Blocked Account & Sperrkonto guidance',
      'Sponsorship affidavits & fund verification checks',
    ],
    ctaLabel: 'Get Loan Guidance on WhatsApp',
    ctaHref: WHATSAPP_CONFIG.link,
  },
  {
    id: 'pre-departure-assistance',
    iconName: 'PlaneTakeoff',
    title: 'Pre Departure Assistance',
    subtitle: 'Seamless Transition to Campus',
    description:
      'Pre-departure orientation covering student accommodation shortlisting, health insurance, international banking, flight logistics, and campus readiness.',
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
  {
    id: 'career-post-study-guidance',
    iconName: 'Briefcase',
    title: 'Career & Post Study Guidance',
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
];
