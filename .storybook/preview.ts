import type { Preview } from '@storybook/html';

// Import global styles and themes for all stories
import '../src/design/global.css';
import '../src/design/themes.css';

const customViewports = {
  small: {
    name: 'Small',
    styles: {
      width: '390px',
      height: '1024px',
      
    },
    type: 'mobile',
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  large: {
    name: 'Large',
    styles: {
      width: '1024px',
      height: '1024px',
    },
    type: 'desktop',
  },
  xlarge: {
    name: 'X-Large',
    styles: {
      width: '1440px',
      height: '1024px',
    },
    type: 'desktop',
  },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme applied to component stories',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'default', title: 'Default' },
          { value: 'sage', title: 'Sage' },
          { value: 'amber', title: 'Amber' },
          { value: 'ocean', title: 'Ocean' },
          { value: 'midnight', title: 'Midnight' },
        ],
      },
    },
  },
  initialGlobals: {
    theme: 'default',
  },
  decorators: [
    (story, context) => {
      const themes = ['default', 'sage', 'amber', 'ocean', 'midnight'];
      const theme = themes.includes(context.globals.theme) ? context.globals.theme : 'default';
      return `<div class="cui-theme--${theme}" style="background: var(--cui-color-background); color: var(--cui-color-text); padding: 16px;">${story()}</div>`;
    },
  ],
  parameters: {
    layout: 'padded',
    options: {
      storySort: {
        order: ['Project', 'Components', '*'],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    viewport: {
      options: customViewports
    },

    a11y: {
      test: "todo"
    }
  },
};

export default preview;
