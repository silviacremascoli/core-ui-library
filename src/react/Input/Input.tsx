import React from 'react';
import type { InputProps } from '../../components/Input/Input.types';
import '../../components/Input/Input.css';

export function Input({
  label,
  type = 'text',
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  value,
  defaultValue,
  variant = 'default',
  shape = 'default',
  size = 'medium',
  fullWidth = false,
  iconLeft,
  iconRight,
  clearable = false,
  onClear,
  id,
  name,
  autoComplete,
  ariaDescribedBy,
  ariaInvalid,
  onChange,
  onInput,
  className = '',
  ...props
}: InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>) {
  const hasWrapper = Boolean(iconLeft || iconRight || clearable || fullWidth);

  const inputClassNames = [
    'cui-input',
    variant !== 'default' ? `cui-input--${variant}` : '',
    size !== 'medium' ? `cui-input--${size}` : '',
    shape === 'rounded' ? 'cui-input--rounded' : '',
    shape === 'pill' ? 'cui-input--pill' : '',
    fullWidth && !hasWrapper ? 'cui-input--full-width' : '',
    iconLeft ? 'cui-input--has-icon-left' : '',
    iconRight || clearable ? 'cui-input--has-icon-right' : '',
    !hasWrapper ? className : '',
  ]
    .filter(Boolean)
    .join(' ');

  const inputElement = (
    <input
      id={id}
      name={name}
      type={type}
      className={inputClassNames}
      aria-label={label}
      aria-invalid={ariaInvalid || variant === 'error' ? true : undefined}
      aria-describedby={ariaDescribedBy}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      autoComplete={autoComplete}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onInput={onInput}
      {...props}
    />
  );

  if (!hasWrapper) {
    return inputElement;
  }

  const wrapperClassNames = [
    'cui-input-wrapper',
    fullWidth ? 'cui-input-wrapper--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      {iconLeft && <span className="cui-input__icon-left">{iconLeft}</span>}
      {inputElement}
      {clearable && (
        <button
          type="button"
          className="cui-input__clear-btn"
          aria-label="Clear search input"
          onClick={onClear}
        >
          &#x2715;
        </button>
      )}
      {!clearable && iconRight && <span className="cui-input__icon-right">{iconRight}</span>}
    </div>
  );
}
