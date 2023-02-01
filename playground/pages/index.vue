<template>
  <div>
    <button @click="print(pdfSection)">
      print page
    </button>
    <div ref="pdfSection">
      <TestingStage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'
const { $exportToPDF } = useNuxtApp()

const pdfSection = ref<HTMLElement | null>(null)

const print = async (element: HTMLElement) => {
  await $exportToPDF(element)
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
