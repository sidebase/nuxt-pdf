import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler((event) => {
  const pdf = createPDF(    {
    bufferPages: true,
    size: 'A4',
  })
  pdf.text('test')
  pdf.end()

  return streamReturnPDF(event, pdf)
})
