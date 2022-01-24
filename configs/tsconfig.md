# TS Config

## Common

```json
{
  "compilerOptions": {
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "lib": ["es2020"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "module": "ESNext",
    "target": "esnext",
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true,
    "preserveConstEnums": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "skipLibCheck": true
  },
}

```

## React Native specific

```json
{
  "compilerOptions": {
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "module": "ESNext",
    "target": "esnext",
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true,
    "preserveConstEnums": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "skipLibCheck": false,
    "resolveJsonModule": true,
  },
  "include": [
    "__tests__/**/*",
    "e2e/**/*",
    "src/**/*",
    "storybook/**/*"
  ],
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js",
    "**/index.js",
    "node_modules",
    "ios",
    "android",
    "tools",
    "patches",
    "coverage",
  ]
}

```
