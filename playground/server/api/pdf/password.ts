import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler(async (event) => {
  const pdf = createPDF({
    userPassword: 'hunter2'
  })
  pdf.text('I am protected!')

  pdf.end()

  return streamReturnPDF(event, pdf)
})
