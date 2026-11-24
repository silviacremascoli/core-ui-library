import containerTemplate from './Container.twig';
import type { ContainerArgs } from '../../components/Container/Container.types';

function Container(args: ContainerArgs): string {
  return containerTemplate(args);
}

export default Container;
export { containerTemplate };
export type { ContainerArgs } from '../../components/Container/Container.types';