import { HTMLOptions, jsPDFOptions } from 'jspdf'
import { htmlToPdf } from './htmlToPdf'

export const exportToPDF = async (
  fileName: string,
  element: HTMLElement,
  documentOptions?: jsPDFOptions,
  htmlOptions?: HTMLOptions
) => {
  const pdf = await htmlToPdf(element, documentOptions, htmlOptions)
  return pdf.save(fileName)
}
