import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IInsertionSorting } from './model'

export class InsertionSorting implements IInsertionSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length

    for (let i = 1; i <= n; i++) {
      let j = i - 1

      while (j >= 0 && (arr[j] < arr[j - 1])) {
        this.utils.swap(arr, j, j - 1)

        j--
      }
    }

    return arr
  }

  shift (arr: number[]): number[] {
    const n = arr.length

    for (let i = 1; i < n; i++) {
      const current = arr[i]
      let j = i - 1

      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]

        j--
      }

      arr[j + 1] = current
    }

    return arr
  }
}
