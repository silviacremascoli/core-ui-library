import React from 'react';
import type { IconProps } from '../../components/Icon/Icon.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';
import '../../components/Icon/Icon.css';

export function Icon({
  icon,
  size = 'md',
  color,
  asLink = false,
  href = '#',
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  ariaLabel,
  ariaHidden = false,
  aria = {},
  onClick,
  ...props
}: IconProps & React.HTMLAttributes<HTMLElement>) {
  const classNames = [
    'cui-icon',
    `cui-icon--${size}`,
    color ? `cui-icon--color-${color}` : '',
    asLink ? 'cui-icon--link' : '',
    className
  ].filter(Boolean).join(' ');

  const iconMarkup = resolveIconMarkup(icon);

  const commonProps = {
    className: classNames,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    onClick,
    ...aria,
    ...props
  };

  if (asLink) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        role={!ariaLabel && !iconMarkup ? 'img' : undefined}
        {...commonProps}
      >
        {iconMarkup && <span dangerouslySetInnerHTML={{ __html: iconMarkup }} />}
      </a>
    );
  }

  return (
    <span {...commonProps}>
      {iconMarkup && <span dangerouslySetInnerHTML={{ __html: iconMarkup }} />}
    </span>
  );
}
