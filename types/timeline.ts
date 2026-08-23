export interface TimelineStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
  iconName: 'MessageSquare' | 'Compass' | 'Target' | 'Send' | 'MailCheck' | 'ShieldCheck' | 'Plane';
  badge?: string;
}
