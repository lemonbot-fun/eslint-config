module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@lemonbot.fun/eslint-config-base', //
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    extraFileExtensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  rules: {
    // 禁用 '@typescript-eslint/dot-notation' 校验 开启 eslint dot-notation
    // Turn off '@typescript-eslint/dot-notation'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/dot-notation': 0,
    'dot-notation': ['error'],

    // 禁用 '@typescript-eslint/no-implied-eval' 校验 使用 eslint no-implied-eval
    // Turn off '@typescript-eslint/no-implied-eval'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/no-implied-eval': 0,
    'no-implied-eval': ['error'],

    // 禁用 '@typescript-eslint/no-implied-eval' 校验 使用 eslint no-throw-literal
    // Turn off '@typescript-eslint/no-implied-eval'
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.md
    '@typescript-eslint/no-throw-literal': 0,
    'no-throw-literal': ['error'],

    // 开启 'vue/attributes-order' 校验
    // Turn on 'vue/attributes-order'
    // https://eslint.vuejs.org/rules/attributes-order.html
    'vue/attributes-order': ['error'],

    // 禁用 'vue/no-v-html' 校验
    // Turn off 'vue/no-v-html'
    // https://eslint.vuejs.org/rules/no-v-html.html
    'vue/no-v-html': 0,

    // 禁用 'vue/first-attribute-linebreak' 校验
    // Turn off 'vue/first-attribute-linebreak'
    // https://eslint.vuejs.org/rules/first-attribute-linebreak.html
    'vue/first-attribute-linebreak': 0,

    // 禁用 'vue/one-component-per-file' 校验
    // Turn off 'vue/one-component-per-file'
    // https://eslint.vuejs.org/rules/one-component-per-file.html
    'vue/one-component-per-file': 0,

    // 禁用 'vue/singleline-html-element-content-newline' 校验
    // Turn off 'vue/singleline-html-element-content-newline'
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
    'vue/singleline-html-element-content-newline': 0,


    // 设置 'vue/max-attributes-per-line' 校验
    // Turn on 'vue/max-attributes-per-line'
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 8 }, multiline: { max: 8 },
    }],

    // 禁用 'vue/multiline-html-element-content-newline' 校验
    // Turn off 'vue/multiline-html-element-content-newline'
    // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
    'vue/multiline-html-element-content-newline': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue'],
    },
  },
};
