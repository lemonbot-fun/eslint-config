const { ESLint } = require('eslint');
const path = require('path');
const fs = require('fs');
const test = require('tape');

module.exports.runTest = function(pkgName, testCaseDir) {
  test(`Test pkg: "${pkgName}" eslint config can be used.`, async t => {
    const snapFile = path.resolve(testCaseDir, './results.snap.json');
    const snap = JSON.parse(fs.readFileSync(snapFile));

    const cli = new ESLint({
      useEslintrc: false,
      baseConfig: require(path.resolve(testCaseDir, './rc.js')),
    });

    const results = await cli.lintFiles([path.resolve(testCaseDir, './bad.ts')]);

    fs.writeFileSync(path.resolve(testCaseDir, 'now.snap.json'), JSON.stringify(results, null, 2));

    t.deepEqual(results, snap);
  });
};

module.exports.updateSnap = async function(pkgName, testCaseDir) {
  const cli = new ESLint({
    useEslintrc: false,
    baseConfig: require(path.resolve(testCaseDir, './rc.js')),
  });

  const results = await cli.lintFiles([path.resolve(testCaseDir, './bad.ts')]);
  const filename = path.resolve(testCaseDir, './results.snap.json');
  fs.writeFileSync(filename, JSON.stringify(results, null, 2));
};
