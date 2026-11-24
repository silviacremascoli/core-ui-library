import React from 'react';
import type { RowProps } from '../../components/Grid/Grid.types';
import '../../components/Grid/Grid.css';

export function Row({
  cols,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  colsXxl,
  g,
  gSm,
  gMd,
  gLg,
  gXl,
  gXxl,
  gx,
  gxSm,
  gxMd,
  gxLg,
  gxXl,
  gxXxl,
  gy,
  gySm,
  gyMd,
  gyLg,
  gyXl,
  gyXxl,
  alignItems,
  justifyContent,
  className = '',
  children,
  ...props
}: RowProps & React.HTMLAttributes<HTMLDivElement>) {
  const classNames = [
    'cui-row',
    cols ? `cui-row--cols-${cols}` : '',
    colsSm ? `cui-row--cols-sm-${colsSm}` : '',
    colsMd ? `cui-row--cols-md-${colsMd}` : '',
    colsLg ? `cui-row--cols-lg-${colsLg}` : '',
    colsXl ? `cui-row--cols-xl-${colsXl}` : '',
    colsXxl ? `cui-row--cols-xxl-${colsXxl}` : '',
    g ? `cui-row--g-${g}` : '',
    gSm ? `cui-row--g-sm-${gSm}` : '',
    gMd ? `cui-row--g-md-${gMd}` : '',
    gLg ? `cui-row--g-lg-${gLg}` : '',
    gXl ? `cui-row--g-xl-${gXl}` : '',
    gXxl ? `cui-row--g-xxl-${gXxl}` : '',
    gx ? `cui-row--gx-${gx}` : '',
    gxSm ? `cui-row--gx-sm-${gxSm}` : '',
    gxMd ? `cui-row--gx-md-${gxMd}` : '',
    gxLg ? `cui-row--gx-lg-${gxLg}` : '',
    gxXl ? `cui-row--gx-xl-${gxXl}` : '',
    gxXxl ? `cui-row--gx-xxl-${gxXxl}` : '',
    gy ? `cui-row--gy-${gy}` : '',
    gySm ? `cui-row--gy-sm-${gySm}` : '',
    gyMd ? `cui-row--gy-md-${gyMd}` : '',
    gyLg ? `cui-row--gy-lg-${gyLg}` : '',
    gyXl ? `cui-row--gy-xl-${gyXl}` : '',
    gyXxl ? `cui-row--gy-xxl-${gyXxl}` : '',
    alignItems ? `cui-row--align-items-${alignItems}` : '',
    justifyContent ? `cui-row--justify-content-${justifyContent}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
