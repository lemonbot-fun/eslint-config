module.exports = {
  extends: [
    'airbnb-typescript/base', //
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'prettier',
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
  plugins: [
    'import', //
    'prettier',
    'promise',
  ],
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

    // 关闭 '@typescript-eslint/no-non-null-assertion' 校验
    // Turn off '@typescript-eslint/no-non-null-assertion'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': 0,

    // 开启 '@typescript-eslint/no-unused-expressions' 校验
    // Turn on '@typescript-eslint/no-unused-expressions'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': 0,

    // 开启 '@typescript-eslint/no-use-before-define' 校验
    // Turn on '@typescript-eslint/no-use-before-define'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': ['error'],

    // 关闭 'array-callback-return' 校验
    // Turn off 'array-callback-return'
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 0,

    // 开启 'class-methods-use-this' 校验
    // Turn on 'class-methods-use-this'
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error'],

    // 关闭 'consistent-return' 校验
    // Turn off 'consistent-return'
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 0,

    // 关闭 'import/no-cycle' 校验
    // Turn off 'import/no-cycle'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 0,

    // @todo
    'import/no-unresolved': ['error', { commonjs: true }],

    // @todo
    'import/prefer-default-export': 0,

    // @todo
    'import/extensions': 0,

    // @todo
    'import/newline-after-import': 0,

    // 开启 '@typescript-eslint/no-non-null-assertion' 校验
    // Turn on 'import/no-extraneous-dependencies'
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error'],

    // @todo
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // 设置行最大长度
    // enforce a maximum line length (max-len)
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', { code: 480, comments: 480, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],

    // 允许使用位运算符
    // allow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 0,

    // @todo
    'no-continue': 0,

    // @todo
    'no-multi-assign': 0,

    // @todo
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],

    // @todo
    'no-nested-ternary': 0,

    // 禁止 "with" 操作符，匿名 function ，允许 "in" 操作符。
    // Block WithStatement FunctionExpression, Enable BinaryExpression[operator='in']
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'],

    // @todo
    'no-shadow': 0,

    // @todo
    'no-param-reassign': ['error', { props: false }],

    // @todo
    'no-plusplus': 0,

    // @todo
    'no-underscore-dangle': 0,

    // @todo
    'no-useless-constructor': 0,

    // @todo
    'no-unused-expressions': 0,

    // @todo
    'no-unused-vars': 0,

    // @todo
    'object-curly-newline': 0,

    // @todo
    'padded-blocks': 0,

    // @todo
    'prefer-destructuring': 0,

    // @todo
    'arrow-parens': ['error', 'as-needed'],

    // @todo
    'no-trailing-spaces': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
