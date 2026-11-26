// Twig Components Entry Point
// Import global styles for Twig applications
import '../design/global.css';

export { default as Button, buttonTemplate } from './Button';
export { default as Icon, iconTemplate } from './Icon';
export { default as Input, inputTemplate } from './Input';
export { default as Label, labelTemplate } from './Label';
export { default as Typography, typographyTemplate } from './Typography';
export { default as Container, containerTemplate } from './Container';
export { rowTemplate, colTemplate } from './Grid';
export type { RowArgs, ColArgs } from '../components/Grid/Grid.types';
export type { IconArgs } from '../components/Icon/Icon.types';
export type { TypographyArgs, TypographyTag, TypographyVariant, TypographyAlign, TypographyWeight, TypographyColor } from '../components/Typography/Typography.types';

// Utilities must be imported only here, from the last lib entry: the bundler emits
// a CSS module after the component styles of entries listed after its importers.
// Keeping this the sole import puts utilities last in the bundled core-ui.css,
// so utility classes override component styles at equal specificity.
// scripts/check-css-order.mjs fails the build if that invariant breaks.
import '../design/utilities.css';
