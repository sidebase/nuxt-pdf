import PDFDocument from 'pdfkit'
import { sendStream, setHeader } from 'h3'
import type { H3Event } from 'h3'
import type { WriteStream } from 'node:fs'
import type { ModuleOptions, PDFDocumentType } from '../types'
import { drawHorizontalLine } from './components/line'

/**
 * Create a blank pdfkit-PDF to be filled with life later on.
 *
 * @param options Configure PDF. Optional, otherwise the defaults set in the Nuxt Config will be used.
 * @param data Data to attach to PDF object, for later, global consumption during PDF creation
 * @param streamToFile Stream to write PDF to while creating the pdf. In the end this stream can be stored to a file, or streamed to an email server, or ...
 */
export function createPDF<TData>(options?: PDFKit.PDFDocumentOptions, data?: TData, streamToFile?: WriteStream): PDFDocumentType<TData> {
  const moduleOptions = useRuntimeConfig().public.pdf as ModuleOptions
  const doc = new PDFDocument(options ?? moduleOptions.defaultDocOptions) as PDFDocumentType<TData>

  // Setup PDF
  if (streamToFile) {
    doc.pipe(streamToFile)
  }

  if (data) {
    doc.data = data
  }
  doc.footerStartY = doc.page.height

  // Inject Component functions
  doc.horizontalLine = (moveDown: number = 1) => drawHorizontalLine(doc, moveDown)

  return doc
}

/**
 * Render a PDFDocument using an H3Event.
 * Return this function at the end of your event handler.
 *
 * @param event The H3Event passed from the Event handler
 * @param pdf The created PDF Object from createPDF. This can be a promise or a static object
 */
export const streamReturnPDF = async (event: H3Event, pdf: PDFKit.PDFDocument | Promise<PDFKit.PDFDocument>) => {
  try {
    const doc = await Promise.resolve(pdf)
    if (doc.info.Title) {
      setHeader(event, 'Content-disposition', `filename=${doc.info.Title}.pdf`)
    }

    setHeader(event, 'Content-Type', 'application/pdf')
    return sendStream(event, doc as any)
  } catch(error) {
    console.error('nuxt-pdf: Error during PDF generation:', error)
    throw new Error('PDF generated failed.')
  }
}

