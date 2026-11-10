import renderLabelTemplate from './Label.twig';
import type { LabelArgs } from '../../components/Label/Label.types';

function labelTemplate(args?: LabelArgs): string {
  return renderLabelTemplate(args);
}

function Label(args: LabelArgs): string {
  return labelTemplate(args);
}

export default Label;
export { labelTemplate };
export type { LabelArgs } from '../../components/Label/Label.types';