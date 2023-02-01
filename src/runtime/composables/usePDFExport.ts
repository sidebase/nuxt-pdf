import jsPDF, { HTMLOptions, jsPDFOptions } from 'jspdf'

export type PDFOptions = HTMLOptions
export const usePDFExport = async (element?: HTMLElement, documentOptions?: jsPDFOptions, options?: PDFOptions) => {
  if (!element) {
    throw new Error('usePDFExport: element is not a HTMLElement.')
  }
  const orientation = (element.offsetWidth > element.offsetHeight) ? 'l' : 'p'

  // eslint-disable-next-line new-cap
  const pdf = new jsPDF({
    orientation: documentOptions?.orientation || orientation,
    unit: documentOptions?.unit || 'px',
    format: documentOptions?.format || 'A4',
    encryption: documentOptions?.encryption
  })

  await pdf.html(element, options)
  return pdf.save(options?.filename || 'pdf-export.pdf')
}
