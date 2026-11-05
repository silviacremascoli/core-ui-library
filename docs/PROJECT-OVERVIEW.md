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

Currently, only **Button** and **Input** are live in the catalog and repository (the rest of the components are in local development and have not been committed to Git yet). More components — including Typography, Card, Container, Label, Select, Checkbox, Radio, Textarea, Modal, and Icon — are actively on the way.

The Storybook configuration uses `@storybook/html-vite` with a Twig Vite plugin. React and Vue implementations are part of the library as well, alongside the shared styles and Twig templates.

## Tonal Theming & Production Reusability

Rather than locking styles to individual application names, Core UI Library uses generic tonal themes in `src/design/themes.css`:
- **Sage (`.cui-theme--sage`)**: Soft sage green (`#b6cdbd`), dark purple typography (`#272142`), muted green borders (`#5c715e`), and 24px pill radii.
- **Amber (`.cui-theme--amber`)**: Warm amber (`#DB9558`), coral interactive states (`#F2765E`), destructive crimson (`#A82020`), and active teal glow focus rings (`#2A6B5C`).
- **Ocean (`.cui-theme--ocean`)**: Muted slate blue (`#56899d`), terracotta interaction accents (`#ba7154`), and dual focus rings.
- **Midnight (`.cui-theme--midnight`)**: Midnight navy background (`#24263b`), deep slate (`#1f2235`), vibrant electric coral accent (`#ff4a57`), white typography (`#fefefe`), 12px container radius, and glowing coral focus ring (`0 0 0 3px rgba(255, 74, 87, 0.35)`).

Both **Button** and **Input** components support shapes (`default`, `pill`), variants, accessibility focus rings, and integrated adornments across React, Vue, and Twig without vendor lock-in.

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