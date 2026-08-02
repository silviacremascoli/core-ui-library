// Declare support for CSS imports in TypeScript
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Declare support for Twig imports in TypeScript
declare module "*.twig" {
  const content: (params?: Record<string, any>) => string;
  export default content;
}
