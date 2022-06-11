import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IBubbleSorting } from './model'

export class BubbleSorting implements IBubbleSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.utils.swap(arr, j, j + 1)
        }
      }
    }

    return arr
  }
}
