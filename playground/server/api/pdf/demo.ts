import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler((event) => {
  const pdf = createPDF({ info: { Title: 'Welcome to NuxtPDF!'  }})
  pdf.text('Welcome to NuxtPDF!')
  pdf.horizontalLine(0.5)
  pdf.text('The PDF Module by sidebase!')
  pdf.end()

  return streamReturnPDF(event, pdf)
})
