<template>
  <div>
    <div style="position: fixed">
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer"
        @click="exportToPDF('pdf_export.pdf', pdfSection, undefined, {html2canvas: {scale: 0.7, useCORS: true}})"
      >
        Generate normal PDF
      </button>
      <br>
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer; margin-top: 10px"
        @click="printProtected(pdfSection)"
      >
        Generate protected PDF
      </button>
      <br>
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer; margin-top: 10px"
        @click="openInWindow(pdfSection)"
      >
        Generate custom PDF and open in window
      </button>
    </div>
    <div ref="pdfSection" style="width: 500px; margin: auto">
      <TestingStage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { exportToPDF } from '#imports'
import { htmlToPdf } from '../src/runtime/composables/htmlToPdf';

const pdfSection = ref<HTMLElement | null>(null)

const printProtected = (HTMLElement: HTMLElement | undefined) => {
  exportToPDF('pdf_protected_export.pdf', HTMLElement,
    {
      encryption: {
        ownerPassword: 'test',
        userPassword: 'test2',
        userPermissions: ['print']
      }
    }, {
      html2canvas: {
        scale: 0.7,
        useCORS: true
      }
    })
}

const openInWindow = async (HTMLElement: HTMLElement) => {
  const pdf = await htmlToPdf(HTMLElement,
    {
      html2canvas: {
        scale: 0.7,
        useCORS: true
      }
    })
  const totalPages = pdf.getNumberOfPages()
  const pdfHeight = pdf.getPageHeight()
  await pdf.html('<b>I am a custom pdf!!!</b>', {
    x: 20,
    y: (pdfHeight - 50) * totalPages // place in the bottom
  })
  const blob = pdf.output('blob')
  window.open(URL.createObjectURL(blob), '_blank')
}
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
