<template>
  <div>
    <button
      style="border-radius: 0; font-size: 20px; position: fixed; cursor: pointer"
      @click="print(pdfSection)"
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

const pdfSection = ref<HTMLElement | undefined>(undefined)

const print = (HTMLElement: HTMLElement | undefined) => {
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
