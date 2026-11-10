// Label Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type LabelSize = 'small' | 'medium' | 'large';
export type LabelWeight = 'normal' | 'medium' | 'bold' | 'strong';
export type LabelColor = 
  | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' 
  | 'text' | 'text-light' | 'inverse';

export interface LabelProps {
  /** The label text content */
  children?: string;
  
  /** The HTML id of the associated form element */
  htmlFor?: string;
  
  /** Label size */
  size?: LabelSize;
  
  /** Font weight */
  weight?: LabelWeight;
  
  /** Text color */
  color?: LabelColor;
  
  /** Whether the label indicates a required field */
  required?: boolean;
  
  /** Whether the label is disabled */
  disabled?: boolean;
  
  /** Whether to hide the label visually (useful for screen-reader-only labels) */
  visuallyHidden?: boolean;
  
  /** Additional CSS class name(s) */
  className?: string;
}

export interface LabelArgs {
  content?: string;
  htmlFor?: string;
  size?: LabelSize;
  weight?: LabelWeight;
  color?: LabelColor;
  required?: boolean;
  disabled?: boolean;
  visuallyHidden?: boolean;
  className?: string;
}