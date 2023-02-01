<template>
  <div>
    <div style="position: fixed">
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer"
        @click="usePDFExport(pdfSection, undefined, {html2canvas: {scale: 0.7, useCORS: true}})"
      >
        Generate normal PDF
      </button>
      <br></br>
      <button
        style="border-radius: 0; font-size: 20px; cursor: pointer; margin-top: 10px"
        @click="printProtected(pdfSection)"
      >
        Generate protected PDF
      </button>
    </div>
    <div ref="pdfSection" style="width: 500px; margin: auto">
      <TestingStage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePDFExport } from '#imports'

const pdfSection = ref<HTMLElement | null>(null)

const printProtected = (HTMLElement: HTMLElement | undefined) => {
  usePDFExport(HTMLElement,
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
