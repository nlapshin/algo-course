// import { InsertionSorting } from '../insertion'
import { IRadixSorting } from './model'

export class RadixSorting implements IRadixSorting {
  // private insertionSort = new InsertionSorting()

  simple (arr: number[], max: number): number[] {
    console.log(this.getDigit(12345, 1))

    return arr
  }

  private getDigit (number: number, place: number): number {
    console.log(Math.floor(number / Math.pow(10, place)) / 10)

    return 0
  }
}
