/** @type {import('prettier').Config} */

module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: `es5`,
  useTabs: false,
  quoteProps: `consistent`,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: `always`,

  plugins: [require.resolve(`prettier-plugin-astro`), "prettier-plugin-tailwindcss"],
  overrides: [{ files: `*.astro`, options: { parser: `astro` } }],
};
