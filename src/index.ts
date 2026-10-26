// Core UI Library - Main Entry Point
// This exports all components from all frameworks for convenience

// Import global styles (CSS custom properties)
import './design/global.css';

// Import theme support (dark/light mode)
import './design/themes.css';

// Re-export shared types (the single source of truth for all component types)
export type * from './components/Button/Button.types';
export type * from './components/Input/Input.types';
export type * from './components/Typography/Typography.types';
export type * from './components/Container/Container.types';
export type * from './components/Card/Card.types';
export type * from './components/Modal/Modal.types';
export type * from './components/Select/Select.types';
export type * from './components/Icon/Icon.types';
export type * from './components/Label/Label.types';
export type * from './components/Checkbox/Checkbox.types';
export type * from './components/Radio/Radio.types';
export type * from './components/Textarea/Textarea.types';

// Preserve framework-qualified names at the combined package root.
export {
	Button as ReactButton,
	Input as ReactInput,
} from './react';
export {
	Button as VueButton,
	Input as VueInput,
} from './vue';
export {
	Button as TwigButton,
	Input as TwigInput,
} from './twig';
