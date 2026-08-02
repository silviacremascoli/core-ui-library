import { defineConfig } from "vite";
import twig from "vite-plugin-twig-drupal";

export default defineConfig({
  plugins: [twig()],
});
