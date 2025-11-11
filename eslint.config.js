import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // --- Ignore build/system files globally ---
  globalIgnores(["dist", "node_modules", "commitlint.config.js"]),
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"], // enable type-aware rules
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: globals.node,
    },
    rules: {
      // --- Base TS recommended rules ---
      ...tseslint.configs.recommended.rules,

      // --- Type-aware rules (strict safety) ---
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-for-in-array": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/unbound-method": "warn",

      // --- Type-import consistency ---
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      // --- Replace JS core rules with TS equivalents ---
      "no-unused-vars": "off",
      "no-shadow": "off",
      "no-redeclare": "off",
      "no-undef": "off",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-redeclare": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^[A-Z_]" },
      ],
    },
  },

  // --- Disable stylistic rules that conflict with Prettier ----
  prettier,
]);
