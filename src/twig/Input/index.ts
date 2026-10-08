// Twig Input component wrapper for TypeScript
// This allows importing the Twig template with type safety
import inputTemplate from './Input.twig';
import type { InputArgs } from '../../components/Input/Input.types';

function Input(args: InputArgs): string {
  return inputTemplate(args);
}

export default Input;
export { inputTemplate };
export type { InputArgs } from '../../components/Input/Input.types';
