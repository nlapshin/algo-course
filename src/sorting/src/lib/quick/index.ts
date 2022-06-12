import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IQuickSorting } from './model'

export class QuickSorting implements IQuickSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length
    const pivot = n - 1

    if (pivon > 1) { return arr }
  }

  private simpleSort (l: number, r: number): void {
    if (l >= r) return
  }
}
