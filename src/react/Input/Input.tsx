import React from 'react';
import type { InputProps } from '../../components/Input/Input.types';
import '../../components/Input/Input.css';

export function Input({
  label,
  type = 'text',
  placeholder,
  disabled = false,
  value,
  onChange,
  className = '',
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const inputClassNames = ['input', className].filter(Boolean).join(' ');

  return (
    <input
      type={type}
      className={inputClassNames}
      aria-label={label}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
