import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-pdf',
    configKey: 'pdf'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'client'
    })
  }
})
