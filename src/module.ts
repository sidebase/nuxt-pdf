import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-pdf',
    configKey: 'nuxtPdf'
  },
  setup (options, nuxt) {
    // @ts-ignore
    const { resolve } = createResolver(import.meta.url)
    // @ts-ignore
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin.client'))
  }
})
