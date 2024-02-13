import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'
import { defu } from 'defu'
import type { ModuleOptions } from './runtime/types'

const PACKAGE_NAME = '@sidebase/nuxt-pdf'

// Module options TypeScript interface definition
const defaultOptions: ModuleOptions = {
  defaultDocOptions: {
    size: 'A4',
    bufferPages: true,
    margins: {
      top: 25,
      left: 25,
      right: 25,
      bottom: 25,
    },
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'pdf'
  },
  // Default configuration options of the Nuxt module
  defaults: defaultOptions,
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // @ts-expect-error
    nuxt.options.runtimeConfig.public.pdf = options

    // Step 1: Inject Sever side PDFDocument creation
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

    // Step 2: Inject Client side composables to create pdfs from vue components
    const composables = resolver.resolve('./runtime/composables')
    addImportsDir(composables)
  }
})
