import { icon as renderFontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCertificate,
  faChevronDown,
  faCode,
  faCodeBranch,
  faCubesStacked,
  faEnvelope,
  faFile,
  faGear,
  faKeyboard,
  faLaptopCode,
  faLeaf,
  faLink,
  faPencil,
  faPhone,
  faPlus,
  faRocket,
  faTerminal,
  faTrashCan,
  faTruckField,
  faWifi,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope as faEnvelopeRegular,
  faHandPointUp,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAws,
  faBootstrap,
  faConfluence,
  faCss3Alt,
  faFigma,
  faGithub,
  faGitlab,
  faGoogle,
  faHtml5,
  faJira,
  faLinkedin,
  faReact,
  faSass,
  faSquareJs,
  faStorybook,
  faTypescript,
  faTypo3,
  faVuejs,
  faWindows,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const fontAwesomeIcons = {
  aws: faAws,
  bootstrap: faBootstrap,
  certificate: faCertificate,
  'chevron-down': faChevronDown,
  'code-branch': faCodeBranch,
  code: faCode,
  confluence: faConfluence,
  'css3-alt': faCss3Alt,
  'cubes-stacked': faCubesStacked,
  envelope: faEnvelope,
  'envelope-regular': faEnvelopeRegular,
  figma: faFigma,
  file: faFile,
  gear: faGear,
  github: faGithub,
  gitlab: faGitlab,
  google: faGoogle,
  'hand-point-up': faHandPointUp,
  html5: faHtml5,
  jira: faJira,
  keyboard: faKeyboard,
  'laptop-code': faLaptopCode,
  leaf: faLeaf,
  link: faLink,
  linkedin: faLinkedin,
  pencil: faPencil,
  phone: faPhone,
  plus: faPlus,
  react: faReact,
  rocket: faRocket,
  sass: faSass,
  'square-js': faSquareJs,
  storybook: faStorybook,
  terminal: faTerminal,
  'trash-can': faTrashCan,
  'truck-field': faTruckField,
  typescript: faTypescript,
  typo3: faTypo3,
  vuejs: faVuejs,
  wifi: faWifi,
  windows: faWindows,
  xmark: faXmark,
} satisfies Record<string, IconDefinition>;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;

export function resolveIconMarkup(name: string): string | undefined {
  const definition = fontAwesomeIcons[name as FontAwesomeIconName];

  if (definition) {
    return renderFontAwesomeIcon(definition, {
      attributes: { 'aria-hidden': 'true', focusable: 'false' },
    }).html.join('');
  }

  return name.trimStart().startsWith('<svg') ? name : undefined;
}
