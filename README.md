# Core UI Library

**🔗 [View the live Storybook →](https://storybook-components-library.netlify.app/)**

A framework-agnostic component library: each component is implemented once in CSS and TypeScript, then exposed as **React**, **Vue**, and **Twig** — mirroring the multi-framework, CMS-integrated design systems I build professionally (Storybook + Twig in TYPO3 environments).

> **Status: work in progress.** **Button**, **Input**, **Label**, **Typography**, **Icon**, **Container**, and **Grid** are live in the library across React, Vue, and Twig. The remaining components are in local development. See the [Roadmap](#roadmap) for what's coming next.

## Why this project exists

At work I built and maintained enterprise design systems (Storybook, Twig, TYPO3, WCAG 2.1 AA). This library is my personal take on that architecture — small enough to read in one sitting, but covering the real problems of a design system:

- **One source of truth:** a CSS-first design-token layer (`global.css`, `themes.css`) drives every component — no duplicated styling logic between frameworks
- **Fluid, container-aware layout:** the Container and Grid primitives scale smoothly with the viewport (fluid widths and gutters, no stepped breakpoints) and support CSS container queries, so nested layouts respond to their own container, not just the screen
- **Tonal theming:** an intentional default palette plus four reusable, app-agnostic themes (`.cui-theme--default`, `.cui-theme--sage`, `.cui-theme--amber`, `.cui-theme--ocean`, `.cui-theme--midnight`)
- **Write once, use everywhere:** a single `.css` + `.types.ts` pair per component, wrapped by thin React/Vue/Twig adapters
- **Accessibility first:** components are built for keyboard navigation, visible focus states, and ARIA semantics (WCAG 2.1 AA target)
- **Documented by default:** every component ships with interactive Storybook stories, controls, and **comprehensive usage documentation** for each variant

## Current components

Currently, **Button**, **Input**, **Label**, **Typography**, **Icon**, **Container**, and **Grid** are live across all three framework adapters and have **fully documented Storybook stories** with usage guidance and best practices.

| Component | React | Vue | Twig | Stories | Status | Highlights |
| --------- | :-----: | :---: | :----: | :-------: | :------: | :--------- |
| **Button** | ✅ | ✅ | ✅ | ✅ | **Live** | Pill & default shapes, outline & ghost variants, left/right/icon-only icons, active press effect, theme focus rings, loading & disabled states |
| **Input**  | ✅ | ✅ | ✅ | ✅ | **Live** | Pill & default shapes, clearable search with embedded clear button, left/right icons, error/success validation, theme focus glow, all input types |
| **Label**  | ✅ | ✅ | ✅ | ✅ | **Live** | Associated form labels, size/weight/color options, required and disabled states, visually hidden accessibility mode |
| **Typography** | ✅ | ✅ | ✅ | ✅ | **Live** | Display sizes (display1/display2), semantic headings (h1-h6), body text variants, subtitles, captions, text alignment, weights, colors, truncation, custom fonts |
| **Icon** | ✅ | ✅ | ✅ | ✅ | **Live** | 2,100+ Font Awesome Free icons (solid, regular, brands), all sizes (xs-2xl), all colors, link support, accessibility features. Regular icons use `-regular` suffix (e.g., `envelope-regular`) |
| **Container** | ✅ | ✅ | ✅ | ✅ | **Live** | Fluid max-width caps from tokens (`--cui-container-small/medium/large/full`), `align`, `fluid`, `noPadding`, opt-in container queries (`queryable`), `as` tag override, `--cui-container-max-width` per-instance escape hatch |
| **Grid** (`Row` + `Col`) | ✅ | ✅ | ✅ | ✅ | **Live** | CSS-Grid rows with native gap gutters (`--cui-grid-columns` adjustable), 12-col spans at sm–xxl, offsets, order, row-cols, `auto` auto-fit mode, `alignItems`/`justifyContent`, container-aware `hide`/`hideBelow`/`showBelow` on Col |

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
import { Button, Icon, Input, Label, Typography } from "core-ui-library/react";
import "core-ui-library/styles";

export function ContactForm() {
  return (
    <div className="cui-theme--default">
      <Typography variant="h1">Contact us</Typography>
      <Typography>Send us a message.</Typography>
      <Button variant="primary" shape="rounded">
        <Icon icon="plus" ariaLabel="Add" /> Send message
      </Button>
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

- Display variants `display1` and `display2` render as `h1`; heading variants `h1` through `h6` render matching semantic headings, while `subtitle1`, `subtitle2`, `body1`, `body2` render paragraphs, and `caption` and `overline` render spans. Display and heading variants use the theme heading font (`--cui-font-family-heading`).
- `tag` and `variant` default to each other: setting a heading `tag` (`h1`-`h6`) without a `variant` applies that heading's variant, so a `tag="h2"`-only usage renders an `h2` with `h2` styling. When neither is set, the variant is `body1` rendered as a `p`.
- Use `tag` to choose a different semantic element without changing the visual `variant`, for example `<Typography variant="h1" tag="h2">Section</Typography>`.
- Choose heading levels according to the document structure, and use an inline tag when nesting text inside a paragraph. Available tags are `h1`-`h6`, `p`, `span`, `div`, `blockquote`, `small`, `strong`, and `em`.
- Use `align` for text alignment, `weight` for font weight, and `color` for theme-based text colors.
- Use `noWrap` to prevent line breaks or `truncate` to display an ellipsis for overflow text. Truncation requires a constrained width and keeps the full text in the DOM, but hides overflow visually; avoid it when users need to read the entire text without another way to reveal it.
- Check color contrast against the actual background, especially for `inverse` and custom themes; color alone should not convey meaning.

**Custom Fonts:** Use `fontFamily` to select between the theme's text and heading font families, or choose "Custom" to provide your own CSS `font-family` stack via `customFontFamily`.

#### Font family

Poppins is the default `--cui-font-family` for library components across all themes. The shared stylesheet loads weights 400, 500, 600, and 700 from Google Fonts, with system fonts as fallbacks if the request is blocked or unavailable. Projects can override the token themselves. The library does not globally restyle host-page paragraphs: to use the same font for ordinary page text, apply `font-family: var(--cui-font-family)` to the application's body or container after importing the stylesheet.

### Icons

The Icon component renders icons from the Font Awesome registry with full theming support. The library now includes **all FontAwesome Free icons** (~2,100+ icons across solid, regular, and brand styles).

```tsx
<Icon icon="github" size="lg" color="primary" ariaLabel="GitHub" />
<Icon icon="envelope-regular" size="md" ariaLabel="Message" />
<Icon icon="plus" asLink href="/add" ariaLabel="Add item" />
```

**Accessibility:** The Icon component includes `ariaLabel` for screen readers, `ariaHidden` for decorative icons, and automatically adds `role="img"` for icon-only links. Font Awesome icons include `aria-hidden="true"` and `focusable="false"` attributes.

**Security:** ⚠️ Icon names are validated against the registry. Only registered Font Awesome icon names are accepted.

### Font Awesome Icons

Components can use any icon from the **complete FontAwesome Free** catalog defined in [`src/components/Icon/Icon.registry.ts`](src/components/Icon/Icon.registry.ts). Pass the registered name without the `fa-` prefix. For example, `icon="plus"` renders the solid plus icon, `icon="github"` renders the GitHub brand icon, and `icon="heart-regular"` renders the outline heart icon.

```tsx
<Button iconLeft="plus">Add item</Button>
<Button href="https://example.com/profile" iconLeft="github" iconOnly ariaLabel="Visit GitHub profile" />
<Button iconLeft="heart-regular" variant="ghost">Like</Button>
```

**Icon Styles:**
- **Solid icons:** Default style, no suffix (e.g., `plus`, `check`, `xmark`)
- **Regular icons:** Outline style with `-regular` suffix (e.g., `heart-regular`, `envelope-regular`, `user-regular`)
- **Brand icons:** Unique brand logos (e.g., `github`, `twitter`, `facebook`)

The registry automatically imports all icons from `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-regular-svg-icons`, and `@fortawesome/free-brands-svg-icons`. Regular icons are given the `-regular` suffix to avoid naming conflicts with solid variants. The `FontAwesomeIconName` type is inferred from the registry, so it always stays in sync.

Only registered icon names resolve in the Icon component and Storybook controls. For icon-only buttons or links, always provide an accessible `ariaLabel` describing the action or destination.

Twig Button accepts `className` and an `attributes` map for `id`, `title`, `target`, `rel`, `download`, `name`, `value`, `form`, `lang`, `dir`, `role`, `tabindex`, and `aria-*` or `data-*` attributes. Attribute values must be strings or numbers. Component-controlled attributes such as `href`, `type`, and disabled states cannot be overridden through this map. Supply only trusted, validated URLs for `href`.

### Container & Grid (layout)

The layout primitives are **fluid by default**: the container scales smoothly with the viewport up to a max-width cap, and gutters are fluid (`--cui-grid-gutter-x: clamp(1rem, 2.5vw, 1.5rem)`) — widths never jump at breakpoints.

```tsx
import { Container, Row, Col } from "core-ui-library/react";
import "core-ui-library/styles";

<Container size="full" queryable>
  <Row alignItems="center">
    <Col lg={6}>…</Col>
    <Col lg={6} hideBelow="lg">…</Col>
  </Row>
</Container>
```

**Container** props: `size` (`small`/`medium`/`large`/`full`, caps from the `--cui-container-*` tokens), `align` (`left`/`center`/`right`), `fluid`, `noPadding`, `queryable`, `as`, `className`.

- Width is `min(100%, cap)`: fully fluid below the cap, capped above it. Override a single instance with `style="--cui-container-max-width: 720px"`.

**Row** props: `cols`–`colsXxl` (N equal columns per row), `g`/`gx`/`gy` + per-breakpoint variants (gutter levels 0–5), `alignItems`, `justifyContent`, `auto` (auto-fit `minmax(var(--cui-row-min-col, 16rem), 1fr)` — responsive with no breakpoints at all), `as`, `className`. Rows are CSS Grid: `grid-template-columns: repeat(var(--cui-grid-columns, 12), minmax(0, 1fr))` with native `gap` gutters — no negative-margin hacks.

**Col** props: `span` plus `sm`/`md`/`lg`/`xl`/`xxl` (1–12 or `'auto'`), `offset*`, `order*`, `hide`, `hideBelow`, `showBelow`, `as`, `className`. A plain `<Col>` is full-width (mobile-first stacking); use spans or `cols` on the row for side-by-side columns.

**Container queries:** pass `queryable` to `Container` to make it a query container (`container-type: inline-size; container-name: cui`). Every responsive grid class is emitted both as a viewport `@media` rule and as a `@container cui` rule; inside a queryable container the `@container` rules win, so columns follow the container's own width. Shared breakpoints: sm 576px, md 768px, lg 992px, xl 1200px, xxl 1400px.

**Utility classes** (in `utilities.css`): per-breakpoint display helpers (`cui-block-lg`, `cui-hidden-lg`, …) and per-breakpoint text alignment (`cui-text-left-lg`, `cui-text-center-md`, … — min-width media queries ordered sm → xxl, so the highest matching breakpoint wins), plus `cui-img-fluid`, `cui-text-muted`, and a clamp-based fluid type scale (`cui-text-fluid-lg`/`xl`/`2xl`/`3xl` via `--cui-font-size-fluid-*`). Combine a base class with a breakpoint variant to switch at a breakpoint, e.g. `class="cui-text-center cui-text-left-lg"` centers below lg and left-aligns from lg up.

## Project Structure

```
src/
├── design/
│   ├── global.css           # CSS custom properties + utility classes
│   └── themes.css           # Default and named theme definitions
├── components/              # Framework-agnostic core: CSS + types
│   ├── Button/  (Button.css, Button.types.ts)
│   ├── Container/ (Container.css, Container.types.ts)
│   ├── Grid/    (Grid.css, Grid.types.ts)
│   ├── Icon/    (Icon.css, Icon.types.ts, Icon.registry.ts)
│   ├── Input/   (Input.css, Input.types.ts)
│   ├── Label/   (Label.css, Label.types.ts)
│   └── Typography/ (Typography.css, Typography.types.ts)
├── react/                  # React adapters + exports
├── vue/                    # Vue adapters + exports
├── twig/                   # Twig templates + exports
├── stories/components/     # Storybook stories (controls/, display/, forms/, layout/)
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

- [x] **Phase 1 — Foundation ✅ Complete:** Button, Input, Label, Typography, Icon
- [x] **Phase 2 — Layout ✅ Complete:** Container, Grid (Row + Col)
- [ ] **Phase 3 — Forms 🚧 In progress:** Select, Textarea, Form, Checkbox, Radio
- [ ] **Phase 4 — Media:** Image, Video
- [ ] **Phase 5 — Surfaces:** Card, Modal, Loader
- [ ] **Phase 6 — Feedback:** Alert, Toast, Progress

- **Ongoing — Integration:** use and expand the library in my own projects (starting with my portfolio site)

Release history: see [CHANGELOG.md](CHANGELOG.md).

## Author

**Silvia Cremascoli** — Frontend Developer, Graz 🇦🇹
[silviacremascoli.com](https://www.silviacremascoli.com) · [GitHub](https://github.com/silviacremascoli) · [LinkedIn](https://www.linkedin.com/in/silvia-cremascoli)