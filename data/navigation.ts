import { NavItem, AnnouncementItem } from '@/types/navigation';

export const WHATSAPP_CONFIG = {
  number: '919667795333',
  link: 'https://wa.me/919667795333?text=Hi%20Curatrix%20Team!%20I%20came%20across%20your%20website%20and%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad.%20Please%20guide%20me.',
};

export const CONTACT_INFO = {
  companyName: 'Curatrix Private Limited',
  phone: '+91 9667795333',
  whatsappNumber: '+91 9667795333',
  whatsappHref: WHATSAPP_CONFIG.link,
  email: 'sukhwinder@curatrix.co.in',
  officeAddress: 'B320, Logix Technova, Sector 134, Noida, Uttar Pradesh, India',
  socialLinks: {
    instagram: 'https://www.instagram.com/curatrix.pvt.ltd?igsi=NXViYjhwaHlheTRp',
  },
};

export const ANNOUNCEMENT_DATA: AnnouncementItem = {
  id: 'fall-2026-intake',
  badge: 'Fall 2026 & Spring 2027 Admissions Open',
  text: 'Connect directly with our admissions advisors on WhatsApp for personalized guidance.',
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
        description: 'Comprehensive audit of academic background and career goals',
        icon: 'compass',
      },
      {
        title: 'Elite University Shortlisting',
        href: '#services',
        description: 'Structured dream, target, and safe university selection',
        icon: 'target',
      },
      {
        title: 'SOP, Essays & Resume Polish',
        href: '#services',
        description: 'Multi-round editorial refinement for personal statements',
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
        title: 'Visa Guidance & Mock Drills',
        href: '#services',
        description: 'Complete documentation support with consular mock interview drills',
        icon: 'shield',
      },
      {
        title: 'Scholarship Advisory',
        href: '#services',
        description: 'Guidance in identifying university grants and merit aid',
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
        description: 'World-renowned institutions, flexible curricula & STEM OPT',
        badge: 'Top Choice',
        icon: 'us',
      },
      {
        title: 'United Kingdom',
        href: '#destinations',
        description: 'Russell Group institutions, 1-year Master’s & 2-year Graduate Route',
        badge: 'Popular',
        icon: 'gb',
      },
      {
        title: 'Canada',
        href: '#destinations',
        description: 'U15 research universities & Post-Graduation Work Permit (PGWP)',
        badge: 'High ROI',
        icon: 'ca',
      },
      {
        title: 'Germany',
        href: '#destinations',
        description: 'Tuition-free public universities & premier engineering education',
        badge: 'Zero Tuition',
        icon: 'de',
      },
      {
        title: 'Australia',
        href: '#destinations',
        description: 'Group of Eight universities with post-study work rights',
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
