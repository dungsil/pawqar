import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import security from 'eslint-plugin-security'
import turbo from 'eslint-plugin-turbo'

interface DefineESLintConfigOptions {
  typeChecked?: boolean | string
}

export async function defineESLintConfig({ typeChecked }: DefineESLintConfigOptions = {}): Promise<Linter.Config[]> {
  return antfu(
    {
      type: 'lib',
      typescript: typeChecked === undefined
        ? { tsconfigPath: typeof typeChecked === 'string' ? typeChecked : 'tsconfig.json' }
        : true,
      formatters: {
        css: true,
        svg: true,
        html: true,
        markdown: true,
      },
    },

    // 추가 구성 모듈
    turbo.configs['flat/recommended'],
    security.configs.recommended,
    createConfigForNuxt({
      features: {
        nuxt: {
          sortConfigKeys: true,
        },

        // Nuxt 설정만 사용
        tooling: false,
        typescript: false,
        formatters: false,
        standalone: false,
        stylistic: false,
      },
    }),
  )
}
