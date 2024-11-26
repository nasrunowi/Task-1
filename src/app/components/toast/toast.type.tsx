// toast.type.ts

export type ToastType = 'information' | 'notification';

export type ToastVariant = 'success' | 'warning' | 'danger' | 'default';

export type ToastSize = 'small' | 'medium' | 'large';

export interface ToastProps {
  type?: ToastType;
  variant?: ToastVariant;
  size?: ToastSize;
  message: string;
  onClick?: () => void; // Click handler
}
