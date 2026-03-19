import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseClass = 'btn hover-lift';
  const variantClass = variant === 'primary' ? 'btn-primary' 
    : variant === 'secondary' ? 'btn-secondary' 
    : 'btn-outline';
    
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
