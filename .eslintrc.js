module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint", "prettier", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_$",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 900,
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: true,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
    "import/order": ["warn", { "newlines-between": "always" }],
    "react/prop-types": "off",
    "react/self-closing-comp": "warn",
    "react/display-name": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
