import type { PDFDocumentType } from "../types"

async function printFooters<T>(doc: PDFDocumentType<T>) {
  if (!doc.layout?.footer) return

  const { start, count } = doc.bufferedPageRange()
  for (let c = 0; c < count; c++) {
    doc.switchToPage(start + c)
    doc.y = doc.page.height - (doc.layout.footer.height ?? 50)

    await Promise.resolve(doc.layout.footer.render(doc))
  }
}
async function printHeaders<T>(doc: PDFDocumentType<T>) {
  if (!doc.layout?.header) return

  const { start, count } = doc.bufferedPageRange()
  for (let c = 0; c < count; c++) {
    doc.switchToPage(start + c)
    doc.y = 0

    await Promise.resolve(doc.layout.header.render(doc))
  }
}

export type ApplyLayout = () => Promise<void>
export async function applyLayout<T>(doc: PDFDocumentType<T>) {
  await printHeaders(doc)
  await printFooters(doc)
}
