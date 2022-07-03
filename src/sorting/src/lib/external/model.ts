export type ExternalSortingFunc = (inputFile: string, outputFile: string, rowCount: number, maxCount: number) => void

export interface IExternalSorting {
  tFiles: ExternalSortingFunc
}
