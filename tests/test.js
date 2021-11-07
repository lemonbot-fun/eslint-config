const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');
const test = require('tape');

const { pkgs } = require('./utils');

pkgs.forEach((name) => {
  const pkgTestDir = path.resolve(__dirname, '../packages', name, 'tests');

  test(`Test pkg: ${name}.`, async (t) => {
    const snapFile = path.resolve(pkgTestDir, './results.snap.json');
    const snap = JSON.parse(fs.readFileSync(snapFile));

    const cli = new ESLint({
      useEslintrc: true,
      overrideConfigFile: path.resolve(pkgTestDir, './.eslintrc.js'),
    });

    const results = await cli.lintFiles([path.resolve(pkgTestDir, './bad.ts')]);

    t.deepEqual(results, snap);
  });
});
