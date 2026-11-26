// Guards the CSS source-order invariant: utility classes must be emitted after
// component styles in dist/core-ui.css, so utilities override component styles
// at equal specificity. The bundler emits utilities last because they are imported
// only from the last lib entry (src/twig/index.ts). If that changes, fail the build.
import { readFileSync } from 'node:fs';

const file = 'dist/core-ui.css';
const css = readFileSync(file, 'utf8');

const firstUtility = css.indexOf('.cui-mb-xl');
const componentStyle = css.indexOf('.cui-typography{');

if (firstUtility === -1 || componentStyle === -1) {
  console.error('check-css-order: could not find utility/component markers in', file);
  process.exit(1);
}

if (firstUtility < componentStyle) {
  console.error(
    'check-css-order: utilities are emitted before component styles in', file,
    '- import src/design/utilities.css only from the last lib entry (src/twig/index.ts)'
  );
  process.exit(1);
}

console.log('check-css-order: utilities emitted after component styles, ok');
