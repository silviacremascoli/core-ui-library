// Grid Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

/** Breakpoints: sm 576, md 768, lg 992, xl 1200, xxl 1400 (px) */
export type GridBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/** Column span on a 12-column grid */
export type GridColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** Column size: a span 1-12, or 'auto' for content-based width */
export type GridColSize = GridColSpan | 'auto';

/** Number of equal-width columns per row (row-cols) */
export type GridRowCols = 1 | 2 | 3 | 4 | 5 | 6;

/** Column offset in columns (0-11) */
export type GridOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/** Visual order: 0-5, or 'first'/'last' (order -1 / 13) */
export type GridOrder = 0 | 1 | 2 | 3 | 4 | 5 | 'first' | 'last';

/** Gutter level 0-5 (scale: 0, .25rem, .5rem, 1rem, 1.5rem, 3rem) */
export type GridGutter = 0 | 1 | 2 | 3 | 4 | 5;

/** Cross-axis alignment of the row's items (align-items) */
export type GridAlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Main-axis distribution of the row's items (justify-content) */
export type GridJustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface RowProps {
  /** Equal-width columns per row at the base (mobile-first) breakpoint */
  cols?: GridRowCols;
  colsSm?: GridRowCols;
  colsMd?: GridRowCols;
  colsLg?: GridRowCols;
  colsXl?: GridRowCols;
  colsXxl?: GridRowCols;
  /** Gutter level (both axes) at the base breakpoint */
  g?: GridGutter;
  gSm?: GridGutter;
  gMd?: GridGutter;
  gLg?: GridGutter;
  gXl?: GridGutter;
  gXxl?: GridGutter;
  /** Horizontal gutter level at the base breakpoint */
  gx?: GridGutter;
  gxSm?: GridGutter;
  gxMd?: GridGutter;
  gxLg?: GridGutter;
  gxXl?: GridGutter;
  gxXxl?: GridGutter;
  /** Vertical gutter level at the base breakpoint */
  gy?: GridGutter;
  gySm?: GridGutter;
  gyMd?: GridGutter;
  gyLg?: GridGutter;
  gyXl?: GridGutter;
  gyXxl?: GridGutter;
  /** Cross-axis alignment of the row's items */
  alignItems?: GridAlignItems;
  /** Main-axis distribution of the row's items */
  justifyContent?: GridJustifyContent;
  /** Additional CSS class name(s) */
  className?: string;
  /** Row content (columns) */
  children?: string | React.ReactNode;
}

export interface RowArgs {
  content?: string;
  cols?: GridRowCols;
  colsSm?: GridRowCols;
  colsMd?: GridRowCols;
  colsLg?: GridRowCols;
  colsXl?: GridRowCols;
  colsXxl?: GridRowCols;
  g?: GridGutter;
  gSm?: GridGutter;
  gMd?: GridGutter;
  gLg?: GridGutter;
  gXl?: GridGutter;
  gXxl?: GridGutter;
  gx?: GridGutter;
  gxSm?: GridGutter;
  gxMd?: GridGutter;
  gxLg?: GridGutter;
  gxXl?: GridGutter;
  gxXxl?: GridGutter;
  gy?: GridGutter;
  gySm?: GridGutter;
  gyMd?: GridGutter;
  gyLg?: GridGutter;
  gyXl?: GridGutter;
  gyXxl?: GridGutter;
  alignItems?: GridAlignItems;
  justifyContent?: GridJustifyContent;
  className?: string;
}

export interface ColProps {
  /** Column span at the base breakpoint (1-12 or 'auto'); omit for equal-width .cui-col */
  span?: GridColSize;
  sm?: GridColSize;
  md?: GridColSize;
  lg?: GridColSize;
  xl?: GridColSize;
  xxl?: GridColSize;
  /** Column offset at the base breakpoint */
  offset?: GridOffset;
  offsetSm?: GridOffset;
  offsetMd?: GridOffset;
  offsetLg?: GridOffset;
  offsetXl?: GridOffset;
  offsetXxl?: GridOffset;
  /** Visual order at the base breakpoint */
  order?: GridOrder;
  orderSm?: GridOrder;
  orderMd?: GridOrder;
  orderLg?: GridOrder;
  orderXl?: GridOrder;
  orderXxl?: GridOrder;
  /** Additional CSS class name(s) */
  className?: string;
  /** Column content */
  children?: string | React.ReactNode;
}

export interface ColArgs {
  content?: string;
  span?: GridColSize;
  sm?: GridColSize;
  md?: GridColSize;
  lg?: GridColSize;
  xl?: GridColSize;
  xxl?: GridColSize;
  offset?: GridOffset;
  offsetSm?: GridOffset;
  offsetMd?: GridOffset;
  offsetLg?: GridOffset;
  offsetXl?: GridOffset;
  offsetXxl?: GridOffset;
  order?: GridOrder;
  orderSm?: GridOrder;
  orderMd?: GridOrder;
  orderLg?: GridOrder;
  orderXl?: GridOrder;
  orderXxl?: GridOrder;
  className?: string;
}
