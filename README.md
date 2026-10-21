# Core UI Library

**🔗 [View the live Storybook →](https://storybook-components-library.netlify.app/)**

A framework-agnostic component library: each component is implemented once in CSS and TypeScript, then exposed as **React**, **Vue**, and **Twig** — mirroring the multi-framework, CMS-integrated design systems I build professionally (Storybook + Twig in TYPO3 environments).

> **Status: work in progress.** Currently 2 components (Button, Input), each available in all three frameworks. See the [Roadmap](#-roadmap) for what's coming next.

## Why this project exists

At work I built and maintained enterprise design systems (Storybook, Twig, TYPO3, WCAG 2.1 AA). This library is my personal take on that architecture — small enough to read in one sitting, but covering the real problems of a design system:

- **One source of truth:** a CSS-first design-token layer (`global.css`, `themes.css`) drives every component — no duplicated styling logic between frameworks
- **Write once, use everywhere:** a single `.css` + `.types.ts` pair per component, wrapped by thin React/Vue/Twig adapters
- **Accessibility first:** components are built for keyboard navigation, visible focus states, and ARIA semantics (WCAG 2.1 AA target)
- **Documented by default:** every component ships with interactive Storybook stories and controls

## Current components


| Component | React | Vue | Twig | Stories |
| --------- | :-----: | :---: | :----: | :-------: |
| Button    | ✅     | ✅   | ✅    | ✅       |
| Input     | ✅     | ✅   | ✅    | ✅       |


## Architecture

```
┌─────────────────────────────────────────────┐
│           CSS Design System                 │
│  (global.css + themes.css = Source of Truth) │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│          Component Styles (CSS)             │
│      Button.css, Input.css, Card.css…      │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────┐  ┌─────────────┐  ┌───────────┐
│   React     │  │    Vue      │  │   Twig    │
│ Components  │  │ Components  │  │ Templates │
└─────────────┘  └─────────────┘  └───────────┘
```

To add a component, you write the CSS and the TypeScript types once — then thin adapters make it usable from React, Vue, and Twig. The [Adding New Components](#adding-new-components) section shows the full walkthrough using a Card as the example.

## Tech Stack

- **Vite** — build tool and dev server
- **Storybook** — component development and documentation
- **TypeScript** — shared type definitions for props and args
- **React / Vue / Twig** — framework implementations
- **Vitest** — test runner (configured, tests being added)

## Development

Requires Node.js v18+.

```bash
npm install        # install dependencies
npm run storybook  # component development on port 6006
npm run dev        # Vite dev server
npm run build      # build the library
npm run build-storybook  # static Storybook build (as deployed on Netlify)
```

## Project Structure

```
src/
├── design/
│   ├── global.css           # CSS custom properties + utility classes
│   └── themes.css           # Dark/light mode theme definitions
├── components/              # Framework-agnostic core: CSS + types
│   ├── Button/  (Button.css, Button.types.ts)
│   └── Input/   (Input.css, Input.types.ts)
├── react/                  # React adapters + exports
├── vue/                    # Vue adapters + exports
├── twig/                   # Twig templates + exports
├── stories/components/     # Storybook stories (controls/, forms/)
└── index.ts                # Library entry point (imports global.css)
```

## Adding New Components

### 1. Create the component files

```bash
mkdir -p src/components/Card
touch src/components/Card/Card.types.ts src/components/Card/Card.css
```

### 2. Define TypeScript types

```typescript
// src/components/Card/Card.types.ts
export type CardSize = 'small' | 'medium' | 'large';
export type CardVariant = 'default' | 'bordered' | 'elevated';

export interface CardProps {
  size?: CardSize;
  variant?: CardVariant;
  children?: string;
  className?: string;
}
```

### 3. Create the component styles

```css
/* src/components/Card/Card.css */
.card {
  background-color: var(--color-background);
  border-radius: var(--border-radius-md);
  box-sizing: border-box;
}

.card--small  { padding: var(--spacing-sm); }
.card--medium { padding: var(--spacing-md); }
.card--large  { padding: var(--spacing-lg); }

.card--bordered { border: 1px solid var(--color-border); }
.card--elevated {
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border-light);
}
```

### 4. Implement for each framework

#### React

```tsx
// src/react/Card/Card.tsx
import '../../components/Card/Card.css';
import type { CardProps } from '../../components/Card/Card.types';

export function Card({ size = 'medium', variant = 'default', children, className = '' }: CardProps) {
  return (
    <div className={`card card--${size} card--${variant} ${className}`}>
      {children}
    </div>
  );
}
```

```typescript
// src/react/Card/index.ts
export { Card } from './Card';
```

#### Vue

```vue
<!-- src/vue/Card/Card.vue -->
<template>
  <div :class="['card', `card--${size}`, `card--${variant}`, className]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { CardSize, CardVariant } from '../../components/Card/Card.types';

export default defineComponent({
  name: 'Card',
  props: {
    size: { type: String as PropType<CardSize>, default: 'medium' },
    variant: { type: String as PropType<CardVariant>, default: 'default' },
    className: { type: String, default: '' },
  },
});
</script>

<style src="../../components/Card/Card.css"></style>
```

#### Twig

```twig
{# src/twig/Card/Card.twig #}
<div class="card card--{{ size|default('medium') }} card--{{ variant|default('default') }} {{ className|default('') }}">
  {{ content|raw }}
</div>
```

```typescript
// src/twig/Card/index.ts
import cardTemplate from './Card.twig';
import type { CardArgs } from '../../components/Card/Card.types';

function Card(args: CardArgs): string {
  return cardTemplate(args);
}

export default Card;
export { cardTemplate };
export type { CardArgs } from '../../components/Card/Card.types';
```

### 5. Export from the framework entry points

```typescript
// src/react/index.ts
export { Card } from './Card';

// src/vue/index.ts
export { default as Card } from './Card.vue';

// src/twig/index.ts
export { Card, cardTemplate } from './Card';
```

### 6. Create Storybook stories

```typescript
// src/stories/components/surfaces/Card.stories.ts
import type { Meta, StoryObj } from '@storybook/html';
import { cardTemplate } from '../../../twig/Card';
import '../../../components/Card/Card.css';

export interface CardArgs {
  content?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'bordered' | 'elevated';
}

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (args) => cardTemplate(args),
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
  },
  args: {
    content: 'Card content goes here',
    size: 'medium',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = { args: { content: 'Default Card' } };
export const Bordered: Story = { args: { variant: 'bordered', content: 'Bordered Card' } };
export const Elevated: Story = { args: { variant: 'elevated', content: 'Elevated Card' } };
```

## Roadmap

- [x] **Phase 1 — Foundation:** Button, Input (live in Storybook)
- [ ] **Phase 2 — Forms:** Label, Select, Checkbox, Radio, Textarea, Form
- [ ] **Phase 3 — Surfaces &amp; feedback:** Card, Modal, Tooltip, Alert, Badge, Loader
- [ ] **Phase 4 — Integration:** use the library in my own projects (starting with my portfolio site)

## Author

**Silvia Cremascoli** — Frontend Developer, Graz 🇦🇹
[silviacremascoli.com](https://www.silviacremascoli.com) · [GitHub](https://github.com/silviacremascoli) · [LinkedIn](https://www.linkedin.com/in/silvia-cremascoli)