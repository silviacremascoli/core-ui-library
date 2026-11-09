// Input Component - Shared TypeScript Types
// Used by all framework implementations (React, Vue, Twig)

export type InputType = 'text' | 'date' | 'time' | 'search' | 'email' | 'password' | 'number' | 'tel' | 'url';
export type InputVariant = 'default' | 'error' | 'success';
export type InputShape = 'default' | 'rounded' | 'pill';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps {
  /** The accessible label for the input (used as aria-label or associated label text) */
  label?: string;

  /** The type of input */
  type?: InputType;

  /** Placeholder text */
  placeholder?: string;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether the input is read-only */
  readOnly?: boolean;

  /** Whether the input is required */
  required?: boolean;

  /** The current value of the input */
  value?: string;

  /** Initial value for uncontrolled inputs */
  defaultValue?: string;

  /** Validation state variant */
  variant?: InputVariant;

  /** Input shape: theme default, rounded, or pill */
  shape?: InputShape;

  /** Size of the input */
  size?: InputSize;

  /** Whether the input spans full width of its parent */
  fullWidth?: boolean;

  /** Icon displayed on the left inside the input field */
  iconLeft?: React.ReactNode | string;

  /** Icon displayed on the right inside the input field */
  iconRight?: React.ReactNode | string;

  /** Whether to show an embedded clear button when text is present (Weather App design) */
  clearable?: boolean;

  /** Callback fired when the clear button is clicked */
  onClear?: () => void;

  /** HTML id attribute */
  id?: string;

  /** HTML name attribute */
  name?: string;

  /** HTML autocomplete attribute */
  autoComplete?: string;

  /** ARIA describedby reference */
  ariaDescribedBy?: string;

  /** ARIA invalid indicator */
  ariaInvalid?: boolean;

  /** Additional CSS class name(s) */
  className?: string;

  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | Event) => void;

  /** Input event handler */
  onInput?: (event: React.FormEvent<HTMLInputElement> | Event) => void;
}

export interface InputArgs {
  label?: string;
  type?: InputType;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  variant?: InputVariant;
  shape?: InputShape;
  size?: InputSize;
  fullWidth?: boolean;
  clearable?: boolean;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
}
