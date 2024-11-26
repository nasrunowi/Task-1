// toast.tsx

import { FC } from 'react';
import { ToastProps } from './toast.type';

export const Toast: FC<ToastProps> = ({
  type = 'information', // Default to 'information'
  variant = 'default',
  size = 'medium',
  message,
  onClick,
}) => {
  const variantClasses = {
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    danger: 'bg-red-500 text-white',
    default: 'bg-gray-500 text-white',
  }[variant];

  const sizeClasses = {
    small: 'text-xs py-2 px-4',
    medium: 'text-base py-3 px-6',
    large: 'text-lg py-4 px-8',
  }[size];

  const heading = variant === 'default'
    ? (type === 'information' ? 'Information' : 'Notification')
    : (variant.charAt(0).toUpperCase() + variant.slice(1) + '!');
  
  return (
    <div
      className={`rounded-md shadow-md ${variantClasses} ${sizeClasses} flex items-center space-x-4`}
      onClick={onClick} // Handle click event
    >
      <div className="flex-1">
        <h4 className="font-bold text-lg">{heading}</h4>
        <p>{message}</p>
      </div>
      {onClick && (
        <button onClick={e => { e.stopPropagation(); onClick(); }} className="ml-auto bg-transparent border-0 text-white">
          &times;
        </button>
      )}
    </div>
  );
};
