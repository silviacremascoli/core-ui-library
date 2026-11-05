import React from 'react';
import type { ButtonProps } from '../../components/Button/Button.types';
import '../../components/Button/Button.css';

export function Button({
  label,
  children,
  variant = 'primary',
  shape = 'default',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  iconOnly = false,
  ariaLabel,
  type = 'button',
  onClick,
  className = '',
  ...props
}: ButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>) {
  const classNames = [
    'cui-btn',
    `cui-btn--${variant}`,
    `cui-btn--${size}`,
    shape === 'pill' ? 'cui-btn--pill' : '',
    fullWidth ? 'cui-btn--full-width' : '',
    iconOnly ? 'cui-btn--icon-only' : '',
    loading ? 'cui-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = children ?? label;
  const accessibleLabel =
    ariaLabel || (iconOnly && typeof content === 'string' ? content : undefined);

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-label={accessibleLabel}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <span className="cui-btn__icon">{iconLeft}</span>}
      {!iconOnly && content}
      {iconRight && <span className="cui-btn__icon">{iconRight}</span>}
    </button>
  );
}
