import React from 'react';
import type { TypographyProps, TypographyVariant, TypographyTag } from '../../components/Typography/Typography.types';
import '../../components/Typography/Typography.css';

export type ReactTypographyProps = Omit<TypographyProps, 'children'> & React.HTMLAttributes<HTMLElement>;

export function Typography({
  children = '',
  tag,
  variant,
  align,
  weight,
  fontFamily,
  color,
  truncate = false,
  noWrap = false,
  className = '',
  style,
  ...props
}: ReactTypographyProps) {
  const resolvedVariant = variant || getVariantFromTag(tag) || 'body1';
  const Tag = tag || getTagFromVariant(resolvedVariant);
  const resolvedFontFamily = fontFamily === 'text'
    ? 'var(--cui-font-family)'
    : fontFamily === 'heading'
      ? 'var(--cui-font-family-heading, var(--cui-font-family))'
      : fontFamily;

  const classNames = [
    'cui-typography',
    `cui-typography--${resolvedVariant}`,
    align ? `cui-typography--align-${align}` : '',
    weight ? `cui-typography--weight-${weight}` : '',
    color ? `cui-typography--color-${color}` : '',
    truncate ? 'cui-typography--truncate' : '',
    noWrap ? 'cui-typography--no-wrap' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} style={resolvedFontFamily ? { ...style, fontFamily: resolvedFontFamily } : style} {...props}>
      {children}
    </Tag>
  );
}

function getVariantFromTag(tag?: TypographyTag): TypographyVariant | '' {
  switch (tag) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    case 'h6': return 'h6';
    default: return '';
  }
}

function getTagFromVariant(variant: TypographyVariant): TypographyTag {
  switch (variant) {
    case 'display1':
    case 'display2':
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