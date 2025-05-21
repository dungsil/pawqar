import process from 'node:process'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  modules: ['reka-ui/nuxt'],

  app: {},

  css: ['assets/styles/main.css'],

  alias: {
    '#database': fileURLToPath(new URL('./database/index.ts', import.meta.url)),
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    asyncContext: true,
    buildCache: true,
    typedPages: true,
    inlineRouteRules: true,
    watcher: 'parcel',
  },

  imports: {
    imports: [
      // `tailwind-variants` auto imports
      { from: 'tailwind-variants', name: 'tv' },
      { from: 'tailwind-variants', name: 'VariantProps', type: true },
    ],
  },

  nitro: {
    preset: 'node-server',
    experimental: {
      database: true,
    },

    database: {
      default: {
        connector: 'libsql-node',
        options: {
          url: process.env.PAWQAR_DB_URL!,
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  reka: {
    prefix: 'reka-',
  },

  $development: {
    devtools: {
      enabled: true,
    },
  },

  $production: {
    experimental: {
      buildCache: false,
    },

    vite: {
      build: {
        sourcemap: false,
      },
    },
  },
})
