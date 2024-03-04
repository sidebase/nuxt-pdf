import type { PDFDocumentType } from "../../types"

/**
  * Draw a Horizontal line across the document
  * @param doc The PDF document object
  * @param moveDown The amount of lines to move down before and after drawing the line. Default: 1
*/
export function drawHorizontalLine<T>(doc: PDFDocumentType<T>, moveDown = 1): void {
  doc
    .moveDown(moveDown)
    .moveTo(doc.options.margins.left, doc.y)
    .lineTo(doc.page.width - doc.options.margins.right, doc.y)
    .stroke()
    .moveDown(moveDown + 0.5)
}
