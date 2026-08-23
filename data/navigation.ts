import { NavItem, AnnouncementItem } from '@/types/navigation';

export const WHATSAPP_CONFIG = {
  number: '919876543210',
  defaultMessage: 'Hello Curatrix, I would like to book a free study abroad consultation.',
  get link() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
};

export const CONTACT_INFO = {
  email: 'admissions@curatrix.co.in',
  whatsappNumber: WHATSAPP_CONFIG.number,
  whatsappHref: WHATSAPP_CONFIG.link,
  officeCity: 'Noida',
  officeAddress: 'Sector 62, Noida, Uttar Pradesh, India',
  socialLinks: {
    instagram: 'https://instagram.com/curatrix.co.in',
    linkedin: 'https://linkedin.com/company/curatrix',
  },
};

export const ANNOUNCEMENT_DATA: AnnouncementItem = {
  id: 'fall-2026-intake',
  badge: 'Fall 2026 & Spring 2027 Admissions Open',
  text: 'Connect with expert admissions advisors on WhatsApp for priority candidate review.',
  linkText: 'Chat on WhatsApp',
  href: WHATSAPP_CONFIG.link,
};

export const NAV_ITEMS: NavItem[] = [
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
    label: 'Why Curatrix',
    href: '#why-curatrix',
  },
  {
    label: 'Roadmap',
    href: '#roadmap',
  },
  {
    label: 'FAQs',
    href: '#faq',
  },
];
