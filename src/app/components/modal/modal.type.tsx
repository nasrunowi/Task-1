export interface ModalProps {
    isOpen: boolean;
    title: string;
    content: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    onClose: () => void;
    onConfirm: () => void;
  }
  