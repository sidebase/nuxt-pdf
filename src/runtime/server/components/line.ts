import type { PDFDocumentType } from "../../types"

export type HorizontalLine = (moveDown?: number) => void
export function drawHorizontalLine<T>(doc: PDFDocumentType<T>, moveDown = 1) {
  doc
    .moveDown(moveDown)
    .moveTo(doc.options.margins.left, doc.y)
    .lineTo(doc.page.width - doc.options.margins.right, doc.y)
    .stroke()
    .moveDown(moveDown + 0.5)
}
