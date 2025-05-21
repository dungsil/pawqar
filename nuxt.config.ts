import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  modules: ['reka-ui/nuxt'],

  app: {},

  css: ['assets/styles/main.css'],

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
