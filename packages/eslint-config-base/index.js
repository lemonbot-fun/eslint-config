
module.exports = {
  extends: [
    "airbnb-typescript-base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:compat/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-param-reassign": ["error", { props: false }],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
