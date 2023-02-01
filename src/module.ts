import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-pdf',
    configKey: 'pdf'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const composables = resolve('./runtime/composables')
    addImportsDir(composables)
  }
})
