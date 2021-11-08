
module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 关闭 '@typescript-eslint/explicit-function-return-type' 校验
    // Turn off '@typescript-eslint/explicit-function-return-type'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 0,

    // 关闭 '@typescript-eslint/explicit-module-boundary-types' 校验
    // Turn off '@typescript-eslint/explicit-module-boundary-types'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // 关闭 '@typescript-eslint/no-var-requires' 校验
    // Turn off '@typescript-eslint/no-var-requires'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 0,

    // 关闭 '@typescript-eslint/no-explicit-any' 校验
    // Turn off '@typescript-eslint/no-explicit-any'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 0,

    //
    '@typescript-eslint/no-unused-expressions': 0,
    //
    '@typescript-eslint/no-use-before-define': 0,
    //
    'array-callback-return': 0,
    //
    'class-methods-use-this': 0,
    //
    'consistent-return': 0,
    //
    'import/no-cycle': 0,
    //
    'import/no-unresolved': 0,
    //
    'import/prefer-default-export': 0,
    //
    'import/extensions': 0,
    //
    'import/newline-after-import': 0,

    //
    'import/no-extraneous-dependencies': 0,
    //
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // 设置行最大长度
    // enforce a maximum line length (max-len)
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', { code: 480, comments: 480, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],

    // 允许使用位运算符
    // allow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 0,

    //
    'no-continue': 0,
    //
    'no-multi-assign': 0,
    //
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    //
    'no-nested-ternary': 0,

    'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'],
    //
    'no-shadow': 0,
    //
    'no-param-reassign': ['error', { props: false }],
    //
    'no-plusplus': 0,

    'no-underscore-dangle': 0,
    //
    'no-useless-constructor': 0,

    'no-unused-expressions': 0,

    'no-unused-vars': 0,
    //
    'object-curly-newline': 0,
    //
    'padded-blocks': 0,
    //
    'prefer-destructuring': 0,
    //
    'arrow-parens': ['error', 'as-needed'],
    //
    'no-trailing-spaces': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
