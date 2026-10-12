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

The Storybook catalog will soon contain 12 component story files, covering controls, forms, layout, typography, overlays, surfaces, and icons. The library is actively growing; planned ideas and future work are not presented here as completed features.

The Storybook configuration uses `@storybook/html-vite` with a Twig Vite plugin. React and Vue implementations are part of the library as well, alongside the shared styles and Twig templates.

## Where to look

- `src/stories/components/` contains the component examples shown in Storybook.
- `src/design/` contains the shared design styles and theme definitions.
- `src/components/`, `src/react/`, `src/vue/`, and `src/twig/` contain shared component assets and framework-specific implementations.
- `.storybook/main.ts` configures Storybook and its Vite/Twig integration.

## Run it locally

Install dependencies with `npm install`, then start the component catalog:

```bash
npm run storybook
```

Storybook runs at `http://localhost:6006`. To produce a static Storybook build, run `npm run build-storybook`.

## A useful way to review the project

Open a few stories and compare how component options are represented. Then trace a component from its story to its implementation and shared styles. This gives a quick view of how the project connects component API design, visual consistency, and multi-framework reuse.