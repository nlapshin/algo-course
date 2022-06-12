import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IHeapSorting } from './model'

export class HeapSorting implements IHeapSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length

    for (let i = n / 2 - 1; i >= 0; i--) {
      this.utils.heapify(arr, i, n)
    }

    for (let j = arr.length - 1; j > 0; j--) {
      this.utils.swap(arr, 0, j)
      this.utils.heapify(arr, 0, j)
    }

    return arr
  }
}
