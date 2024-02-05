import { sendStream, setHeader } from 'h3'
import { createPDF } from '#pdf'

export default eventHandler((event) => {
  const doc = createPDF()

  setHeader(event, 'Content-Type', 'application/pdf')
  return sendStream(event, doc as any)
})
