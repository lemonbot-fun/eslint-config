const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');

const { pkgs } = require('./utils');

pkgs.forEach(async (name) => {
  const pkgTestDir = path.resolve(__dirname, '../packages', name, 'tests');

  const cli = new ESLint({
    useEslintrc: true,
    overrideConfigFile: path.resolve(pkgTestDir, './.eslintrc.js'),
  });

  const results = await cli.lintFiles([path.resolve(pkgTestDir, './bad.ts')]);
  const filename = path.resolve(pkgTestDir, './results.snap.json');
  fs.writeFileSync(filename, JSON.stringify(results, null, 2));
});
