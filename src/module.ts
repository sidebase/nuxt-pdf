import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-pdf',
    configKey: 'pdf'
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'client'
    })
  }
})
