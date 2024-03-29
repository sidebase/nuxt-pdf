import type { PDFDocumentType } from "../../types"

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

/**
  * Applies the Header and Footer designs to every page. Requires layout option to be set on PDF initialization
  * @param doc The PDF document object
*/
export async function applyLayout<T>(doc: PDFDocumentType<T>): Promise<void> {
  await printHeaders(doc)
  await printFooters(doc)
}
