import javascript from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintComments from "eslint-plugin-eslint-comments";
import jsxAccessibility from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";
import typescript from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...typescript.configs.recommended,
  unicorn.configs["flat/recommended"],
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "eslint-comments": eslintComments,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxAccessibility,
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...javascript.configs.recommended.rules,
      ...eslintComments.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxAccessibility.configs.recommended.rules,

      // When using React's memo we do want to allow named functions because they
      // will automatically show up with component names in the debug tools.
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],

      // Prevent the common mistake of adding `console.log` in production code.
      "no-console": "error",

      // We allow Array#reduce because sometimes it's the most readable syntax.
      "unicorn/no-array-reduce": "off",

      // ❤️ null
      "unicorn/no-null": "off",

      // We allow returning `undefined` explicitely in arrow functions, because
      // they can't return void and it's cleaner than defining a full function
      // declaration.
      "unicorn/no-useless-undefined": [
        "error",
        { checkArrowFunctionBody: false },
      ],

      // This conflicts with the requirement from Typescript to enforce the use
      // of objects when spreading. -> ts(2698)
      "unicorn/no-useless-fallback-in-spread": "off",

      // Some abbreviations are fine, like `props` in React components.
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            props: true,
            Props: true,
          },
        },
      ],

      // Enabling this rule does two things, 1) it cleans up our code by
      // requiring the use of boolean types in expressions and 2) prevents errors
      // using the common `expression && <Component />` syntax in JSX.
      //
      // We do allow the use of falsy booleans (so boolean | null | undefined)
      // because that typecasting always makes sense and doesn't cause leaked
      // renders.
      //
      // https://github.com/jsx-eslint/eslint-plugin-react/issues/2073#issuecomment-744040384
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],

      // This prevents ESLint from complaining about unused variables when
      // writing Typescript types.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      // Since Typescript 5.0, it doesn't warn you when you don't specify the
      // type keyword in `import type { Type } from "x"` when importing a type
      // only. We add this rule because we want to avoid accidentally importing
      // any files that contain side effects.
      //
      // We want this to be enforced regardless of the `verbatimModuleSyntax`
      // setting which controls what happens when importing types from modules
      // with side effects.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // Enforce components to be small atoms by limiting their JSX component
      // depth.
      "react/jsx-max-depth": [
        "warn",
        {
          max: 6,
        },
      ],
    },
  },
  prettier,
];

export default config;
