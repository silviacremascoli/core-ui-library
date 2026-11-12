import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig, type UserConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  staticDirs: ['../src/assets'],
  stories: ["../src/**/*.stories.@(js|ts)", "../docs/**/*.mdx"],
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
    const plugins = ((config.plugins ?? []) as unknown[]).flat(Infinity) as Array<{ name?: string } | null | undefined | false>;
    return mergeConfig(config, {
      plugins: [
        twig(),
        ...(!plugins.some((plugin) => plugin && plugin.name === 'vite:vue') ? [vue()] : []),
        ...(!plugins.some((plugin) => plugin && plugin.name === 'vite:react-babel') ? react() : []),
      ],
    });
  },
};
export default config;
