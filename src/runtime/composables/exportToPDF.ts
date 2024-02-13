import type { HTMLOptions, jsPDFOptions } from 'jspdf'
import htmlToPDF from './htmlToPDF'

export default async function(fileName: string, element: HTMLElement, documentOptions?: jsPDFOptions, htmlOptions?: HTMLOptions) {
  const pdf = await htmlToPDF(element, documentOptions, htmlOptions)
  return pdf.save(fileName)
}
