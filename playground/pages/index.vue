<template>
  <div ref="page">
    <span>
      Nuxt module playground!
    </span>
    <div ref="pdfSection">
      Thanks for testing out nuxt-pdf!
    </div>
    <button @click="print(pdfSection)">
      print card
    </button>
    <button @click="print(page)">
      print page
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePDFExport } from '#imports'

const page = ref<HTMLElement | null>(null)
const pdfSection = ref<HTMLElement | null>(null)

const print = async (element: HTMLElement | null, options?: Parameters<typeof usePDFExport>[1]) => {
  if (!element) {
    return
  }
  await usePDFExport(element, options)
}
</script>
