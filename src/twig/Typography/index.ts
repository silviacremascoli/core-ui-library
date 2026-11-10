import typographyTemplate from './Typography.twig';
import type { TypographyArgs } from '../../components/Typography/Typography.types';

function Typography(args: TypographyArgs): string {
  return typographyTemplate(args);
}

export default Typography;
export { typographyTemplate };
export type { TypographyArgs } from '../../components/Typography/Typography.types';