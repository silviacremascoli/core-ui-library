# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.2] - 2026-11-27

### Added

- **Utilities (utilities.css):** per-breakpoint text alignment utilities `cui-text-left` / `cui-text-center` / `cui-text-right` / `cui-text-justify` with `-sm` / `-md` / `-lg` / `-xl` / `-xxl` suffixes (min-width viewport media queries, blocks ordered sm → xxl so the highest matching breakpoint wins at equal specificity). Combine a base class with a variant to switch alignment at a breakpoint, e.g. `cui-text-center cui-text-left-lg` is centered below lg and left-aligned from lg up

## [0.3.1] - 2026-11-26

### Added

- **Typography:** new `display1` / `display2` variants (larger than h1, render as `h1` by default) using the new `--cui-font-size-4xl` token (`--cui-font-size-fluid-4xl` for fluid type)
- **Utilities (global.css):** text alignment (`cui-text-left/center/right/justify`), `cui-text-nowrap`, and screen-reader-only helpers `cui-visually-hidden` / `cui-visually-hidden-focusable` (the latter reveals on focus, e.g. skip links)
- **Utilities (global.css):** axis padding utilities `cui-pt-*` / `cui-pb-*` / `cui-px-*` / `cui-py-*` (same scale as `cui-p-*`) and axis margin utilities `cui-mr-*` / `cui-ml-*` / `cui-mx-*` / `cui-my-*` (same scale as `cui-m-*`), all driven by the existing `--cui-spacing-*` tokens
- **Utilities (utilities.css):** `cui-gap-xl` / `cui-gap-2xl` / `cui-gap-3xl`, extending the gap scale to match `--cui-spacing-xl/2xl/3xl`

### Changed

- **Typography:** `tag` and `variant` now default to each other — a heading `tag` (h1–h6) without a `variant` applies that heading's variant, and a heading `variant` without a `tag` renders the matching heading element. Explicit props still override both defaults
- **Typography:** display and heading variants (h1–h6) now use the theme heading font (`--cui-font-family-heading`) by default
- **CSS source order:** utility classes moved to `src/design/utilities.css`, imported only from the last lib entry (`src/twig/index.ts`) so they are emitted after component styles in `dist/core-ui.css` — utilities now override component styles at equal specificity. Guarded by `scripts/check-css-order.mjs` in the build
- **Utilities (global.css):** `cui-visually-hidden*` also sets `clip-path: inset(50%)` alongside the legacy `clip` property

## [0.3.0] - 2026-11-25

### Breaking

- **Grid:** a plain `Col` is now full-width (mobile-first stacking) instead of sharing the row equally. Use spans (`lg={6}`) or `cols` on the row for side-by-side columns
- **Container:** size values changed from fixed widths to fluid caps (`--cui-container-small/medium/large/full` = 36/48/62/80rem, `width: min(100%, cap)`) — no more breakpoint steps

### Added

- **Container queries:** new `queryable` prop on `Container` (`container-type: inline-size; container-name: cui`). Every responsive grid class is emitted both as a viewport `@media` rule and as a `@container cui` rule, so grid children can follow the container's own width, not just the viewport
- **Grid:** `auto` mode on `Row` (`repeat(auto-fit, minmax(var(--cui-row-min-col, 16rem), 1fr))`) for breakpoint-free responsive layouts; `alignItems` / `justifyContent` props on `Row`; `hide` / `hideBelow` / `showBelow` visibility props on `Col`; `as` prop on `Container`, `Row` and `Col` (render as any HTML tag, e.g. `section`)
- **Utilities (global.css):** per-breakpoint display classes (`cui-block-sm…xxl`, `cui-hidden-sm…xxl`), `cui-img-fluid`, `cui-text-muted`, and a clamp-based fluid type scale (`cui-text-fluid-lg/xl/2xl/3xl` via `--cui-font-size-fluid-*`)

### Changed

- **Container:** sizes are now fluid max-width caps (`width: min(100%, cap)`) driven by the `--cui-container-small/medium/large/full` tokens (36/48/62/80rem) — no breakpoint steps. Per-instance override via `--cui-container-max-width`
- **Grid engine:** rows switched from flexbox + negative-margin gutters to CSS Grid with native `gap` gutters; gutters are fluid (`--cui-grid-gutter-x: clamp(1rem, 2.5vw, 1.5rem)`); column count overridable via `--cui-grid-columns` (default 12)

## [0.2.0] - 2026-11-16

### Added

- **Icon:** full FontAwesome Free registry (~2,100 icons — solid, regular with `-regular` suffix, brands), tree-shaking friendly

### Changed

- **Button:** CSS simplified — removed complex icon-only variant styling, kept equal padding

### Fixed

- **Button:** interactions test updated to match current CSS padding values

### Docs

- Comprehensive usage documentation for all live component stories (Button 14, Input 9, Label 9, Typography 14, Icon 9), each with usage guidance, best practices and use cases
