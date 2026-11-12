# Core UI Library

**🔗 [View the live Storybook →](https://storybook-components-library.netlify.app/)**

A framework-agnostic component library: each component is implemented once in CSS and TypeScript, then exposed as **React**, **Vue**, and **Twig** — mirroring the multi-framework, CMS-integrated design systems I build professionally (Storybook + Twig in TYPO3 environments).

> **Status: work in progress.** **Button**, **Input**, **Label**, and **Typography** are live in the library across React, Vue, and Twig. The remaining components are in local development. See the [Roadmap](#roadmap) for what's coming next.

## Why this project exists

At work I built and maintained enterprise design systems (Storybook, Twig, TYPO3, WCAG 2.1 AA). This library is my personal take on that architecture — small enough to read in one sitting, but covering the real problems of a design system:

- **One source of truth:** a CSS-first design-token layer (`global.css`, `themes.css`) drives every component — no duplicated styling logic between frameworks
- **Tonal theming:** an intentional default palette plus four reusable, app-agnostic themes (`.cui-theme--default`, `.cui-theme--sage`, `.cui-theme--amber`, `.cui-theme--ocean`, `.cui-theme--midnight`)
- **Write once, use everywhere:** a single `.css` + `.types.ts` pair per component, wrapped by thin React/Vue/Twig adapters
- **Accessibility first:** components are built for keyboard navigation, visible focus states, and ARIA semantics (WCAG 2.1 AA target)
- **Documented by default:** every component ships with interactive Storybook stories and controls

## Current components

Currently, **Button**, **Input**, **Label**, and **Typography** are live across all three framework adapters and have Storybook stories:

| Component | React | Vue | Twig | Stories | Status | Highlights |
| --------- | :-----: | :---: | :----: | :-------: | :------: | :--------- |
| **Button** | ✅ | ✅ | ✅ | ✅ | **Live** | Pill & default shapes, outline & ghost variants, left/right/icon-only icons, active press effect, theme focus rings |
| **Input**  | ✅ | ✅ | ✅ | ✅ | **Live** | Pill & default shapes, clearable search with embedded clear button, left/right icons, error/success validation, theme focus glow |
| **Label**  | ✅ | ✅ | ✅ | ✅ | **Live** | Associated form labels, size/weight/color options, required and disabled states, visually hidden accessibility mode |
| **Typography** | ✅ | ✅ | ✅ | ✅ | **Live** | Semantic headings and paragraphs, independent visual variants, text styles and truncation |

*Note: The other components shown in the roadmap below are currently in local development and have not been committed to Git yet. They are rolling out in upcoming releases.*

## Architecture

```
┌─────────────────────────────────────────────┐
│           CSS Design System                 │
│  (global.css + themes.css = Source of Truth) │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│          Component Styles (CSS)             │
│   Button.css, Input.css, Typography.css…   │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────┐  ┌─────────────┐  ┌───────────┐
│   React     │  │    Vue      │  │   Twig    │
│ Components  │  │ Components  │  │ Templates │
└─────────────┘  └─────────────┘  └───────────┘
```

To add a component, you write the CSS and the TypeScript types once — then thin adapters make it usable from React, Vue, and Twig. The [Adding New Components](#adding-new-components) section provides an implementation example.

As new components are added to the library, I will implement each one in its corresponding React, Vue, and Twig projects.

## Why Three Adapters?

Each adapter exists for a specific consumer — the adapter matches the consumer, never the other way around:

- **Twig** — the canonical template implementation. Twig is how these components render in the CMS-integrated design systems I build professionally (Storybook + Twig in TYPO3 v13). In this library, the Twig template is the framework-neutral reference: Storybook renders it using Twig.js in the browser, while TYPO3 renders Twig templates server-side. The React and Vue adapters follow the same component contract.

- **Vue** — for componentized sites. My portfolio website based on Astro.js uses these components.

- **React** — for React applications. To be used by my React projects (weather app, dictionary app).

The point of the architecture: one visual and behavioral contract, consumed wherever each project needs it.

## Tech Stack

- **Vite** — build tool and dev server
- **Storybook** — component development and documentation
- **TypeScript** — shared type definitions for props and args
- **React / Vue / Twig** — framework implementations
- **Vitest** — test runner (configured, tests being added)

## Development

Requires Node.js 20.19 or later in the 20.x series, or 22.12 or later.

```bash
npm install        # install dependencies
npm run storybook  # component development on port 6006
npm run dev        # Vite dev server
npm run build      # build the library
npm run build-storybook  # static Storybook build (as deployed on Netlify)
```

Use the Storybook toolbar's Theme selector to preview components in each theme.

## Using the Library

The package can be installed from GitHub. Pin a release tag or commit for reproducible installs; the GitHub dependency runs the package's `prepare` script and builds `dist`.

```json
{
  "dependencies": {
    "core-ui-library": "github:silviacremascoli/core-ui-library#<tag-or-commit>"
  }
}
```

Use `core-ui-library/vue` for Vue components, `core-ui-library/react` for React components and `core-ui-library/twig` for Twig templates. The React adapter currently requires React and React DOM 19; the Vue adapter requires Vue 3.

Import the adapter for your framework and the shared stylesheet once in your app entry point. The stylesheet export includes component styles, design tokens, and theme presets.

The build includes TypeScript declarations for the root and framework entry points, as well as the stylesheet import.

```tsx
import { Button, Input, Label, Typography } from "core-ui-library/react";
import "core-ui-library/styles";

export function ContactForm() {
  return (
    <div className="cui-theme--default">
      <Typography variant="h1">Contact us</Typography>
      <Typography>Send us a message.</Typography>
      <Button variant="primary" shape="rounded">Send message</Button>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" shape="pill" />
    </div>
  );
}
```

### Themes

Available themes are `.cui-theme--default`, `.cui-theme--sage`, `.cui-theme--amber`, `.cui-theme--ocean`, and `.cui-theme--midnight`. Components inherit `.cui-theme--default` from the root palette; add a theme wrapper to select a different palette or scope a nested theme.

For Ocean's mode-specific Input focus ring, set `data-cui-mode="light"` or `data-cui-mode="dark"` on the `.cui-theme--ocean` wrapper. A dedicated story clearly shows these focus styles.

### Buttons

Button shapes have consistent radii across themes: `default` is 8px, `rounded` is 10px, and `pill` is fully rounded.

Button padding depends on size, not shape. Icon-only buttons use equal padding on all sides.

### Typography

Twig accepts plain text through `content` and escapes it as HTML. Twig also accepts `id`, `lang`, `dir`, `ariaLabel`, and `ariaDescribedby`; React and Vue pass standard HTML and ARIA attributes to the element.

Heading variants `h1` through `h6` render matching headings, `body1`, `body2`, `subtitle1`, and `subtitle2` render paragraphs, and `caption` and `overline` render spans. Use `tag` to choose a different semantic element without changing the visual `variant`, for example `<Typography variant="h1" tag="h2">Section</Typography>`. Choose heading levels according to the surrounding document, and use an inline tag when nesting text inside a paragraph. Available tags are `h1`-`h6`, `p`, `span`, `div`, `blockquote`, `small`, `strong`, and `em`.

Use `align`, `weight`, and `color` for text styling, and `noWrap` or `truncate` when needed. Truncation requires a constrained width and keeps the full text in the DOM, but hides overflow visually; avoid it when users need to read the entire text without another way to reveal it. Check color contrast against the actual background, especially for `inverse` and custom themes; color alone should not convey meaning.

#### Font family

Poppins is the default `--cui-font-family` for library components across all themes. The shared stylesheet loads weights 400, 500, 600, and 700 from Google Fonts, with system fonts as fallbacks if the request is blocked or unavailable. Projects can override the token themselves. The library does not globally restyle host-page paragraphs: to use the same font for ordinary page text, apply `font-family: var(--cui-font-family)` to the application's body or container after importing the stylesheet.

### Font Awesome Icons

Components can use a curated Font Awesome registry defined in [`src/components/Icon/Icon.registry.ts`](src/components/Icon/Icon.registry.ts). Pass the registered name without the `fa-` prefix. For example, `iconLeft="plus"` renders the solid plus icon, while `iconLeft="github"` renders the GitHub brand icon.

```tsx
<Button iconLeft="plus">Add item</Button>
<Button href="https://example.com/profile" iconLeft="github" iconOnly ariaLabel="Visit GitHub profile" />
```

The registry currently includes these names:

- **Solid:** `certificate`, `chevron-down`, `code`, `code-branch`, `cubes-stacked`, `envelope`, `file`, `gear`, `keyboard`, `laptop-code`, `leaf`, `link`, `pencil`, `phone`, `plus`, `rocket`, `terminal`, `trash-can`, `truck-field`, `wifi`, `xmark`
- **Regular:** `envelope-regular`, `hand-point-up`
- **Brands:** `aws`, `bootstrap`, `confluence`, `css3-alt`, `figma`, `github`, `gitlab`, `google`, `html5`, `jira`, `linkedin`, `react`, `sass`, `square-js`, `storybook`, `typescript`, `typo3`, `vuejs`, `windows`, `youtube`

To register another icon, import its definition from the matching installed Font Awesome package and add a name-to-definition entry to `fontAwesomeIcons` in `Icon.registry.ts`. For example, import `faCircleUser` from `@fortawesome/free-solid-svg-icons` and add `'circle-user': faCircleUser`. Add the new name to this list and add or update a Storybook example. The `FontAwesomeIconName` type is inferred from the registry, so it updates automatically.

Only icons in this registry resolve by name. Button also supports plain text icons and trusted custom SVG markup; React and Vue consumers may pass their own icon nodes. Raw SVG markup is not sanitized, so never pass untrusted input. In the Twig Button adapter, use `iconLeftTrustedHtml` or `iconRightTrustedHtml` for trusted markup; `iconLeft` and `iconRight` accept registry names or plain text and escape unrecognized markup. For icon-only buttons or links, provide an accessible `ariaLabel` describing the action or destination.

Twig Button accepts `className` and an `attributes` map for `id`, `title`, `target`, `rel`, `download`, `name`, `value`, `form`, `lang`, `dir`, `role`, `tabindex`, and `aria-*` or `data-*` attributes. Attribute values must be strings or numbers. Component-controlled attributes such as `href`, `type`, and disabled states cannot be overridden through this map. Supply only trusted, validated URLs for `href`.

## Project Structure

```
src/
├── design/
│   ├── global.css           # CSS custom properties + utility classes
│   └── themes.css           # Default and named theme definitions
├── components/              # Framework-agnostic core: CSS + types
│   ├── Button/  (Button.css, Button.types.ts)
│   ├── Input/   (Input.css, Input.types.ts)
│   ├── Label/   (Label.css, Label.types.ts)
│   └── Typography/ (Typography.css, Typography.types.ts)
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

export interface CardArgs {
  size?: CardSize;
  variant?: CardVariant;
  content?: string;
  className?: string;
}
```

### 3. Create the component styles

```css
/* src/components/Card/Card.css */
.card {
  background-color: var(--cui-color-background);
  border-radius: var(--cui-border-radius-md);
  box-sizing: border-box;
}

.card--small  { padding: var(--cui-spacing-sm); }
.card--medium { padding: var(--cui-spacing-md); }
.card--large  { padding: var(--cui-spacing-lg); }

.card--bordered { border: 1px solid var(--cui-color-border); }
.card--elevated {
  box-shadow: var(--cui-shadow-md);
  border: 1px solid var(--cui-color-border-light);
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
<div class="card card--{{ size|default('medium')|escape('html') }} card--{{ variant|default('default')|escape('html') }} {{ className|default('')|escape('html') }}">
  {{ content|default('')|escape('html') }}
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
export { default as Card } from './Card/Card.vue';

// src/twig/index.ts
export { default as Card, cardTemplate } from './Card';
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

- [ ] **Phase 1 — Foundation:** Button (✅ live), Input (✅ live), Label (✅ live), Typography (✅ live)
- [ ] **Phase 2 — Forms:** Select, Checkbox, Radio, Textarea, Form (in development)
- [ ] **Phase 3 — Media:** Image, Icon, Video (in development)
- [ ] **Phase 4 — Surfaces:** Container, Card, Modal, Loader (in development)

- **Ongoing — Integration:** use and expand the library in my own projects (starting with my portfolio site)

## Author

**Silvia Cremascoli** — Frontend Developer, Graz 🇦🇹
[silviacremascoli.com](https://www.silviacremascoli.com) · [GitHub](https://github.com/silviacremascoli) · [LinkedIn](https://www.linkedin.com/in/silvia-cremascoli)