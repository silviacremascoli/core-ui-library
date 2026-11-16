import renderIconTemplate from './Icon.twig';
import type { IconArgs } from '../../components/Icon/Icon.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';

function iconTemplate(args: IconArgs): string {
  return renderIconTemplate({
    ...args,
    icon: resolveIconMarkup(args.icon) ?? args.icon,
    ariaHidden: args.ariaHidden,
    aria: args.aria,
  });
}

function Icon(args: IconArgs): string {
  return iconTemplate(args);
}

export default Icon;
export { iconTemplate };
export type { IconArgs } from '../../components/Icon/Icon.types';