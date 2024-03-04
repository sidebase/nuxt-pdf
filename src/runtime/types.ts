import PDFDocument from 'pdfkit'
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
  defaultDocOptions: PDFOptions
}

export type PDFDocumentType<TData> = PDFDocument & {
  data?: TData
  layout?: LayoutOptions
}
