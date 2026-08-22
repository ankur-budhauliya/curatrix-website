export interface SubNavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: SubNavItem[];
}

export interface AnnouncementItem {
  id: string;
  text: string;
  linkText?: string;
  href?: string;
  badge?: string;
}
