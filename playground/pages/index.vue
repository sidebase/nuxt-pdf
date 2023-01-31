<template>
  <div ref="page">
    <span>
      Nuxt module playground!
    </span>
    <div ref="pdfSection">
      Thanks for testing out nuxt-pdf!
    </div>
    <button @click="$exportToPDF(pdfSection)">
      print card
    </button>
    <button @click="$exportToPDF(page)">
      print page
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const { $exportToPDF } = useNuxtApp()

const page = ref<HTMLElement | null>(null)
const pdfSection = ref<HTMLElement | null>(null)
</script>
