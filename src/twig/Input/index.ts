// Twig Input component wrapper for TypeScript
// This allows importing the Twig template with type safety
import renderInputTemplate from './Input.twig';
import { iconTemplate } from '../Icon';
import type { InputArgs } from '../../components/Input/Input.types';

// resolve icon names to icon markup
function resolveIconArg(value?: string): string | undefined {
  if (!value) return undefined;
  return value.startsWith('<') ? value : iconTemplate({ icon: value, ariaHidden: true });
}

function inputTemplate(args?: InputArgs): string {
  return renderInputTemplate({
    ...args,
    iconLeft: resolveIconArg(args?.iconLeft),
    iconRight: resolveIconArg(args?.iconRight),
  });
}

function Input(args: InputArgs): string {
  return inputTemplate(args);
}

export default Input;
export { inputTemplate };
export type { InputArgs } from '../../components/Input/Input.types';
