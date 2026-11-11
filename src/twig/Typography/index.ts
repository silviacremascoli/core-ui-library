import renderTypographyTemplate from './Typography.twig';
import type { TypographyArgs } from '../../components/Typography/Typography.types';

function typographyTemplate(args?: TypographyArgs): string {
  return renderTypographyTemplate(args);
}

function Typography(args: TypographyArgs): string {
  return typographyTemplate(args);
}

export default Typography;
export { typographyTemplate };
export type { TypographyArgs } from '../../components/Typography/Typography.types';