// Typography Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'subtitle1' | 'subtitle2' 
  | 'body1' | 'body2' 
  | 'caption' | 'overline';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
export type TypographyWeight = 'normal' | 'medium' | 'bold' | 'strong';
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'blockquote' | 'small' | 'strong' | 'em';
export type TypographyColor = 
  | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' 
  | 'text' | 'text-light' | 'inverse';

export interface TypographyProps {
  /** The text content to display */
  children?: string;
  
  /** Semantic element, independent of the visual variant */
  tag?: TypographyTag;
  
  /** Typography variant for styling */
  variant?: TypographyVariant;
  
  /** Text alignment */
  align?: TypographyAlign;
  
  /** Font weight */
  weight?: TypographyWeight;
  
  /** Text color */
  color?: TypographyColor;
  
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  
  /** Whether to prevent wrapping */
  noWrap?: boolean;
  
  /** Additional CSS class name(s) */
  className?: string;
}

export interface TypographyArgs {
  content?: string;
  tag?: TypographyTag;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  color?: TypographyColor;
  truncate?: boolean;
  noWrap?: boolean;
  className?: string;
  id?: string;
  lang?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
  ariaLabel?: string;
  ariaDescribedby?: string;
}