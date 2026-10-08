// Button Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** The text label displayed on the button */
  label: string;
  
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  
  /** Size of the button */
  size?: ButtonSize;
  
  /** Whether the button is disabled */
  disabled?: boolean;
  
  /** HTML button type attribute */
  type?: ButtonType;
  
  /** Additional CSS class name(s) */
  className?: string;
  
  /** Click event handler */
  onClick?: (event: Event | React.MouseEvent | MouseEvent) => void;
}

export interface ButtonArgs {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}
