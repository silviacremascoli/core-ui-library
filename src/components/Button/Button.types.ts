// Button Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type ButtonVariant = 'primary' | 'danger' | 'outline' | 'ghost';
export type ButtonShape = 'default' | 'rounded' | 'pill';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** The text label displayed on the button */
  label?: string;

  /** Rich content passed as children (React / Vue slot) */
  children?: React.ReactNode;

  /** Visual style variant of the button */
  variant?: ButtonVariant;

  /** Button shape: theme default, rounded, or pill */
  shape?: ButtonShape;

  /** Size of the button */
  size?: ButtonSize;

  /** Whether the button is disabled */
  disabled?: boolean;

  /** Destination URL; renders an anchor instead of a button when provided */
  href?: string;

  /** Whether the button takes 100% width of its parent */
  fullWidth?: boolean;

  /** Whether the button is in a loading state */
  loading?: boolean;

  /** Icon displayed to the left of the label */
  iconLeft?: React.ReactNode | string;

  /** Icon displayed to the right of the label */
  iconRight?: React.ReactNode | string;

  /** Whether the button contains only an icon without text */
  iconOnly?: boolean;

  /** Accessible label, especially required when iconOnly is true */
  ariaLabel?: string;

  /** HTML button type attribute */
  type?: ButtonType;

  /** Additional CSS class name(s) */
  className?: string;

  /** Click event handler */
  onClick?: (event: Event | React.MouseEvent | MouseEvent) => void;
}

export interface ButtonArgs {
  label?: string;
  href?: string;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: string;
  iconRight?: string;
  iconOnly?: boolean;
  ariaLabel?: string;
  type?: ButtonType;
}
