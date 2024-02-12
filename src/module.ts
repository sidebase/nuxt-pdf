import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

const PACKAGE_NAME = '@sidebase/nuxt-pdf'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'pdf'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {}

      // Inline module runtime in Nitro bundle
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === 'object' ? nitroConfig.externals : {},
        {
          inline: [resolver.resolve('./runtime')]
        }
      )
      nitroConfig.alias['#pdf'] = resolver.resolve('./runtime/server')
    })
  }
})
