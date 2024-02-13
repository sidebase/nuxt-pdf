import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler(async (event) => {
  const pdf = createPDF({
    layout: 'landscape'
  })
  pdf.text('Welcome to NuxtPDF!')

  pdf.end()

  return streamReturnPDF(event, pdf)
})
