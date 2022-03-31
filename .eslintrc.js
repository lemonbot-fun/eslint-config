module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@lemonbot.fun/eslint-config-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
};
