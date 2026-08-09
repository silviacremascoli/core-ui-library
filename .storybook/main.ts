import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig, type UserConfig } from 'vite';
// @ts-expect-error plugin lacks type definitions
import twig from 'vite-plugin-twig-drupal';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [twig()],
    });
  },
};
export default config;
