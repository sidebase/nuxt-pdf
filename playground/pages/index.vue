<template>
  <div>
    <button
      style="border-radius: 0; font-size: 20px; position: fixed; cursor: pointer"
      @click="usePDFExport(pdfSection, {html2canvas: {scale: 0.7}})"
    >
      Generate PDF
    </button>
    <div ref="pdfSection" style="width: 500px; margin: auto">
      <TestingStage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePDFExport } from '#imports'

const pdfSection = ref<HTMLElement | null>(null)
</script>

<style>
html {
  padding: 0
}
body {
  padding: 0;
  margin: 0;
}
</style>
