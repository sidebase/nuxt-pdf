import PDFDocument from 'pdfkit'
import { sendStream, setHeader } from 'h3'
import { defu } from 'defu'
import type { H3Event } from 'h3'
import type { WriteStream } from 'node:fs'
import type { PDFOptions, PDFDocumentType } from '../types'

import { drawHorizontalLine } from './components/line'
import { applyLayout } from './components/layout'

export interface LayoutOptions {
  header?: {
    render: <T>(doc: PDFDocumentType<T>) => void
    height: number
  }
  footer?: {
    render: <T>(doc: PDFDocumentType<T>) => void
    height: number
  }
}

/**
 * Create a blank pdfkit-PDF to be filled with life later on.
 *
 * @param options Configure PDF. Optional, otherwise the defaults set in the Nuxt Config will be used.
 * @param data Data to attach to PDF object, for later, global consumption during PDF creation
 * @param streamToFile Stream to write PDF to while creating the pdf. In the end this stream can be stored to a file, or streamed to an email server, or ...
 */
export function createPDF<TData>(options?: PDFKit.PDFDocumentOptions, data?: TData, layout?: LayoutOptions, streamToFile?: WriteStream): PDFDocumentType<TData> {
  // Determine PDF Options
  const optionsWithDefaults = defu(options, useRuntimeConfig().public.pdf.defaultDocOptions) as PDFOptions
  const formattedOptions: PDFOptions = {
    ...optionsWithDefaults,
    margins: {
      ...optionsWithDefaults.margins,
      ...(layout?.header ? { top: optionsWithDefaults.margins.top + layout.header.height } : { }),
      ...(layout?.footer ? { bottom: optionsWithDefaults.margins.bottom - layout.footer.height } : { })
    }
  }

  // Init PDF
  const doc = new PDFDocument(formattedOptions) as PDFDocumentType<TData>
  if (streamToFile) { doc.pipe(streamToFile) }
  if (data) { doc.data = data }
  if (layout) { doc.layout = layout }

  // Inject Component functions
  doc.horizontalLine = (moveDown: number = 1) => drawHorizontalLine(doc, moveDown)
  doc.applyLayout = () => applyLayout(doc)

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

