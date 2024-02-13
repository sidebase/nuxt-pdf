<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const renderer = ref({})
const url = ref('/api/pdf/demo')
const { pdf } = usePDF(url.value)
</script>

<template>
  <div>
    <VuePDF
      ref="renderer"
      :pdf="pdf"
    />
  </div>
</template>
