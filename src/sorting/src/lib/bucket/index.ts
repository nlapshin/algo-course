import { InsertionSorting } from '../insertion'
import { IBucketSorting } from './model'

export class BucketSorting implements IBucketSorting {
  private insertionSort = new InsertionSorting()

  simple (arr: number[], max: number): number[] {
    const buckets = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
      buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
      const idx = Math.floor((arr[i] * arr.length) / (max + 1))

      buckets[idx].push(arr[i])
    }

    const newArr: number[] = []

    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = this.insertionSort.shift(buckets[i])

      newArr.push(...buckets[i])
    }

    return newArr
  }
}
