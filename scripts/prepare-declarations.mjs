import { access, copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const typesDirectory = 'dist/types';
const explicitExtensions = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx', '.vue', '.json', '.d.ts', '.d.mts', '.d.cts'];

async function findDeclarationFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findDeclarationFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.d.ts') ? [entryPath] : [];
  }));
  return nestedFiles.flat();
}

async function declarationModulePath(filePath, modulePath) {
  if (modulePath.endsWith('.vue')) {
    try {
      await access(`${path.resolve(path.dirname(filePath), modulePath)}.d.ts`);
      return `${modulePath}.js`;
    } catch {
      return modulePath;
    }
  }

  if (!modulePath.startsWith('.') || explicitExtensions.some((extension) => modulePath.endsWith(extension))) {
    return modulePath;
  }

  const resolvedPath = path.resolve(path.dirname(filePath), modulePath);
  try {
    await access(`${resolvedPath}.d.ts`);
    return `${modulePath}.js`;
  } catch {
    try {
      await access(path.join(resolvedPath, 'index.d.ts'));
      return `${modulePath.replace(/\/$/, '')}/index.js`;
    } catch {
      return modulePath;
    }
  }
}

for (const filePath of await findDeclarationFiles(typesDirectory)) {
  let code = await readFile(filePath, 'utf8');
  const source = ts.createSourceFile(filePath, code, ts.ScriptTarget.Latest, true);
  const assetImports = source.statements.filter((statement) =>
    ts.isImportDeclaration(statement) &&
    ts.isStringLiteral(statement.moduleSpecifier) &&
    (statement.moduleSpecifier.text.endsWith('.css') || statement.moduleSpecifier.text.endsWith('.twig'))
  );

  for (const statement of assetImports.reverse()) {
    const isTwigImport = statement.moduleSpecifier.text.endsWith('.twig');
    const templateName = isTwigImport ? statement.importClause?.name?.text : undefined;
    if (isTwigImport && statement.importClause && !templateName) {
      throw new Error(`Unsupported Twig declaration import in ${filePath}`);
    }
    const replacement = templateName
      ? `declare const ${templateName}: (params?: Record<string, any>) => string;\n`
      : '';
    code = code.slice(0, statement.getFullStart()) + replacement + code.slice(statement.end);
  }

  const rewrittenSource = ts.createSourceFile(filePath, code, ts.ScriptTarget.Latest, true);
  const moduleSpecifiers = rewrittenSource.statements.flatMap((statement) => {
    if ((ts.isImportDeclaration(statement) || ts.isExportDeclaration(statement)) &&
        statement.moduleSpecifier && ts.isStringLiteral(statement.moduleSpecifier)) {
      return [statement.moduleSpecifier];
    }
    return [];
  });
  const modulePathUpdates = await Promise.all(moduleSpecifiers.map(async (moduleSpecifier) => ({
    node: moduleSpecifier,
    value: await declarationModulePath(filePath, moduleSpecifier.text),
  })));
  for (const { node, value } of modulePathUpdates.reverse()) {
    if (value !== node.text) {
      code = code.slice(0, node.getStart(rewrittenSource)) + JSON.stringify(value) + code.slice(node.end);
    }
  }

  if (assetImports.length || modulePathUpdates.some(({ node, value }) => value !== node.text)) {
    await writeFile(filePath, code);
  }
}

await copyFile('src/types/styles.d.ts', path.join(typesDirectory, 'styles.d.ts'));