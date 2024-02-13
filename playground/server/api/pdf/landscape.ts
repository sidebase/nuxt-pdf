import { createPDF, streamReturnPDF, type PDFOptions } from '#pdf'

export default eventHandler(async (event) => {
  const options: PDFOptions = {
    margins: {
      top: 100,
      bottom: 100,
      left: 50,
      right: 50,
    },
    layout: 'landscape'
  }
  const pdf = createPDF(options)
  pdf.text('Welcome to NuxtPDF!')

  pdf.end()

  return streamReturnPDF(event, pdf)
})
