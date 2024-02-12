import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler((event) => {
  const pdf = createPDF()
  pdf.text('test')
  pdf.end()

  return streamReturnPDF(event, pdf)
})
