export interface WhyCuratrixFeature {
  id: string;
  iconName: 'UserCheck' | 'Home' | 'Building2' | 'Coins' | 'ShieldCheck' | 'Workflow';
  title: string;
  badge?: string;
  badgeVariant?: 'green' | 'blue' | 'slate' | 'gold';
  description: string;
  highlightPoints: string[];
}
