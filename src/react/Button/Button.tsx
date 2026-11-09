import React from 'react';
import type { ButtonProps } from '../../components/Button/Button.types';
import '../../components/Button/Button.css';

export function Button({
  label,
  children,
  variant = 'primary',
  shape = 'default',
  size = 'medium',
  href,
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
    shape === 'rounded' ? 'cui-btn--rounded' : '',
    shape === 'pill' ? 'cui-btn--pill' : '',
    fullWidth ? 'cui-btn--full-width' : '',
    iconOnly ? 'cui-btn--icon-only' : '',
    href !== undefined && iconOnly ? 'cui-btn--icon-only-link' : '',
    loading ? 'cui-btn--loading' : '',
    href !== undefined && (disabled || loading) ? 'cui-btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = children ?? label;
  const unavailable = disabled || loading;
  const accessibleLabel =
    ariaLabel || (iconOnly && typeof content === 'string' ? content : undefined);
  const buttonContent = (
    <>
      {iconLeft && <span className="cui-btn__icon">{iconLeft}</span>}
      {!iconOnly && content}
      {iconRight && <span className="cui-btn__icon">{iconRight}</span>}
    </>
  );

  if (href !== undefined) {
    return (
      <a
        {...props}
        href={unavailable ? undefined : href}
        className={classNames}
        aria-label={accessibleLabel}
        aria-busy={loading || undefined}
        aria-disabled={unavailable || undefined}
        tabIndex={unavailable ? -1 : props.tabIndex}
        onClick={unavailable ? undefined : onClick}
      >
        {buttonContent}
      </a>
    );
  }

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
      {buttonContent}
    </button>
  );
}
