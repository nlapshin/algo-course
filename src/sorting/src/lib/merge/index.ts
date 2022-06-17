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
    // console.log(arr, l, m, r)

    const n1 = m - l + 1
    const n2 = r - m

    const arr1 = arr.slice(l, n1)
    const arr2 = arr.slice(m, n2)

    console.log(arr1, n1, arr2, n2)

    // for (let i = 0; i)

    // console.log(n1, n2)
    // const mergedArr: number[] = []

    // while (left.length && right.length) {
    //   if (left[0] < right[0]) {
    //     mergedArr.push(left.shift() as number)
    //   } else {
    //     mergedArr.push(right.shift() as number)
    //   }
    // }

    // return [...mergedArr, ...left, ...right]
  }
}
