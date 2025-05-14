import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
}

export default function SectionTitle({ children, highlight }: SectionTitleProps) {
  if (highlight) {
    return (
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        {children} <span className="text-violet-400">{highlight}</span>
      </h2>
    );
  }
  
  return (
    <h2 className="text-3xl font-bold text-center text-white mb-16">
      {children}
    </h2>
  );
}