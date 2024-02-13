import jsPDF, { type HTMLOptions, type jsPDFOptions } from 'jspdf'

export default async function(element: HTMLElement, documentOptions?: jsPDFOptions, htmlOptions?: HTMLOptions) {
  if (!(element instanceof HTMLElement)) {
    throw new TypeError('usePDFExport: element is not a HTMLElement.')
  }
  const orientation = (element.offsetWidth > element.offsetHeight) ? 'l' : 'p'

  // eslint-disable-next-line new-cap
  const pdf = new jsPDF({
    orientation: documentOptions?.orientation ?? orientation,
    unit: documentOptions?.unit ?? 'px',
    format: documentOptions?.format ?? 'A4',
    encryption: documentOptions?.encryption
  })

  await pdf.html(element, htmlOptions)
  return pdf
}
