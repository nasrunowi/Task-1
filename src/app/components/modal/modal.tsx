import React, { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  position?: 'left' | 'center';
  icon?: 'undefined' | 'warning' | 'confirm' | 'scan' | 'leave';
  closeable?: boolean;
  positiveLabel?: string;
  negativeLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  description,
  position = 'center',
  icon = 'undefined',
  closeable = true,
  positiveLabel = 'Submit',
  negativeLabel = 'Cancel',
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const positionClass = {
    left: 'justify-start',
    center: 'justify-center',
  }[position];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center">
      <div className={`p-5 rounded-lg shadow-lg bg-white w-1/2 ${positionClass}`}>
        {icon !== 'undefined' && <div className="text-4xl mb-4">{icon}</div>}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex justify-end space-x-2">
          {closeable && (
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              {negativeLabel}
            </button>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            {positiveLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
