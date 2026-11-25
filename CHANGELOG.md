# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
