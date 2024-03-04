import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler(async (event) => {
  const pdf = createPDF()
  pdf.text('Welcome to NuxtPDF!').moveDown(10)

  pdf.end()

  return streamReturnPDF(event, pdf)
})
