import { mergeConfig } from "vite";
import twig from "vite-plugin-twig-drupal";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
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
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [twig()],
    });
  },
};
export default config;
