export interface FaqItem {
  id: string;
  category: 'All' | 'Admissions' | 'Visas' | 'Scholarships' | 'Home Counselling';
  question: string;
  answer: string;
}
