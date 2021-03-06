import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IQuickSorting } from './model'

export class QuickSorting implements IQuickSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length

    this.simpleSort(arr, 0, n - 1)

    return arr
  }

  optimize (arr: number[]): number[] {
    const n = arr.length

    this.optimizeSort(arr, 0, n - 1)

    return arr
  }

  private simpleSort (arr: number[], l: number, r: number): void {
    if (l >= r) return

    const pivot = this.partition(arr, l, r)

    this.simpleSort(arr, l, pivot - 1)
    this.simpleSort(arr, pivot + 1, r)
  }

  private optimizeSort (arr: number[], l: number, r: number): void {
    while (l < r) {
      const pivot = this.partition(arr, l, r)

      if (pivot - l < r - pivot) {
        this.optimizeSort(arr, l, pivot - 1)
        l = pivot + 1
      } else {
        this.optimizeSort(arr, pivot + 1, r)
        r = pivot - 1
      }
    }
  }

  private partition (arr: number[], l: number, r: number): number {
    const pivot = arr[r]
    let i = l - 1

    for (let j = l; j <= r - 1; j++) {
      if (arr[j] <= pivot) {
        i++
        this.utils.swap(arr, j, i)
      }
    }

    this.utils.swap(arr, i + 1, r)

    return i + 1
  }
}
