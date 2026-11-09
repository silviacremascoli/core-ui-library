import React from 'react';
import type { ButtonProps } from '../../components/Button/Button.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';
import '../../components/Button/Button.css';

function renderAdornment(icon: React.ReactNode | string) {
  if (typeof icon === 'string') {
    const markup = resolveIconMarkup(icon);
    if (markup) {
      return <span className="cui-btn__icon" dangerouslySetInnerHTML={{ __html: markup }} />;
    }
  }

  return <span className="cui-btn__icon">{icon}</span>;
}

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
      {iconLeft && renderAdornment(iconLeft)}
      {!iconOnly && content}
      {iconRight && renderAdornment(iconRight)}
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
