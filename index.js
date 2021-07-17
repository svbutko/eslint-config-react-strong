//https://areknawo.com/creating-the-perfect-eslint-config/

module.exports = {
    plugins: [
        "react",
        "react-native",
        "@typescript-eslint",
        "react-hooks",
        "import",
    ],
    rules: {
        //react-native
        "react-native/no-unused-styles": "error",
        "react-native/split-platform-components": "error",
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
      { allow: ["**/*.css", "**/*.scss", "**/i18n/index"] },
    ],

        //typescript-eslint
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-use-before-declare": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
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
        ],
        "id-match": "error",
        "max-classes-per-file": "error",
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
        "no-invalid-this": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
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
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "import-spacing": true,
                    "jsx-alignment": true,
                    "jsx-boolean-value": true,
                    "jsx-curly-spacing": [
                        true,
                        "never"
                    ],
                    "jsx-equals-spacing": [
                        true,
                        "never"
                    ],
                    "jsx-key": true,
                    "jsx-no-bind": true,
                    "jsx-no-lambda": true,
                    "jsx-no-multiline-js": true,
                    "jsx-no-string-ref": true,
                    "jsx-self-close": true,
                    "jsx-wrap-multiline": true,
                    "match-default-export-name": true,
                    "no-boolean-literal-compare": true,
                    "no-inferred-empty-object-type": true,
                    "no-mergeable-namespace": true,
                    "no-unsafe-any": true,
                    "no-unused-variable": [
                        true,
                        "react"
                    ],
                    "one-line": [
                        true,
                        "check-catch",
                        "check-finally",
                        "check-else",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "strict-type-predicates": true,
                    "typedef": [
                        true,
                        "call-signature",
                        "arrow-call-signature",
                        "parameter",
                        "property-declaration"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
