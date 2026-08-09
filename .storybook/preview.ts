import type { Preview } from '@storybook/html';

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
  parameters: {
    layout: 'padded',
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