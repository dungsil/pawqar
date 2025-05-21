import defineESLintConfig from '@antfu/eslint-config'

export default defineESLintConfig({
  type: 'app',

  pnpm: true,
  jsonc: true,
  yaml: true,
  test: true,
  stylistic: false,
  formatters: {
    prettierOptions: {
      semi: false,
      singleQuote: true,
      quoteProps: 'as-needed',
      trailingComma: 'all',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      proseWrap: 'always',
      singleAttributePerLine: false,
      vueIndentScriptAndStyle: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
  lessOpinionated: false,
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  gitignore: {
    root: true,
    strict: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  vue: {
    a11y: true,
    sfcBlocks: true,
  },
})
