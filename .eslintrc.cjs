/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.ts', '.tsx'],
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: {},
      prisma: {
        alwaysTryToResolve: true,
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
};

module.exports = config;
