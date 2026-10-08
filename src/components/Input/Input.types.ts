// Input Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type InputType = 'text' | 'date' | 'time' | 'search' | 'email' | 'password' | 'number' | 'tel' | 'url';

export interface InputProps {
  /** The accessible label for the input (used as aria-label) */
  label?: string;
  
  /** The type of input */
  type?: InputType;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Whether the input is disabled */
  disabled?: boolean;
  
  /** The current value of the input */
  value?: string;
  
  /** Additional CSS class name(s) */
  className?: string;
  
  /** Change event handler */
  onChange?: (event: Event | React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputArgs {
  label?: string;
  type?: InputType;
  placeholder?: string;
}
