// Twig Button component wrapper for TypeScript
// This allows importing the Twig template with type safety
import renderButtonTemplate from './Button.twig';
import type { ButtonArgs, ButtonIconSize } from '../../components/Button/Button.types';
import { iconTemplate } from '../Icon';
import type { IconArgs } from '../../components/Icon/Icon.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';

// Map Button sizes to Icon sizes
const buttonSizeToIconSize: Record<string, ButtonIconSize> = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

function renderIcon(icon: string | undefined, size: ButtonIconSize = 'md'): string {
  if (!icon) return '';
  
  // icon is guaranteed to be a string here due to the if check
  const iconStr: string = icon;
  return iconTemplate({
    icon: iconStr,
    size: size,
    ariaHidden: true,
    className: 'cui-btn--icon',
  });
}

function buttonTemplate(args: ButtonArgs): string {
  const iconSize = args.iconSize || args.size || 'medium';
  
  return renderButtonTemplate({
    ...args,
    iconLeftHtml: args.iconLeft ? renderIcon(args.iconLeft, args.iconSize || buttonSizeToIconSize[args.size || 'medium'] || 'md') : '',
    iconRightHtml: args.iconRight ? renderIcon(args.iconRight, args.iconSize || buttonSizeToIconSize[args.size || 'medium'] || 'md') : '',

  });
}

function Button(args: ButtonArgs): string {
  return buttonTemplate(args);
}

export default Button;
export { buttonTemplate };
export type { ButtonArgs } from '../../components/Button/Button.types';
