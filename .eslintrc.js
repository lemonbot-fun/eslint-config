module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['./packages/eslint-config-base/index'],
  rules: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
};
