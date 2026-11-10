import React from 'react';
import type { LabelProps } from '../../components/Label/Label.types';
import '../../components/Label/Label.css';

export function Label({
  children = '',
  htmlFor,
  size = 'medium',
  weight,
  color,
  required = false,
  disabled = false,
  visuallyHidden = false,
  className = '',
  ...props
}: LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>) {
  const classNames = [
    'cui-label',
    `cui-label--${size}`,
    weight ? `cui-label--weight-${weight}` : '',
    color ? `cui-label--color-${color}` : '',
    required ? 'cui-label--required' : '',
    disabled ? 'cui-label--disabled' : '',
    visuallyHidden ? 'cui-label--visually-hidden' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label
      htmlFor={htmlFor}
      className={classNames}
      {...props}
    >
      {children}
      {required && !children.includes('*') && <span aria-hidden="true">*</span>}
    </label>
  );
}