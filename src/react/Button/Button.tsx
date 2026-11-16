import React from 'react';
import type { ButtonProps } from '../../components/Button/Button.types';
import { Icon } from '../Icon/Icon';
import type { IconSize, FontAwesomeIconName } from '../../components/Icon/Icon.types';
import '../../components/Button/Button.css';

// Map Button sizes to Icon sizes
const buttonSizeToIconSize: Record<string, IconSize> = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

function renderAdornment(icon: FontAwesomeIconName, size: string, iconSize?: IconSize) {
  return (
    <Icon 
      icon={icon} 
      size={iconSize || buttonSizeToIconSize[size] || 'md'}
      ariaHidden={true}
      className="cui-btn--icon"
    />
  );
}

export function Button(props: ButtonProps) {
  const {
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
    className = '',
    iconSize,
    onClick,
    type = 'button',
    ...restProps
  }: ButtonProps & React.HTMLAttributes<HTMLElement> = props as ButtonProps & React.HTMLAttributes<HTMLElement>;

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
  ].filter(Boolean).join(' ');

  const content = children ?? label;
  const unavailable = disabled || loading;
  const accessibleLabel =
    ariaLabel || (restProps as Record<string, unknown>)['aria-label'] as string | undefined || (iconOnly && typeof content === 'string' ? content : undefined);

  const buttonContent = (
    <>
      {iconLeft && renderAdornment(iconLeft, size, iconSize)}
      {!iconOnly && content}
      {iconRight && renderAdornment(iconRight, size, iconSize)}
    </>
  );

  if (href !== undefined) {
    const anchorRestProps = restProps as React.HTMLAttributes<HTMLAnchorElement>;
    
    return (
      <a
        {...anchorRestProps}
        href={unavailable ? undefined : href}
        className={classNames}
        aria-label={accessibleLabel}
        aria-busy={loading || anchorRestProps['aria-busy']}
        aria-disabled={unavailable || anchorRestProps['aria-disabled']}
        tabIndex={unavailable ? -1 : anchorRestProps.tabIndex}
        onClick={unavailable ? undefined : onClick}
      >
        {buttonContent}
      </a>
    );
  }

  const buttonRestProps = restProps as React.HTMLAttributes<HTMLButtonElement>;
  
  return (
    <button
      {...buttonRestProps}
      type={type}
      className={classNames}
      disabled={unavailable}
      aria-label={accessibleLabel}
      aria-busy={loading || buttonRestProps['aria-busy']}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
