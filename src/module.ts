import { defineNuxtModule, createResolver, useLogger, addTemplate } from '@nuxt/kit'
import { defu } from 'defu'

const PACKAGE_NAME = 'nuxt-pdf'

export default defineNuxtModule({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'pdf'
  },
  setup (options, nuxt) {
    const logger = useLogger(PACKAGE_NAME)

    // 1. Create resolver
    const { resolve } = createResolver(import.meta.url)

    // 2. Add the nitro alias for backend usage
    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {}

      // Inline module runtime in Nitro bundle
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === 'object' ? nitroConfig.externals : {},
        {
          inline: [resolve('./runtime')]
        }
      )
      nitroConfig.alias['#pdf'] = resolve('./runtime/server')
    })

    // 3. Add types
    addTemplate({
      filename: 'types/pdf.d.ts',
      getContents: () =>
        [
          "declare module '#pdf' {",
          `  const createPDF: typeof import('${resolve(
            './runtime/server'
          )}').createPDF`,
          '}'
        ].join('\n')
    })

    logger.success('`nuxt-pdf` setup done')
  }
})
