import { defineNuxtPlugin } from '#app'
import jsPDF, { HTMLOptions } from 'jspdf'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      exportToPDF: async (element: HTMLElement, options?: HTMLOptions) => {
        const orientation = (element.offsetWidth > element.offsetHeight) ? 'l' : 'p'

        // eslint-disable-next-line new-cap
        const pdf = new jsPDF(orientation, 'px', 'A4')
        await pdf.html(element, {
          ...options,
          html2canvas: {
            useCORS: true
          }
        })
        return pdf.save(options?.filename || 'pdf-export.pdf')
      }
    }
  }
})
