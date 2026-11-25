import React from 'react';
import type { ContainerProps } from '../../components/Container/Container.types';
import '../../components/Container/Container.css';

export function Container({
  children,
  size = 'large',
  align = 'center',
  noPadding = false,
  fluid = false,
  queryable = false,
  as,
  className = '',
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  const classNames = [
    'cui-container',
    `cui-container--${size}`,
    align !== 'center' ? `cui-container--align-${align}` : '',
    noPadding ? 'cui-container--no-padding' : '',
    fluid ? 'cui-container--fluid' : '',
    queryable ? 'cui-container--queryable' : '',
    className
  ].filter(Boolean).join(' ');

  const Tag = (as || 'div') as React.ElementType;

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}