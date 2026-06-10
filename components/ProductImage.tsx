'use client';

import { useState } from 'react';

export default function ProductImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`img-placeholder flex items-center justify-center ${className}`}
        style={{ background: 'radial-gradient(ellipse at center, #f0f9ff 0%, #dbeafe 100%)' }}
      >
        <svg
          viewBox="0 0 80 100"
          className="w-16 h-20 opacity-30"
          fill="none"
          stroke="#1e7fd4"
          strokeWidth="3"
        >
          <rect x="20" y="5" width="40" height="10" rx="3" />
          <path d="M18 15 Q15 25 15 40 L15 85 Q15 93 25 93 L55 93 Q65 93 65 85 L65 40 Q65 25 62 15 Z" />
          <ellipse cx="40" cy="55" rx="15" ry="18" />
          <path d="M32 55 Q40 45 48 55" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
