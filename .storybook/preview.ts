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
  decorators: [
    (story) => `<div class="cui-theme--default">${story()}</div>`,
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
