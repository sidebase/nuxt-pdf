import { defineNuxtPlugin } from '#app'
import jsPDF, { HTMLOptions } from 'jspdf'

export type PDFOptions = HTMLOptions
export default defineNuxtPlugin(() => {
  return {
    provide: {
      exportToPDF: async (element: HTMLElement, options?: PDFOptions) => {
        const orientation = (element.offsetWidth > element.offsetHeight) ? 'l' : 'p'

        // eslint-disable-next-line new-cap
        const pdf = new jsPDF(orientation, 'px', 'A4')
        await pdf.html(element, {
          ...options,
          html2canvas: {
            // enabled by default to ensure pictures are loaded into the pdf by default
            useCORS: true,
            ...options?.html2canvas
          }
        })
        return pdf.save(options?.filename || 'pdf-export.pdf')
      }
    }
  }
})
