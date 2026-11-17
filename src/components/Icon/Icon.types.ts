// Icon Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconColor = 
  | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' 
  | 'text' | 'text-light' | 'inverse' | 'current';
export type IconTarget = '_blank' | '_self' | '_parent' | '_top';
export type IconVariant = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'two-tone';
export type FontAwesomeIconName = import('./Icon.registry').FontAwesomeIconName;
export type IconName = FontAwesomeIconName;

export interface IconProps {
  /** Registered Font Awesome name */
  icon: FontAwesomeIconName;
  
  /** Icon size */
  size?: IconSize;
  
  /** Icon color */
  color?: IconColor;
  
  /** Whether to use the icon as a link */
  asLink?: boolean;
  
  /** Link URL (when asLink is true) */
  href?: string;
  
  /** Link target (when asLink is true) */
  target?: '_blank' | '_self' | '_parent' | '_top';
  
  /** Link rel attribute (when asLink is true) */
  rel?: string;
  
  /** Additional CSS class name(s) */
  className?: string;
  
  /** Accessibility label */
  ariaLabel?: string;
  
  /** Whether the icon is purely decorative (no semantic meaning) */
  ariaHidden?: boolean;
  
  /** Additional ARIA attributes */
  aria?: Record<string, string>;
  
  /** Click event handler */
  onClick?: (event: Event | React.MouseEvent | MouseEvent) => void;
}

export interface IconArgs {
  icon: string;
  size?: IconSize;
  color?: IconColor;
  asLink?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  aria?: Record<string, string>;
}
