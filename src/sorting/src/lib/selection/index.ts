import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { ISelectionSorting } from './model'

export class SelectionSorting implements ISelectionSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  byMin (arr: number[]): number[] {
    const n = arr.length

    for (let i = 0; i < n; i++) {
      const min = this.utils.findMinIndex(arr, i)

      if (min !== i) {
        this.utils.swap(arr, i, min)
      }
    }

    return arr
  }

  byMax (arr: number[]): number[] {
    const n = arr.length

    for (let i = n - 1; i > 0; i--) {
      const max = this.utils.findMaxIndex(arr, i)

      if (max !== i) {
        this.utils.swap(arr, i, max)
      }
    }

    return arr
  }
}
