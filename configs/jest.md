# Jest

## Config

It includes addition of [ts-jest](https://github.com/kulshekhar/ts-jest) to set up [Detox](./detox.md)

```js
module.exports = {
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
};

```
