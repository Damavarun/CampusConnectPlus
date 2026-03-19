import React from 'react';

export function Card({ 
  children, 
  className = '', 
  hoverEffect = false,
  ...props 
}) {
  const baseClass = 'glass-panel rounded-xl p-6';
  const hoverClass = hoverEffect ? 'hover-lift' : '';
  
  return (
    <div 
      className={`${baseClass} ${hoverClass} ${className}`}
      style={{ borderRadius: '16px' }}
      {...props}
    >
      {children}
    </div>
  );
}
