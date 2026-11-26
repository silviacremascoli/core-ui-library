# Core UI Library - Project Overview

## 📋 Summary

Core UI Library is a framework-agnostic component library built on a CSS-first design system architecture. Each component is implemented once in CSS and TypeScript, then exposed across **React**, **Vue**, and **Twig** frameworks.

**Status:** Actively maintained with 7 live components (Button, Input, Label, Typography, Icon, Container, Grid) and comprehensive documentation.

---

## 🎯 Project Goals

- **Single Source of Truth:** CSS design tokens drive all components
- **Multi-Framework:** React, Vue, and Twig implementations from shared code
- **Theming:** Tonal theming system with 5 built-in themes
- **Accessibility:** WCAG 2.1 AA compliance
- **Documentation:** Every component variant has usage guidance

---

## 📦 Current State

### ✅ Live Components

| Component | Status | Stories | Documentation |
|-----------|--------|---------|---------------|
| **Button** | ✅ Live | 14 stories | ✅ Complete |
| **Input** | ✅ Live | 9 stories | ✅ Complete |
| **Label** | ✅ Live | 9 stories | ✅ Complete |
| **Typography** | ✅ Live | 15 stories | ✅ Complete |
| **Icon** | ✅ Live | 9 stories | ✅ Complete |
| **Container** | ✅ Live | 9 stories | ✅ Complete |
| **Grid** (Row + Col) | ✅ Live | 5 stories | ✅ Complete |

**Total: 69 documented story variants**

### 🚧 In Development

- **Forms:** Select, Textarea, Form, Checkbox, Radio
- **Media:** Image, Video
- **Surfaces:** Card, Modal, Loader
- **Feedback:** Alert, Toast, Progress

---

## 🎨 Design System

### Themes

| Theme | Description | Focus Color |
|-------|-------------|-------------|
| `default` | Neutral palette, suitable for any project | Primary blue |
| `sage` | Green-based, organic feel | Terracotta (light) / Ocean-blue (dark) |
| `amber` | Warm, earthy tones | Amber |
| `ocean` | Cool, professional | Ocean-blue |
| `midnight` | Dark mode optimized | Purple |

### Design Tokens

All visual properties are defined as CSS custom properties in `global.css` and `themes.css`:

- **Colors:** `--cui-color-primary`, `--cui-color-danger`, `--cui-color-text`, etc.
- **Spacing:** `--cui-spacing-xs`, `--cui-spacing-sm`, `--cui-spacing-md`, etc.
- **Typography:** `--cui-font-family`, `--cui-font-size-base`, `--cui-line-height-normal`, etc.
- **Border Radius:** `--cui-border-radius-md`, `--cui-border-radius-full`, etc.
- **Shadows:** `--cui-shadow-sm`, `--cui-shadow-md`, etc.
- **Transitions:** `--cui-transition-normal`, etc.
- **Grid:** `--cui-grid-gutter-x` (fluid: `clamp(1rem, 2.5vw, 1.5rem)`), `--cui-grid-gutter-y`, `--cui-grid-columns` (default 12)
- **Container caps:** `--cui-container-small/medium/large/full` (36/48/62/80rem); per-instance override via `--cui-container-max-width`
- **Fluid type scale:** `--cui-font-size-fluid-lg/xl/2xl/3xl` (clamp-based)

### Layout system highlights

- **Fluid, not stepped:** container width is `min(100%, cap)` and gutters are clamp-based — no breakpoint jumps in widths
- **CSS Grid rows** with native `gap` gutters (no negative-margin compensation)
- **Container queries:** `queryable` containers (`container-name: cui`) make every responsive grid class respond to the container's own width via `@container` rules (emitted alongside the viewport `@media` rules; breakpoints sm 576 / md 768 / lg 992 / xl 1200 / xxl 1400 px)
- **Utility classes:** per-breakpoint display (`cui-block-lg`, `cui-hidden-lg`, …), `cui-img-fluid`, `cui-text-muted`, `cui-text-fluid-*`

---

## 📁 Architecture

```
src/
├── design/
│   ├── global.css           # CSS custom properties + utility classes
│   └── themes.css           # Theme definitions
├── components/              # Framework-agnostic core
│   ├── Button/              # Button.css + Button.types.ts
│   ├── Container/           # Container.css + Container.types.ts
│   ├── Grid/                # Grid.css + Grid.types.ts (Row + Col)
│   ├── Icon/                # Icon.css + Icon.types.ts + Icon.registry.ts
│   ├── Input/               # Input.css + Input.types.ts
│   ├── Label/               # Label.css + Label.types.ts
│   └── Typography/          # Typography.css + Typography.types.ts
├── react/                  # React adapters
│   ├── Button/
│   ├── Container/
│   ├── Grid/
│   ├── Icon/
│   ├── Input/
│   ├── Label/
│   └── index.ts
├── vue/                    # Vue adapters
│   ├── Button/
│   ├── Container/
│   ├── Grid/
│   ├── Icon/
│   ├── Input/
│   ├── Label/
│   └── index.ts
├── twig/                   # Twig templates
│   ├── Button/
│   ├── Container/
│   ├── Grid/
│   ├── Icon/
│   ├── Input/
│   ├── Label/
│   └── index.ts
└── stories/components/     # Storybook stories
    ├── controls/
    ├── display/
    ├── forms/
    └── layout/
```

---

## 🎭 Component Details

### Icon Component

**Status:** ✅ Live with 2,100+ icons

- **Icon Registry:** All FontAwesome Free icons automatically imported
  - **Solid icons:** `plus`, `check`, `xmark`, `heart`, etc.
  - **Regular icons:** `heart-regular`, `envelope-regular`, `user-regular`, etc. (with `-regular` suffix)
  - **Brand icons:** `github`, `twitter`, `facebook`, `docker`, etc.
- **Sizes:** xs, sm, md, lg, xl, 2xl
- **Colors:** All theme colors supported
- **Features:** Link support, accessibility labels, decorative icon mode

**Usage:**
```tsx
<Icon icon="github" size="lg" color="primary" ariaLabel="GitHub" />
<Icon icon="heart-regular" size="md" />
<Icon icon="plus" asLink href="/add" ariaLabel="Add" />
```

### Button Component

**Status:** ✅ Live with 14 variants

- **Variants:** primary, danger, outline, ghost
- **Shapes:** default (8px), rounded (10px), pill (fully rounded)
- **Sizes:** small, medium, large
- **Features:** 
  - Text labels
  - Left/right icons
  - Icon-only buttons
  - Link buttons (renders as `<a>`)
  - Disabled state
  - Loading state
  - Full width
  - Custom icon sizing

**Icon Usage:**
```tsx
<Button iconLeft="plus">Add Item</Button>
<Button iconOnly iconLeft="heart-regular" ariaLabel="Like" />
```

### Input Component

**Status:** ✅ Live with 9 variants

- **Types:** text, date, time, search, email, password, number, tel, url
- **Shapes:** default, rounded, pill
- **Sizes:** small, medium, large
- **Validation States:** default, error, success
- **Features:**
  - Left/right icons
  - Clearable (with embedded clear button)
  - Full width
  - Disabled state

**Usage:**
```tsx
<Input type="text" placeholder="Enter text..." shape="pill" />
<Input type="search" clearable iconLeft="magnifying-glass" />
```

### Label Component

**Status:** ✅ Live with 9 variants

- **Sizes:** small, medium, large
- **Weights:** normal, medium, bold, strong
- **Colors:** All theme colors
- **Features:**
  - Required field indicator
  - Disabled state
  - Visually hidden (screen-reader only)
  - Form association via `htmlFor`

### Typography Component

**Status:** ✅ Live with 14 variants

- **Variants:** display1, display2, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, overline (display variants render as h1)
- **Tags:** h1-h6, p, span, div, blockquote, small, strong, em
- **Features:**
  - Text alignment (left, center, right, justify)
  - Font weights (normal, medium, bold, strong)
  - Theme colors
  - Truncation with ellipsis
  - No-wrap
  - Custom font families

### Container & Grid (Layout)

**Status:** ✅ Live (9 + 5 stories)

- **Container**
  - `size`: small / medium / large / full — fluid max-width caps from `--cui-container-*` tokens; width = `min(100%, cap)`, so no breakpoint steps
  - `align` (left / center / right), `fluid`, `noPadding`
  - `queryable`: makes the container a CSS query container (`container-name: cui`) so descendant grid classes also respond to the container width via `@container` rules
  - `as` (render as any tag, e.g. `section`), `className`
  - Escape hatch: `--cui-container-max-width` per instance (inline style or utility class)
- **Row**
  - CSS Grid engine: `repeat(var(--cui-grid-columns, 12), minmax(0, 1fr))` with native `gap` gutters (`g`/`gx`/`gy` levels 0–5, per breakpoint)
  - `cols`–`colsXxl` equal columns per row; `auto` mode: `repeat(auto-fit, minmax(var(--cui-row-min-col, 16rem), 1fr))` — fully responsive without breakpoints
  - `alignItems`, `justifyContent`, `as`, `className`
- **Col**
  - `span` + `sm`/`md`/`lg`/`xl`/`xxl` (1–12 or `auto`); plain `Col` = full width (mobile-first stacking)
  - `offset*`, `order*`, `hide`, `hideBelow`, `showBelow` (container-aware visibility), `as`, `className`

**Usage:**
```tsx
<Container size="full" queryable>
  <Row alignItems="center" gLg={4}>
    <Col lg={6}>…</Col>
    <Col lg={6} hideBelow="lg">…</Col>
  </Row>
</Container>
```

---

## 🎯 Recent Changes

Full versioned history lives in **[CHANGELOG.md](../CHANGELOG.md)**

**At a glance:**

- **v0.3.0 (2026-11-25) — layout system redesign:** fluid container caps (`min(100%, cap)`), container queries (`queryable` + `@container cui` rules), CSS-Grid rows with gap gutters, new props (`as`, `auto`, `hide`/`hideBelow`/`showBelow`, `alignItems`/`justifyContent`), new global utilities (`cui-block-*`/`cui-hidden-*` per breakpoint, `cui-img-fluid`, `cui-text-muted`, `cui-text-fluid-*`). Breaking: plain `Col` is now full-width; container sizes are fluid caps, not fixed widths
- **v0.2.0 (2026-11-16):** full FontAwesome Free icon registry (~2,100 icons), documented stories for all live components, Button CSS simplification + test fix

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ (LTS) or 22.12+

### Installation

```bash
npm install        # install dependencies
```

### Development Servers

```bash
npm run storybook  # component development on port 6006
npm run dev        # Vite dev server
```

### Building

```bash
npm run build      # build the library
npm run build-storybook  # static Storybook build (as deployed on Netlify)
```

Use the Storybook toolbar's Theme selector to preview components in each of the 5 themes.

---

## 🚀 Roadmap

### Phase 1 - Foundation ✅ Complete
- Button
- Input
- Label
- Typography
- Icon

### Phase 2 - Layout ✅ Complete
- Container
- Grid (Row + Col)

### Phase 3 - Forms 🚧 In Progress
- Select
- Textarea
- Form
- Checkbox, Radio

### Phase 4 - Media
- Image
- Video

### Phase 5 - Surfaces
- Card
- Modal
- Loader

### Phase 6 - Feedback
- Alert, Toast
- Progress

---

## 💡 Design Principles

1. **CSS First:** All styling defined in CSS, not in JavaScript
2. **Framework Agnostic:** Components work identically across React, Vue, Twig
3. **Themeable:** Easy to customize with CSS variables
4. **Accessible:** WCAG 2.1 AA compliance by default
5. **Consistent:** Same behavior and appearance across all frameworks
6. **Maintainable:** DRY principles, clear separation of concerns

---

## 📖 Usage Examples

### Basic Button
```tsx
import { Button } from "core-ui-library/react";
import "core-ui-library/styles";

<Button variant="primary" shape="pill">
  Click Me
</Button>
```

### Button with Icon
```tsx
<Button variant="outline" iconLeft="plus" iconOnly ariaLabel="Add">
  Add Item
</Button>
```

### Form Input
```tsx
<Label htmlFor="email">Email</Label>
<Input 
  id="email" 
  type="email" 
  placeholder="user@example.com"
  iconLeft="envelope"
/>
```

### Typography
```tsx
<Typography variant="h1">Welcome</Typography>
<Typography variant="body1" color="secondary">
  This is a paragraph of text.
</Typography>
```

### Icon
```tsx
<Icon icon="github" size="2xl" color="primary" ariaLabel="GitHub" />
<Icon icon="heart-regular" asLink href="/like" ariaLabel="Like" />
```

---

## 🔧 Technical Stack

- **Build Tool:** Vite
- **Component Docs:** Storybook
- **Type System:** TypeScript
- **Styling:** CSS Custom Properties
- **Testing:** Storybook Test / Vitest
- **Icons:** FontAwesome Free (all icons)

---

## 📊 Statistics

- **Components:** 7 live, ~13 in development
- **Total Stories:** 69+ documented
- **Icon Coverage:** 2,100+ FontAwesome Free icons
- **Themes:** 5 (default, sage, amber, ocean, midnight)
- **Frameworks:** 3 (React, Vue, Twig)

---

## 🎓 Best Practices

### Accessibility
- Always provide `ariaLabel` for icon-only buttons and links
- Use semantic HTML tags (h1-h6, p, etc.)
- Ensure color contrast meets WCAG 2.1 AA standards
- Test keyboard navigation

### Theming
- Use theme classes on container elements
- Nested themes are supported
- Ocean theme supports light/dark modes via `data-cui-mode`

### Icons
- Use registered FontAwesome icon names
- Regular icons require `-regular` suffix
- Only registered icons are available in Storybook controls

### Responsiveness
- Use `fullWidth` prop for full-width elements
- Containers are fluid up to their size cap; override per instance with `--cui-container-max-width`
- Use `queryable` containers so nested grids respond to the container width (`@container`), not just the viewport
- Use `hideBelow`/`showBelow` on columns instead of hand-written display media queries
- Use `auto` rows for breakpoint-free auto-fit layouts
- Typography scales appropriately; opt into fluid type with `cui-text-fluid-*`
- Test on multiple screen sizes

---

## 👤 Author

**Silvia Cremascoli** — Frontend Developer, Graz 🇦🇹

[Website](https://www.silviacremascoli.com) | [GitHub](https://github.com/silviacremascoli) | [LinkedIn](https://www.linkedin.com/in/silvia-cremascoli)
