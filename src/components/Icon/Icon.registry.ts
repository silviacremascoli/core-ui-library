import { icon as renderFontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

// Helper to transform FontAwesome's camelCase naming to kebab-case
function toIconKey(name: string, suffix: string = ''): string {
  return name
    .replace(/^fa/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-+/, '')
    .replace(/--+/g, '-')
    + suffix;
}

// Type guard to check if a value is an IconDefinition
function isIconDefinition(value: unknown): value is IconDefinition {
  return typeof value === 'object' && value !== null && 'iconName' in value && 'prefix' in value;
}

// Build type-safe registry from all free icon packs
const iconRegistry: Record<string, IconDefinition> = {};

// Process solid icons
Object.entries(solidIcons).forEach(([name, value]) => {
  if (isIconDefinition(value)) {
    iconRegistry[toIconKey(name)] = value;
  }
});

// Process regular icons with -regular suffix
Object.entries(regularIcons).forEach(([name, value]) => {
  if (isIconDefinition(value)) {
    iconRegistry[toIconKey(name, '-regular')] = value;
  }
});

// Process brand icons
Object.entries(brandIcons).forEach(([name, value]) => {
  if (isIconDefinition(value)) {
    iconRegistry[toIconKey(name)] = value;
  }
});

export const fontAwesomeIcons = iconRegistry satisfies Record<string, IconDefinition>;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;

// Array of all FontAwesome icon names for Storybook controls
export const fontAwesomeIconNames: FontAwesomeIconName[] = Object.keys(fontAwesomeIcons) as FontAwesomeIconName[];

// Resolves the SVG markup for a given FontAwesome icon name
export function resolveIconMarkup(name: string): string | undefined {
  const definition = fontAwesomeIcons[name as FontAwesomeIconName];
  if (definition) {
    return renderFontAwesomeIcon(definition, {
      attributes: { 'aria-hidden': 'true', focusable: 'false' }
    }).html.join('');
  }
  return undefined;
}
