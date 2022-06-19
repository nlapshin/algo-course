import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IMergeSorting } from './model'

export class MergeSorting implements IMergeSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  simple (arr: number[]): number[] {
    const n = arr.length - 1

    this.simpleSort(arr, 0, n)

    return arr
  }

  private simpleSort (arr: number[], l: number, r: number): void {
    if (l >= r) return

    const m = l + parseInt(((r - l) / 2).toString(), 10)

    this.simpleSort(arr, l, m)
    this.simpleSort(arr, m + 1, r)

    this.merge(arr, l, m, r)
  }

  merge (arr: number[], l: number, m: number, r: number) {
    const n1 = m - l + 1
    const n2 = r - m

    const L = []
    const R = []

    for (let i = 0; i < n1; i++) { L.push(arr[l + i]) }
    for (let j = 0; j < n2; j++) { R.push(arr[m + 1 + j]) }

    let i = 0
    let j = 0
    let k = l

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i]
        i++
      } else {
        arr[k] = R[j]
        j++
      }
      k++
    }

    while (i < n1) {
      arr[k] = L[i]
      i++
      k++
    }

    while (j < n2) {
      arr[k] = R[j]
      j++
      k++
    }
  }
}
