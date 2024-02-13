import type { PDFDocumentType } from "../../types"

function printFooters<T>(doc: PDFDocumentType<T>) {
  if (!doc.layout?.footer) return

  const { start, count } = doc.bufferedPageRange()
  for (let c = 0; c < count; c++) {
    doc.switchToPage(start + c)
    console.log(doc.page.height)
    doc.y = doc.page.height - (doc.layout.footer.height ?? 50)
    doc.layout.footer.render(doc)
  }
}
function printHeaders<T>(doc: PDFDocumentType<T>) {
  if (!doc.layout?.header) return

  const { start, count } = doc.bufferedPageRange()
  for (let c = 0; c < count; c++) {
    doc.switchToPage(start + c)
    doc.y = 0
    doc.layout.header.render(doc)
  }
}

export type ApplyLayout = () => void
export function applyLayout<T>(doc: PDFDocumentType<T>) {
  printHeaders(doc)
  printFooters(doc)
}
