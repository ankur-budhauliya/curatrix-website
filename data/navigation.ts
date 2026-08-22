import { NavItem, AnnouncementItem } from '@/types/navigation';

export const ANNOUNCEMENT_DATA: AnnouncementItem = {
  id: 'fall-2026-intake',
  badge: 'Fall 2026 Admissions Open',
  text: 'Exclusive 100% Scholarship Mentorship Program now accepting candidate applications.',
  linkText: 'Claim Free Evaluation',
  href: '#calculator',
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Destinations',
    href: '#destinations',
    children: [
      {
        title: 'United States',
        href: '#destinations',
        description: 'Ivy League, Tier-1 STEM research & up to 3 years STEM OPT',
        badge: 'Top Choice',
        icon: 'us',
      },
      {
        title: 'United Kingdom',
        href: '#destinations',
        description: 'Russell Group excellence, 1-year Master’s & 2-year PSW visa',
        badge: 'Popular',
        icon: 'gb',
      },
      {
        title: 'Canada',
        href: '#destinations',
        description: 'Post-Graduation Work Permit (PGWP) & clear PR pathways',
        badge: 'High ROI',
        icon: 'ca',
      },
      {
        title: 'Germany',
        href: '#destinations',
        description: 'Tuition-free public universities & premier engineering hub',
        badge: 'Zero Tuition',
        icon: 'de',
      },
      {
        title: 'Australia',
        href: '#destinations',
        description: 'Group of Eight institutions with high post-study work rights',
        badge: 'High Demand',
        icon: 'au',
      },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      {
        title: 'Home Counselling',
        href: '#services',
        description: 'Personalized in-person counselling at the student’s home',
        badge: 'Bespoke',
        icon: 'home',
      },
      {
        title: 'Profile Diagnostic & Strategy',
        href: '#services',
        description: 'Deep audit of academic, extracurricular, and research profile',
        icon: 'compass',
      },
      {
        title: 'Elite University Shortlisting',
        href: '#services',
        description: 'Data-backed dream, target, and safe university matrix',
        icon: 'target',
      },
      {
        title: 'SOP, Essays & Resume Polish',
        href: '#services',
        description: 'Ivy-trained editors refining your story to perfection',
        badge: 'Most Popular',
        icon: 'edit',
      },
      {
        title: 'Standardized Test Strategy',
        href: '#services',
        description: 'GRE, GMAT, SAT, IELTS & TOEFL diagnostic roadmap',
        icon: 'award',
      },
      {
        title: '100% Visa Mentorship & Mocks',
        href: '#services',
        description: 'High approval rate with structured consular mock drills',
        icon: 'shield',
      },
      {
        title: 'Scholarship & Funding Advisory',
        href: '#services',
        description: 'Institutional fellowships & grant application advisory',
        icon: 'dollar',
      },
    ],
  },
  {
    label: 'Roadmap',
    href: '#roadmap',
  },
  {
    label: 'Eligibility Calculator',
    href: '#calculator',
    badge: 'Interactive',
  },
  {
    label: 'Results',
    href: '#testimonials',
  },
  {
    label: 'Mentors',
    href: '#mentors',
  },
];

export const CONTACT_INFO = {
  phone: '+91 (0) 800-CURATRIX',
  phoneHref: 'tel:+9180028728749',
  email: 'admissions@curatrix.co.in',
  bookingCTA: 'Book Strategy Session',
  bookingHref: '#book-consultation',
};
