module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
        trailingComma: 'none',
      },
    },
    {
      files: ['*.css'],
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
    {
      files: ['*.md'],
      options: {
        parser: 'mdx',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'clsx', 'cva'],
};
