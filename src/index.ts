// Core UI Library - Main Entry Point
// This exports all components from all frameworks for convenience

// Import global styles (CSS custom properties)
import './design/global.css';

// Import theme support (dark/light mode)
import './design/themes.css';

// Re-export shared types (the single source of truth for all component types)
export type * from './components/Button/Button.types';
export type * from './components/Input/Input.types';

// Re-export React components
export * from './react';

// Re-export Vue components
export * from './vue';

// Re-export Twig components
export * from './twig';
