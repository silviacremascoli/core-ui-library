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

// Re-export React components
export * from './react';

// Re-export Vue components
export * from './vue';

// Re-export Twig components
export * from './twig';
