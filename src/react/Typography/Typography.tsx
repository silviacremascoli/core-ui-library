import React from 'react';
import type { TypographyProps, TypographyVariant, TypographyTag } from '../../components/Typography/Typography.types';
import '../../components/Typography/Typography.css';

export type ReactTypographyProps = Omit<TypographyProps, 'children'> & React.HTMLAttributes<HTMLElement>;

export function Typography({
  children = '',
  tag,
  variant = 'body1',
  align,
  weight,
  color,
  truncate = false,
  noWrap = false,
  className = '',
  ...props
}: ReactTypographyProps) {
  const Tag = tag || getTagFromVariant(variant);

  const classNames = [
    'cui-typography',
    `cui-typography--${variant}`,
    align ? `cui-typography--align-${align}` : '',
    weight ? `cui-typography--weight-${weight}` : '',
    color ? `cui-typography--color-${color}` : '',
    truncate ? 'cui-typography--truncate' : '',
    noWrap ? 'cui-typography--no-wrap' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

function getTagFromVariant(variant: TypographyVariant): TypographyTag {
  switch (variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    case 'h6': return 'h6';
    case 'subtitle1':
    case 'subtitle2':
    case 'body1':
    case 'body2': return 'p';
    case 'caption':
    case 'overline':
    default: return 'span';
  }
}