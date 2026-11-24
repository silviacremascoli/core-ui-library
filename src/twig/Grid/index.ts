// Twig Grid components wrapper for TypeScript
// This allows importing the Twig templates with type safety
import renderRowTemplate from './Row.twig';
import renderColTemplate from './Col.twig';
import type { RowArgs, ColArgs } from '../../components/Grid/Grid.types';

function rowTemplate(args?: RowArgs): string {
  return renderRowTemplate(args);
}

function colTemplate(args?: ColArgs): string {
  return renderColTemplate(args);
}

export { rowTemplate, colTemplate };
export type { RowArgs, ColArgs } from '../../components/Grid/Grid.types';
