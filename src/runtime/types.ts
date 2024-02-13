import PDFDocument from 'pdfkit'
import type { HorizontalLine } from './server/components/line'
import type { ApplyLayout } from './server/components/layout'
import type { LayoutOptions } from './server/pdf'

export interface PDFOptions extends PDFKit.PDFDocumentOptions {
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
  layout?: LayoutOptions

  /**
   * Draw a Horizontal line across the document
   * @param moveDown The amount of lines to move down before and after drawing the line. Default: 1
   */
  horizontalLine: HorizontalLine
  applyLayout: ApplyLayout
}
