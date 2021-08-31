# eslint-config-react-strong

[![npm-version](https://img.shields.io/npm/v/eslint-config-react-strong)](https://www.npmjs.com/package/eslint-config-react-strong)
[![npm-downloads](https://img.shields.io/npm/dt/eslint-config-react-strong)](https://www.npmjs.com/package/eslint-config-react-strong)

[![GitHub Followers](https://img.shields.io/github/followers/svbutko?label=Follow%20%40svbutko&style=social)](https://github.com/svbutko)
[![Twitter Follow](https://img.shields.io/twitter/follow/svbutko?label=Follow%20%40svbutko&style=social)](https://twitter.com/svbutko)

ESLint strong (strict) config for React and React Native development.

## Quick start

### Installation

#### yarn

```sh
yarn add -D eslint eslint-config-react-strong @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
```

#### npm

```sh
npm install --save-dev eslint eslint-config-react-strong @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
```

### Usage

Add `"react-strong"` to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

```json
{
  "extends": [
    "...",
    "react-strong"
  ]
}
```

## Other configs

- [Prettier](./configs/prettierrc.md)
- [TSConfig](./configs/tsconfig.md)

## Plugins included in this project

- [@typescript-eslint/eslint-plugin]
- [eslint-plugin-import]
- [eslint-plugin-react]
- [eslint-plugin-react-hooks]
- [eslint-plugin-react-native]

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-react-native]: https://github.com/Intellicode/eslint-plugin-react-native
