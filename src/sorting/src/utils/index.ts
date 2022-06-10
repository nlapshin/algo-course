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

  private getPseudoRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
