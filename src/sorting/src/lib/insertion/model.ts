import { SortingFunc } from '../model'

export interface IInsertionSorting {
  simple: SortingFunc
  shift: SortingFunc
  shiftBinary: SortingFunc
}
