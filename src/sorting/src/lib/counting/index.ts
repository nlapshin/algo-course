import { ICountingSorting } from './model'

export class CountingSorting implements ICountingSorting {
  simple (arr: number[], max: number): number[] {
    const n = arr.length

    const sortedArr = Array.from({ length: arr.length }, (_, i) => 0)
    const count = Array.from({ length: max }, (_, i) => 0)

    for (let i = 0; i < n; i++) {
      ++count[arr[i]]
    }

    for (let i = 1; i <= max; ++i) {
      count[i] += count[i - 1]
    }

    for (let i = n - 1; i >= 0; i--) {
      sortedArr[count[arr[i]] - 1] = arr[i]
      --count[arr[i]]
    }

    return sortedArr
  }
}
