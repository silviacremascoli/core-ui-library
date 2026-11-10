// Twig Button component wrapper for TypeScript
// This allows importing the Twig template with type safety
import twigButtonTemplate from './Button.twig';
import type { ButtonArgs } from '../../components/Button/Button.types';
import { fontAwesomeIcons, resolveIconMarkup } from '../../components/Icon/Icon.registry';

function resolveIcon(icon?: string): string | undefined {
  return icon && Object.hasOwn(fontAwesomeIcons, icon) ? resolveIconMarkup(icon) : undefined;
}

function buttonTemplate(args: ButtonArgs): string {
  return twigButtonTemplate({
    ...args,
    iconLeftTrustedHtml: args.iconLeftTrustedHtml ?? resolveIcon(args.iconLeft),
    iconRightTrustedHtml: args.iconRightTrustedHtml ?? resolveIcon(args.iconRight),
  });
}

function Button(args: ButtonArgs): string {
  return buttonTemplate(args);
}

export default Button;
export { buttonTemplate };
export type { ButtonArgs } from '../../components/Button/Button.types';
