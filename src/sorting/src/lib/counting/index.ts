// import { InsertionSorting } from '../insertion'
import { ICountingSorting } from './model'

export class CountingSorting implements ICountingSorting {
  // private insertionSort = new InsertionSorting()

  simple (arr: number[], max: number): number[] {
    const count = Array.from({ length: max }, (_, i) => 0)

    for (let i = 0; i < arr.length; i++) {
      ++count[arr[i]]
    }

    const sortedArr: number[] = []

    for (let i = 0; i < max; i++) {
      while (count[i] > 0) {
        sortedArr.push(i)
        count[i]--
      }
    }

    return sortedArr
  }
}
