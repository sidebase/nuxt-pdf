import { useNuxtApp } from '#app'
import { Html2PdfOptions } from '../plugin.client'
export const usePDFExport = async (element: HTMLElement, options: Html2PdfOptions) => {
  await useNuxtApp().$exportToPDF(element, options)
}
