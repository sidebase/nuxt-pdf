import type { H3Event } from 'h3'
import { sendStream, setHeader } from 'h3'

export const streamReturnPDF = async (event: H3Event, pdf: PDFKit.PDFDocument | Promise<PDFKit.PDFDocument>) => {
  // As the PDF can be a promise or not, we resolve it here, to ensure we have the correct object
  const doc = await Promise.resolve(pdf)

  if (doc.info.Title) {
    setHeader(event, 'Content-disposition', `filename=${doc.info.Title}.pdf`)
  }

  setHeader(event, 'Content-Type', 'application/pdf')
  return sendStream(event, doc as any)
}
