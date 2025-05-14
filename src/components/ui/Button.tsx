import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  icon: Icon, 
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all";
  const variants = {
    primary: `bg-violet-600 text-white ${!disabled ? 'hover:bg-violet-700' : 'opacity-50 cursor-not-allowed'}`,
    outline: `border border-violet-600 text-violet-400 ${!disabled ? 'hover:bg-violet-600/10' : 'opacity-50 cursor-not-allowed'}`
  };

  const buttonContent = (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      disabled={disabled} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  );
}