# Core UI Library

A reusable component library for consistent UI elements across multiple projects on my [GitHub](https://github.com/silviacremascoli).

## Overview

This is a shared component library designed to be used across my various web applications and projects. It provides reusable UI components with consistent styling and behavior, built with Storybook for easy development and documentation.

## Projects Using This Library

This component library is intended to be used in the following projects:

- **Personal Portfolio** - My main portfolio website showcasing my work and skills
- **React Weather App** - A weather application built with React for real-time weather data
- **Finance Tracker** - An application for tracking personal finances and expenses
- **React Dictionary** - A dictionary application for looking up word definitions
- **World Clock App** - An application for displaying time across different time zones

## Tech Stack

- **Vite** - Build tool and development server
- **Storybook** - Component development and documentation
- **Twig** - Templating engine for component templates
- **TypeScript** - Type safety for component props and logic

## Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This starts the Vite development server.

### Running Storybook

```bash
npm run storybook
```

This launches Storybook on port 6006 for component development and documentation.

### Building the Library

```bash
npm run build
```

This builds the library for production use.

### Building Storybook

```bash
npm run build-storybook
```

This builds a static version of Storybook for deployment.

## Project Structure

```
src/
├── stories/
│   └── components/
│       ├── Button.stories.ts    # Button component stories
│       ├── Button.twig          # Button component template
│       └── Button.css           # Button component styles
├── style.css                   # Global styles
└── main.js                     # Main entry point
public/
└── index.html                 # HTML entry point
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |

## Adding New Components

1. Create a new folder in `src/stories/components/` for your component
2. Add the following files:
   - `{ComponentName}.twig` - The Twig template
   - `{ComponentName}.css` - Component-specific styles
   - `{ComponentName}.stories.ts` - Storybook stories
3. Import and use the component in your projects

## Contributing

This is a personal library, but contributions are welcome. Feel free to open issues or pull requests for improvements.

## License

Private use for my [GitHub](https://github.com/silviacremascoli) projects.
