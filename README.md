# eslint-config-react-strong

ESLint strong (strict) config for React and React Native development.

##Quick start

### Installation

```bash
$ yarn add -D eslint-config-react-strong
```

or

```bash
$ npm install --save-dev eslint-config-react-strong
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

## Plugins included in this project

- [@typescript-eslint/eslint-plugin]
- [@typescript-eslint/eslint-plugin-tslint]
- [eslint-plugin-import]
- [eslint-plugin-react]
- [eslint-plugin-react-hooks]
- [eslint-plugin-react-native]

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[@typescript-eslint/eslint-plugin-tslint]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-react-native]: https://github.com/Intellicode/eslint-plugin-react-native
