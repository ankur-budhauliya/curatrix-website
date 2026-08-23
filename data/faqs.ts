import { FaqItem } from '@/types/faq';

/**
 * FREQUENTLY ASKED QUESTIONS DATA
 * Categorized and easily configurable.
 */
export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'When should I start preparing my study abroad applications?',
    answer:
      'We recommend beginning the diagnostic evaluation 10 to 14 months before your target intake season. For Fall intakes (August/September), profile building and test prep should ideally commence in the preceding autumn to ensure timely early-action and scholarship submission.',
  },
  {
    id: 'faq-2',
    category: 'Admissions',
    question: 'Which countries does Curatrix specialize in for university admissions?',
    answer:
      'Curatrix focuses strictly on five premier global destinations: the United States, United Kingdom, Canada, Germany, and Australia. Our advisors maintain deep expertise in the admissions criteria, visa regulations, and post-study work rights for each of these five countries.',
  },
  {
    id: 'faq-3',
    category: 'Home Counselling',
    question: 'How does the Home Counselling service work?',
    answer:
      'Home Counselling provides personalized, offline admissions guidance at the student’s residence. A senior advisor meets with the student and family in person to review transcripts, discuss university preferences, address financial/visa timelines, and establish a clear roadmap in a comfortable setting.',
  },
  {
    id: 'faq-4',
    category: 'Scholarships',
    question: 'Can Curatrix help me secure scholarships or tuition fee waivers?',
    answer:
      'Yes. Our advisors identify university-specific merit scholarships, departmental fellowships, and external international student grants during the shortlisting phase. We also provide dedicated editorial review for competitive scholarship essays.',
  },
  {
    id: 'faq-5',
    category: 'Visas',
    question: 'What is included in the Visa Mentorship service?',
    answer:
      'Our visa guidance covers complete financial audit, sponsorship documentation, visa portal filings (US DS-160/F-1, UK CAS/Student Route, Canada Study Permit, Germany Student Visa, Australia Subclass 500), and rigorous 1-on-1 mock consular interview drills.',
  },
  {
    id: 'faq-6',
    category: 'Admissions',
    question: 'What makes Curatrix different from traditional mass study abroad agencies?',
    answer:
      'Unlike generic agency models that push commercial tie-ups, Curatrix operates on a bespoke mentorship model with ex-admissions alumni advisors, multi-round editorial essay polish, data-backed Dream/Target shortlisting, and offline home consultation options.',
  },
];

export const FAQS_HEADER = {
  badge: 'Frequently Asked Questions',
  title: 'Clear Answers for Your',
  highlight: 'Global Education.',
  subtitle: 'Find insights on our admissions advisory, destination eligibility, home counselling, and visa processes.',
};
