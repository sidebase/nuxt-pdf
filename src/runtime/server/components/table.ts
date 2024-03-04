import type { PDFDocumentType } from "../../types"

type TableColumns = {
  value: string,
}

type TableConfig = {
  title: string,
  headers: TableColumns[]
  rows: TableColumns[]
}

function computeRowHeight<TData> (doc: PDFDocumentType<TData>,row: TableColumns[]) {
  let result = 0

  row.forEach(({value}) => {
    const cellHeight = doc.heightOfString(value, {
      align: 'left'
    })
    result = Math.max(result, cellHeight)
  })
  return result
}

export function table<TData> (doc: PDFDocumentType<TData>, config: TableConfig) {
  const { title, headers, rows } = config



  return doc
}
