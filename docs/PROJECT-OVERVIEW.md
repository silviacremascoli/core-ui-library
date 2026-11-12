# Core UI Library: Project Overview

## Purpose

Core UI Library is a reusable component system for building consistent interfaces across web projects. It brings shared styles and design tokens together with component implementations for React, Vue, and Twig, so interface patterns can be reused without tying every project to one framework.

Storybook is the library's interactive catalog and development workspace. Each story presents a component in isolation, making its appearance and available variations easier to inspect while the component is being built.

## What the project demonstrates

- **Component architecture:** organizing reusable interface elements and exposing them through framework-specific entry points.
- **Design-system thinking:** using shared CSS to keep visual decisions consistent.
- **Cross-framework development:** supporting React, Vue, and Twig in one library.
- **Developer experience:** using Storybook, Vite, and TypeScript to develop, document, and review components.
- **Accessible UI practices:** including Storybook's accessibility addon in the component review workflow.

## Current scope

**Button**, **Input**, **Label**, and **Typography** are available across React, Vue, and Twig and have Storybook stories. Card, Checkbox, Container, Icon, Modal, Radio, Select, and Textarea are in local development and have not yet been committed to Git.

Storybook uses `@storybook/html-vite` to render Twig stories. React and Vue components share the same styles and are also exercised by Button interaction tests. The library exports framework-specific entry points, a shared stylesheet, and TypeScript declarations.

## Tonal Theming & Production Reusability

Core UI Library uses a default palette and four reusable tonal themes defined in `src/design/themes.css`:
- **Default (`.cui-theme--default`)**: Warm white surfaces, charcoal text, and jade actions.
- **Sage (`.cui-theme--sage`)**: Soft sage green (`#b6cdbd`), dark purple typography (`#272142`), and muted green borders (`#5c715e`).
- **Amber (`.cui-theme--amber`)**: Warm amber (`#db9558`), coral interactions (`#f2765e`), and destructive crimson (`#a82020`).
- **Ocean (`.cui-theme--ocean`)**: Muted slate blue (`#56899d`) and terracotta interaction accents (`#ba7154`).
- **Midnight (`.cui-theme--midnight`)**: Navy backgrounds (`#24263b`), deep slate surfaces (`#1f2235`), and electric coral accents (`#ff4a57`).

Use the Storybook toolbar's Theme selector to preview component stories in each palette. The Ocean Input story remains fixed to Ocean to compare its `data-cui-mode="light"` and `data-cui-mode="dark"` focus rings.

Button and Input support variants, focus styles, and icon adornments across React, Vue, and Twig. Button can also render as a link and supports disabled and loading states.

Input supports validation states and clearable fields. Label provides required, disabled, and visually hidden options. Typography separates semantic tags from visual variants and supports theme text, heading, and custom font families.

## Testing

Storybook uses Vitest and Playwright for browser-based story tests. Button interaction checks cover shape and padding consistency, keyboard activation, focus visibility, accessible icon labels, link and button semantics, and disabled and loading states. Separate helpers exercise React and Vue Button props and click handling. The Storybook accessibility addon supports accessibility review; the interaction checks are not a substitute for a full accessibility audit.

## Where to look

- `src/stories/components/` contains the component examples shown in Storybook.
- `src/design/` contains the shared design styles and theme definitions.
- `src/components/`, `src/react/`, `src/vue/`, and `src/twig/` contain shared component assets and framework-specific implementations.
- `.storybook/main.ts` configures Storybook and its Vite integrations; `.storybook/preview.ts` defines the theme toolbar.

## Run it locally

Install dependencies with `npm install`, then start the component catalog:

```bash
npm run storybook
```

Storybook runs at `http://localhost:6006`. To produce a static Storybook build, run `npm run build-storybook`.

Run the browser-based Storybook tests with:

```bash
npx vitest run --project storybook
```

## A useful way to review the project

Open a few stories and compare how component options are represented. Then trace a component from its story to its implementation and shared styles. This gives a quick view of how the project connects component API design, visual consistency, and multi-framework reuse.