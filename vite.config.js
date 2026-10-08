import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import twig from 'vite-plugin-twig-drupal';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react(), vue(), twig()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@react': resolve(__dirname, 'src/react'),
      '@vue': resolve(__dirname, 'src/vue'),
      '@twig': resolve(__dirname, 'src/twig'),
      '@design': resolve(__dirname, 'src/design'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'react/index': resolve(__dirname, 'src/react/index.ts'),
        'vue/index': resolve(__dirname, 'src/vue/index.ts'),
        'twig/index': resolve(__dirname, 'src/twig/index.ts'),
      },
      name: 'CoreUI',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `core-ui.${format}.js`;
        }
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vue'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          vue: 'Vue',
        },
      },
    },
  },
});
