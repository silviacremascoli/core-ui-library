import { rollup } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import ts from 'typescript';

const entries = [
  ['dist/types/index.d.ts', 'dist/types-bundled/index.d.ts'],
  ['dist/types/react/index.d.ts', 'dist/types-bundled/react/index.d.ts'],
  ['dist/types/vue/index.d.ts', 'dist/types-bundled/vue/index.d.ts'],
  ['dist/types/twig/index.d.ts', 'dist/types-bundled/twig/index.d.ts'],
  ['src/types/styles.d.ts', 'dist/types-bundled/styles.d.ts'],
];

const removeStyleImports = {
  name: 'remove-declaration-style-imports',
  transform(code, id) {
    if (!id.endsWith('.d.ts')) return null;
    const source = ts.createSourceFile(id, code, ts.ScriptTarget.Latest, true);
    const imports = source.statements.filter((statement) =>
      ts.isImportDeclaration(statement) &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      (statement.moduleSpecifier.text.endsWith('.css') || statement.moduleSpecifier.text.endsWith('.twig'))
    );
    if (!imports.length) return null;
    for (const statement of imports.reverse()) {
      code = code.slice(0, statement.getFullStart()) + code.slice(statement.end);
    }
    return { code, map: null };
  },
};

for (const [input, output] of entries) {
  const bundle = await rollup({ input, plugins: [removeStyleImports, dts()] });
  try {
    await bundle.write({ file: output, format: 'es' });
  } finally {
    await bundle.close();
  }
}