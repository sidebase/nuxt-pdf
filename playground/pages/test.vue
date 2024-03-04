<script lang="ts" setup>
import { exportToPDF } from '#imports'

const pdfSection = ref<HTMLElement | null>(null)
</script>

<template>
  <div>
    <div>
      Export The page:
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer"
        @click="exportToPDF('pdf_export.pdf', pdfSection as HTMLElement, undefined, {html2canvas: {scale: 0.7, useCORS: true}})"
      >
        Generate normal PDF
      </button>
    </div>
    <hr>
    <div ref="pdfSection">
      <TestStage />
    </div>
  </div>
</template>
