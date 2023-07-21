module.exports = {
    extends: [
        "plugin:import/typescript",
    ],
    env: {
        es6: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "react",
        "react-native",
        "@typescript-eslint",
        "react-hooks",
        "import",
        "jest",
        "unused-imports"
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        //jest
        "jest/no-disabled-tests": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jest/no-commented-out-tests": "error",
        "jest/expect-expect": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-export": "error",
        "jest/no-mocks-import": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-return-statement": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-title": "error",
        //react-native
        "react-native/no-unused-styles": "error",
        "react-native/split-platform-components": "off",
        "react-native/no-inline-styles": "error",
        "react-native/no-color-literals": "error",
        "react-native/no-raw-text": "error",
        "react-native/no-single-element-style-arrays": "error",

        //react-hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        //import
        "import/no-default-export": "error",
        "import/no-unassigned-import": [
            "error",
            {
                allow: [
                    "**/*.css",
                    "**/*.scss",
                    "**/i18n/index",
                ]
            },
        ],
        "import/no-unused-modules": ["error", {"unusedExports": true}],

        //typescript-eslint
        "@typescript-eslint/strict-boolean-expressions": "off",
        "max-classes-per-file": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",

        //unused-imports
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {"vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_"}
        ],

        // eslint
        "camelcase": "error",
        "complexity": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "unknown",
            "Array",
            "void",
            "never",
            "object",
            "Object",
            "Symbol",
            "await",
            "async",
            "bigint",
            "BigInt",
        ],
        "id-match": "error",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": "off",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        "no-unused-labels": "error",
        "no-var": "error",
        "no-void": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-const": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "no-console": ["error", {allow: ["warn", "error"]}]
    }
};
