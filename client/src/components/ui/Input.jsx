import React from 'react';

export function Input({
  label,
  id,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={`input-group ${className}`}>
      {label && <label htmlFor={id} className="input-label">{label}</label>}
      <input 
        id={id}
        type={type}
        className="input-field"
        {...props}
      />
    </div>
  );
}
