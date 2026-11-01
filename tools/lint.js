#!/usr/bin/env node
/**
 * Linter del proyecto.
 *
 * Los módulos son scripts clásicos que comparten el ámbito global (funcionan con doble clic,
 * sin servidor). ESLint por archivo no ve las declaraciones de los demás, así que aquí se
 * concatenan en el orden del manifest, se analiza el conjunto y los errores se traducen de
 * vuelta a archivo:línea.
 */
const fs = require('fs');
const path = require('path');
const { ESLint } = require('eslint');
const globals = require('globals');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/manifest.json'), 'utf8'));

let code = '';
const ranges = []; // { file, start, end } en líneas del bundle (base 1)
let line = 1;
for (const rel of manifest) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8').replace(/\n$/, '');
  const n = text.split('\n').length;
  ranges.push({ file: rel, start: line, end: line + n - 1 });
  code += text + '\n';
  line += n;
}

const locate = l => {
  const r = ranges.find(x => l >= x.start && l <= x.end);
  return r ? `${r.file}:${l - r.start + 1}` : `bundle:${l}`;
};

(async () => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      {
        languageOptions: {
          ecmaVersion: 2022,
          sourceType: 'script',
          globals: { ...globals.browser, THREE: 'readonly' },
        },
        rules: {
          'no-undef': 'error',
          'no-redeclare': 'error',
          'no-dupe-keys': 'error',
          'no-unreachable': 'error',
          'no-const-assign': 'error',
          'no-unused-vars': [
            'warn',
            { vars: 'all', args: 'none', caughtErrors: 'none', varsIgnorePattern: '^[GO]_[A-Z]+$' },
          ],
        },
      },
    ],
  });
  const [res] = await eslint.lintText(code, { filePath: path.join(root, 'bundle.js') });
  let errors = 0;
  for (const m of res.messages) {
    if (m.severity === 2) errors++;
    if (m.severity === 2 || process.argv.includes('--warnings')) {
      console.log(
        `${m.severity === 2 ? 'ERROR' : 'warn '} ${locate(m.line)}  ${m.message} (${m.ruleId})`
      );
    }
  }
  const warns = res.messages.length - errors;
  console.log(
    `\n${errors} errores, ${warns} avisos${warns && !process.argv.includes('--warnings') ? ' (usa --warnings para verlos)' : ''}`
  );
  process.exit(errors ? 1 : 0);
})();
