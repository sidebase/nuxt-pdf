import { defineNuxtConfig } from 'nuxt/config'
import nuxtPdf from '..'

export default defineNuxtConfig({
  modules: [
    nuxtPdf
  ],
  nuxtPdf: {
    addPlugin: true
  }
})
