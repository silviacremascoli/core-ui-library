import React from 'react';
import type { ContainerProps } from '../../components/Container/Container.types';
import '../../components/Container/Container.css';

export function Container({
  children,
  size = 'large',
  align = 'center',
  noPadding = false,
  fluid = false,
  className = '',
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  const classNames = [
    'cui-container',
    `cui-container--${size}`,
    align !== 'center' ? `cui-container--align-${align}` : '',
    noPadding ? 'cui-container--no-padding' : '',
    fluid ? 'cui-container--fluid' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}