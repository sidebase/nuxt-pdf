import { createPDF, streamReturnPDF, drawHorizontalLine, applyLayout } from '#pdf'

export default eventHandler(async (event) => {
  const pdf = createPDF({info: { Title: 'Welcome to NuxtPDF!'  }}, undefined, {
    header: {
      height: 30,
      render: async (doc) => {
        // This can be Async or not!
        await new Promise(resolve => setTimeout(resolve, 100))
        doc.moveDown(1.5)
        doc.text('Welcome to NuxtPDF!')
        drawHorizontalLine(doc, 0.5)
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

  await applyLayout(pdf)
  pdf.end()

  return streamReturnPDF(event, pdf)
})
