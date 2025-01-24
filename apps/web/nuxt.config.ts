export default defineNuxtConfig({
  modules: [],

  srcDir: 'src',

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    buildCache: true,
    typedPages: true,
  },

  compatibilityDate: '2025-01-01',
})
