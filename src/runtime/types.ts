import PDFDocument from 'pdfkit'

/**
 * Create a blank pdfkit-PDF to be filled with life later on. Extendes the types provided by PDFDocument.
 *
 * @param data Data to attach to PDF object, for later, global consumption during PDF creation
 */
export type PDFDocumentType<TData> = typeof PDFDocument & {
  data?: TData
}
