import { createPDF, streamReturnPDF } from '#pdf'

export default eventHandler((event) => {
  const pdf = createPDF({info: { Title: 'Welcome to NuxtPDF!'  }}, undefined, {
    header: {
      height: 30,
      render: (doc) => {
        doc.moveDown(1.5)
        doc.text('Welcome to NuxtPDF!')
        doc.horizontalLine(0.5)
      }
    },
    footer: {
      height: 30,
      render: (doc) => {
        doc.text('Created with <3 by sidebase')
      }
    }
  })

  pdf.text('The PDF Module by sidebase!')
  pdf.addPage()
  pdf.text('Its pretty nice.')
  pdf.applyLayout()
  pdf.end()

  return streamReturnPDF(event, pdf)
})
