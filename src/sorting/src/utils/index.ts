import { IUtilsSorting } from './model'

export class UtilsSorting implements IUtilsSorting {
  public generateRandomArray (count = 10, min = 0, max: number = count): number[] {
    const arr: number[] = []

    for (let i = 0; i < count; i++) {
      arr.push(this.getPseudoRandom(min, max))
    }

    return arr
  }

  public sortArray (arr: number[]): number[] {
    return [...arr].sort((a, b) => a - b)
  }

  public swap (arr: number[], i: number, j: number): void {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
  }

  private getPseudoRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
