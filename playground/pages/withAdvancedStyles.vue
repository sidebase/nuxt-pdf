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
    <button @click="print(pdfSection)">
      print card
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const { $exportToPDF } = useNuxtApp()

const pdfSection = ref<HTMLElement | null>(null)
const isExporting = ref(false)

const print = async (element: HTMLElement | null, options?: Parameters<typeof $exportToPDF>[1]) => {
  if (!element) {
    return
  }
  isExporting.value = true

  element.classList.add('print')
  await $exportToPDF(element, options)
  element.classList.remove('print')

  isExporting.value = false
}
</script>

<style>
.print .pdfStyles {
  color: blue;
  background-color: black;
}
</style>
