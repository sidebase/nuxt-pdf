import PDFDocument from 'pdfkit'
import type { HorizontalLine } from './server/components/line'

interface PDFOptions extends PDFKit.PDFDocumentOptions {
  margins: {
    left: number
    right: number
    top: number
    bottom: number
  }
}
type PDFDocument = typeof PDFDocument & {
  options: PDFOptions
}

export interface ModuleOptions {
  devtools: boolean
  defaultDocOptions: PDFOptions
}

export type PDFDocumentType<TData> = PDFDocument & {
  data?: TData
  footerStartY: number

  /**
   * Draw a Horizontal line across the document
   * @param moveDown The amount of lines to move down before and after drawing the line. Default: 1
   */
  horizontalLine: HorizontalLine
}
