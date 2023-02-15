module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // "react/require-default-props": 0,
        // "max-len": ["error", {"code": 120}, { "ignoreComments": true , "ignoreUrls": true}],
        // "no-unused-vars": "warn",
        // "quotes": ["error", "double"],
        // "jsx-quotes": ["error", "prefer-double"],
        // "prefer-const": "error",
        // "indent": ["warn", 2],
        // "comma-dangle": ["error", "always-multiline"],
        // semi: ["warn", "always"],
    },
}
