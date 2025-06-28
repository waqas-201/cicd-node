// eslint.config.mjs

/* eslint import/no-unresolved: off */
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  // Prevent ESLint from linting its own config with strict plugin rules
  {
    files: ["eslint.config.mjs"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      import: importPlugin,
      unicorn,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Core ESLint rules (same as eslint:recommended)
      ...js.configs.recommended.rules,

      // Import plugin rules
      ...importPlugin.configs.recommended.rules,

      // Unicorn plugin rules
      ...unicorn.configs.recommended.rules,

      // Prettier plugin - integrate with ESLint
      "prettier/prettier": "warn",

      // Additional custom rules
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "import/order": [
        "warn",
        { groups: [["builtin", "external", "internal"]] },
      ],
      "unicorn/prevent-abbreviations": "off",
    },
  },
]);
