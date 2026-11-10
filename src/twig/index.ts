// Twig Components Entry Point
// Import global styles for Twig applications
import '../design/global.css';

export { default as Button, buttonTemplate } from './Button';
export { default as Input, inputTemplate } from './Input';
export { default as Label, labelTemplate } from './Label';
export { default as Typography, typographyTemplate } from './Typography';
export type { TypographyArgs, TypographyTag, TypographyVariant, TypographyAlign, TypographyWeight, TypographyColor } from '../components/Typography/Typography.types';
