import defineESLintConfig from '@antfu/eslint-config'

export default defineESLintConfig({
  type: 'app',

  pnpm: true,
  jsonc: true,
  yaml: true,
  test: true,
  stylistic: false,
  formatters: false,
  lessOpinionated: false,
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  gitignore: {
    root: true,
    strict: true,
    files: ['.gitignore', '.prettierignore'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  vue: {
    a11y: true,
    sfcBlocks: true,
  },
})
