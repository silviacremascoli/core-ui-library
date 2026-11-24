// Container Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type ContainerSize = 'small' | 'medium' | 'large' | 'full';
export type ContainerAlign = 'left' | 'center' | 'right';

export interface ContainerProps {
  /** Content to display inside the container */
  children?: string | React.ReactNode;
  
  /** Container size (width) */
  size?: ContainerSize;
  
  /** Horizontal alignment of content */
  align?: ContainerAlign;
  
  /** Whether to add padding */
  noPadding?: boolean;
  
  /** Whether to enable fluid/max-width behavior */
  fluid?: boolean;
  
  /** Additional CSS class name(s) */
  className?: string;
}

export interface ContainerArgs {
  content?: string;
  size?: ContainerSize;
  align?: ContainerAlign;
  noPadding?: boolean;
  fluid?: boolean;
  className?: string;
}