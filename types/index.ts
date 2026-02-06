export interface NavLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
  span: number;
  type?: 'dark' | 'light' | 'locked';
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  category: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FormData {
  name?: string;
  email?: string;
  company?: string;
  services?: string[];
  message?: string;
}
