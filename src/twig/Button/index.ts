// Twig Button component wrapper for TypeScript
// This allows importing the Twig template with type safety
import buttonTemplate from './Button.twig';
import type { ButtonArgs } from '../../components/Button/Button.types';

function Button(args: ButtonArgs): string {
  return buttonTemplate(args);
}

export default Button;
export { buttonTemplate };
export type { ButtonArgs } from '../../components/Button/Button.types';
