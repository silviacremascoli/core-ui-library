import React from 'react';
import type { ButtonProps } from '../../components/Button/Button.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';
import '../../components/Button/Button.css';

type CommonProps = Omit<ButtonProps, 'href' | 'onClick' | 'type'>;

type ReactButtonProps =
  | (CommonProps & { href: string; type?: never } &
      Omit<React.ComponentPropsWithoutRef<'a'>, keyof CommonProps | 'href' | 'type'>)
  | (CommonProps & { href?: undefined } &
      Omit<React.ComponentPropsWithoutRef<'button'>, keyof CommonProps | 'href'>);

function renderAdornment(icon: React.ReactNode | string) {
  if (typeof icon === 'string') {
    const markup = resolveIconMarkup(icon);
    if (markup) {
      return <span className="cui-btn__icon" dangerouslySetInnerHTML={{ __html: markup }} />;
    }
  }

  return <span className="cui-btn__icon">{icon}</span>;
}

export function Button(props: ReactButtonProps) {
  const {
    label, children, variant = 'primary', shape = 'default',
    size = 'medium', href, disabled = false, fullWidth = false,
    loading = false, iconLeft, iconRight, iconOnly = false,
    ariaLabel, className = '',
  } = props;

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
    ariaLabel || props['aria-label'] || (iconOnly && typeof content === 'string' ? content : undefined);
  const buttonContent = (
    <>
      {iconLeft && renderAdornment(iconLeft)}
      {!iconOnly && content}
      {iconRight && renderAdornment(iconRight)}
    </>
  );

  if (props.href !== undefined) {
    const {
      label, children, variant, shape, size, href, disabled, fullWidth,
      loading, iconLeft, iconRight, iconOnly, ariaLabel, className,
      type, onClick, ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        href={unavailable ? undefined : href}
        className={classNames}
        aria-label={accessibleLabel}
        aria-busy={loading || anchorProps['aria-busy']}
        aria-disabled={unavailable || anchorProps['aria-disabled']}
        tabIndex={unavailable ? -1 : anchorProps.tabIndex}
        onClick={unavailable ? undefined : onClick}
      >
        {buttonContent}
      </a>
    );
  }

  const {
    label: _label, children: _children, variant: _variant, shape: _shape,
    size: _size, href: _href, disabled: _disabled, fullWidth: _fullWidth,
    loading: _loading, iconLeft: _iconLeft, iconRight: _iconRight,
    iconOnly: _iconOnly, ariaLabel: _ariaLabel, className: _className,
    type = 'button', onClick, ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-label={accessibleLabel}
      aria-busy={loading || buttonProps['aria-busy']}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
