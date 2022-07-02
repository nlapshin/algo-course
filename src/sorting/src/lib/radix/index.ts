import { IRadixSorting } from './model'

export class RadixSorting implements IRadixSorting {
  simple (arr: number[], max: number): number[] {
    const digitCount = this.getDigitCount(max)

    for (let i = 0; i < digitCount; i++) {
      const newArr: number[] = []
      const digitArr: number[][] = Array.from({ length: 10 }, (_, i) => [])

      for (const num of arr) {
        const digit = this.getDigit(num, i)

        digitArr[digit].push(num)
      }

      arr = digitArr.flat()
    }

    return arr
  }

  private getDigit (number: number, place: number): number {
    return Math.floor(number / Math.pow(10, place)) % 10
  }

  private getDigitCount (number: number): number {
    let count = 0

    while (true) {
      if (number < 1) {
        break
      }

      number = number / 10
      count++
    }

    return count
  }
}
