// breadcrumb.type.ts

export type BreadcrumbVariant = 'small' | 'medium' | 'large';

export interface BreadcrumbData {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  variant?: BreadcrumbVariant;
  datas: BreadcrumbData[];
  spacer?: React.ReactNode; // Custom spacer
}
