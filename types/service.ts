export interface ServiceDeliverable {
  title: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'Compass' | 'Target' | 'FileEdit' | 'GraduationCap' | 'ShieldCheck' | 'Coins' | 'Briefcase' | 'PlaneTakeoff' | 'Home';
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  tagVariant?: 'green' | 'blue' | 'slate' | 'gold';
  deliverables: string[];
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
}
