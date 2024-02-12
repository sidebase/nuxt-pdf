import type { WriteStream } from 'node:fs'
import PDFDocument from 'pdfkit'

type PDFDocumentType<TData> = typeof PDFDocument & {
  data?: TData
  footerStartY: number
}

const defaultPDFOptions: PDFKit.PDFDocumentOptions = {
  size: 'A4',
  bufferPages: true,
  margins: {
    top: 25,
    bottom: 25,
    left: 25,
    right: 25
  }
}

/**
 * Create a blank pdfkit-PDF to be filled with life later on.
 *
 * @param options Configure PDF
 * @param data Data to attach to PDF object, for later, global consumption during PDF creation
 * @param streamToFile Stream to write PDF to while creating the pdf. In the end this stream can be stored to a file, or streamed to an email server, or ...
 */
export function createPDF<TData>(options: PDFKit.PDFDocumentOptions = defaultPDFOptions, data?: TData, streamToFile?: WriteStream): PDFDocumentType<TData> {
  const doc = new PDFDocument(options) as PDFDocumentType<TData>

  if (streamToFile) {
    doc.pipe(streamToFile)
  }

  if (data) {
    doc.data = data
  }
  doc.footerStartY = doc.page.height

  return doc
}
