import type { WriteStream } from 'node:fs'
import PDFDocument from 'pdfkit'
import type { PDFDocumentType } from '../../types'

/**
 * Create a blank pdfkit-PDF to be filled with life later on.
 *
 * @param options Configure PDF
 * @param data Data to attach to PDF object, for later, global consumption during PDF creation
 * @param streamToFile Stream to write PDF to while creating the pdf. In the end this stream can be stored to a file or streamed to an email server
 */
export const createPDF = <TData> (
  options: PDFKit.PDFDocumentOptions,
  data?: TData,
  streamToFile?: WriteStream
) => {
  const doc = new PDFDocument(options) as PDFDocumentType<TData>

  if (streamToFile) {
    doc.pipe(streamToFile)
  }
  if (data) {
    doc.data = data
  }

  return doc
}
