// @ts-expect-error html2pdf doesn't have type definitions, adding them here for now
import html2pdf from 'html2pdf.js'

export interface HTML2CanvasOptions {
  allowTaint?: boolean
  backgroundColor?: string
  foreignObjectRendering?: boolean
  imageTimeout?: number
  logging?: boolean
  removeContainer?: boolean
  scale?: number
  width?: number
  height?: number
  x?: number
  y?: number
  scrollX?: number
  scrollY?: number
  windowWidth?: number
  windowHeight?: number
}

export interface JsPdfOptions {
  orientation?: 'portrait' | 'landscape' | 'p' | 'l'
  unit?: 'mm' | 'cm' | 'in' | 'px' | 'pc' | 'em' | 'ex'
  putOnlyUsedFonts?: boolean
  compress?: boolean
  precision?: number
  userUnit?: number
  hotfixes?: string[]
  floatPrecision?: number
  encryption?: {
    userPassword?: string
    ownerPassword?: string
    userPermissions?: string[]
  }
}

export interface Html2PdfOptions {
  margin?: number | [number, number] | [number, number, number, number]
  filename?: string
  pagebreak?: {
    mode?: ['avoid-all' | 'css' | 'legacy' | 'manual']
    before?: string
    after?: string
    avoid?: string
  }
  image?: { type?: string; quality?: number }
  enableLinks?: boolean
  html2canvas?: HTML2CanvasOptions
  jsPDF?: JsPdfOptions
}

export const usePDFExport = (element: HTMLElement, options?: Html2PdfOptions) => {
  // html2pdf uses a define-and-call on import that relies on `self` being defined. To ensure this, we bind `this` here
  const html2pdfWithSelfBound = html2pdf.bind(this)

  return html2pdfWithSelfBound(element, options)
}
