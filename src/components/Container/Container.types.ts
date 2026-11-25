// Container Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type ContainerSize = 'small' | 'medium' | 'large' | 'full';
export type ContainerAlign = 'left' | 'center' | 'right';

export interface ContainerProps {
  /** Content to display inside the container */
  children?: string | React.ReactNode;

  /** Container size (max-width cap; the container is fluid below the cap) */
  size?: ContainerSize;

  /** Horizontal alignment of content */
  align?: ContainerAlign;

  /** Whether to add padding */
  noPadding?: boolean;

  /** Whether to enable fluid/max-width behavior */
  fluid?: boolean;

  /** Enable container queries: descendants (e.g. grid columns) then also respond
      to this container's own width via @container rules */
  queryable?: boolean;

  /** HTML tag to render instead of div (e.g. 'section', 'main') */
  as?: string;

  /** Additional CSS class name(s) */
  className?: string;
}

export interface ContainerArgs {
  content?: string;
  size?: ContainerSize;
  align?: ContainerAlign;
  noPadding?: boolean;
  fluid?: boolean;
  queryable?: boolean;
  as?: string;
  className?: string;
}