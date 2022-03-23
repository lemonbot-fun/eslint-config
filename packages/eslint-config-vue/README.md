# lemonbot/eslint-config-vue

Enhances Airbnb's ESLint config with TypeScript support

## Setup

### 1) Install dependencies (and peer dependencies)

```bash
npm install @lemonbot.fun/eslint-config-vue \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            typescript \
            eslint-plugin-vue \
            --save-dev
```

### 2) Configure ESLint

Within your ESLint config file:

```diff
extends: [
  require.resolve('@lemonbot.fun/eslint-config-vue/index'),
]
```

## Credits

Authored and maintained by Jason Chang ([Lemonbot](https://github.com/lemonbot-fun)).

## License

Open source [licensed as MIT](https://github.com/lemonbot-fun/eslint-config/blob/master/LICENSE).
