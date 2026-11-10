// Twig Input component wrapper for TypeScript
// This allows importing the Twig template with type safety
import renderInputTemplate from './Input.twig';
import type { InputArgs } from '../../components/Input/Input.types';

function inputTemplate(args?: InputArgs): string {
  return renderInputTemplate(args);
}

function Input(args: InputArgs): string {
  return inputTemplate(args);
}

export default Input;
export { inputTemplate };
export type { InputArgs } from '../../components/Input/Input.types';
