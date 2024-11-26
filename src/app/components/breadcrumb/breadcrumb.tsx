// breadcrumb.tsx

import Link from 'next/link';
import { FC } from 'react';
import { BreadcrumbProps } from './breadcrumb.type';

export const Breadcrumb: FC<BreadcrumbProps> = ({ variant = 'medium', datas, spacer }) => {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }[variant];

  return (
    <nav aria-label="breadcrumb">
      <ol className={`flex items-center ${sizeClasses}`}>
        {datas.map((data, index) => (
          <li key={index} className="flex items-center">
            {index < datas.length - 1 ? (
              <>
                <Link href={data.href || '#'} className="text-blue-600 hover:text-blue-800">
                  {data.label}
                </Link>
                {spacer ? spacer : <span className="mx-2 text-gray-500">/</span>}
              </>
            ) : (
              <span className="text-gray-900">{data.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
