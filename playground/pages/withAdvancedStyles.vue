<template>
  <div ref="page">
    <span>
      With advanced styling <span v-if="isExporting">Exporting... Please wait</span>
    </span>
    <div ref="pdfSection">
      <div class="pdfStyles">
        Thanks for testing out nuxt-pdf!
      </div>
    </div>
    <button @click="print(pdfSection, {})">
      print card
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
import { ref } from 'vue'
import { Html2PdfOptions } from '../../src/runtime/plugin.client'

const { $exportToPDF } = useNuxtApp()

const pdfSection = ref<HTMLElement | null>(null)
const isExporting = ref(false)

const print = async (element: HTMLElement, options: Html2PdfOptions) => {
  pdfSection.value?.classList.add('print')
  isExporting.value = true
  await $exportToPDF(element, options)
  pdfSection.value?.classList.remove('print')
  isExporting.value = false
}
</script>

<style>
.print .pdfStyles {
  color: blue;
  background-color: black;
}
</style>
