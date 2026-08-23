export interface WhyCuratrixFeature {
  id: string;
  iconName: 'UserCheck' | 'Home' | 'Coins' | 'Building2' | 'FileText' | 'ShieldCheck' | 'Workflow';
  title: string;
  badge?: string;
  badgeVariant?: 'green' | 'blue' | 'slate' | 'gold';
  description: string;
  highlightPoints: string[];
}
