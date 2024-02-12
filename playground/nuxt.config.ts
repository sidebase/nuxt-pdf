import { defineNuxtModule } from '@nuxt/kit'
import { startSubprocess } from '@nuxt/devtools-kit'
import { resolve } from 'path'

const devToolsClient = defineNuxtModule({
  setup(_, nuxt) {
    if (!nuxt.options.dev) {
      return
    }
    startSubprocess(
      { command: 'npx', args: ['nuxi', 'dev', '--port', '3300'], cwd: resolve(__dirname, '../client'), },
      { id: 'my-module:client', name: 'My Module Client Dev' }
    )
  }
})

export default defineNuxtConfig({
  modules: ['../src/module', devToolsClient],
  devtools: { enabled: true }
})
