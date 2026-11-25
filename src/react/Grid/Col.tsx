import React from 'react';
import type { ColProps, GridColSize, GridOffset, GridOrder } from '../../components/Grid/Grid.types';
import '../../components/Grid/Grid.css';

function sizeClass(prefix: string, value?: GridColSize): string {
  if (!value) return '';
  return value === 'auto' ? `${prefix}-auto` : `${prefix}-${value}`;
}

function offsetClass(bp: string, value?: GridOffset): string {
  if (value === undefined || value === null) return '';
  return `cui-col--offset-${bp ? bp + '-' : ''}${value}`;
}

function orderClass(bp: string, value?: GridOrder): string {
  if (value === undefined || value === null) return '';
  return `cui-col--order-${bp ? bp + '-' : ''}${value}`;
}

export function Col({
  span,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
  order,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  orderXxl,
  hide = false,
  hideBelow,
  showBelow,
  as,
  className = '',
  children,
  ...props
}: ColProps & React.HTMLAttributes<HTMLDivElement>) {
  const classNames = [
    'cui-col',
    sizeClass('cui-col', span),
    sizeClass('cui-col-sm', sm),
    sizeClass('cui-col-md', md),
    sizeClass('cui-col-lg', lg),
    sizeClass('cui-col-xl', xl),
    sizeClass('cui-col-xxl', xxl),
    offsetClass('', offset),
    offsetClass('sm', offsetSm),
    offsetClass('md', offsetMd),
    offsetClass('lg', offsetLg),
    offsetClass('xl', offsetXl),
    offsetClass('xxl', offsetXxl),
    orderClass('', order),
    orderClass('sm', orderSm),
    orderClass('md', orderMd),
    orderClass('lg', orderLg),
    orderClass('xl', orderXl),
    orderClass('xxl', orderXxl),
    hide ? 'cui-col--hide' : '',
    hideBelow ? `cui-col--hide-below-${hideBelow}` : '',
    showBelow ? `cui-col--show-below-${showBelow}` : '',
    className
  ].filter(Boolean).join(' ');

  const Tag = (as || 'div') as React.ElementType;

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}
