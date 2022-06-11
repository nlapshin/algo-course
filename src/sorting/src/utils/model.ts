export interface IUtilsSorting {
  generateRandomArray(count: number, min?: number, max?: number): number[]
  sortArray(arr: number[]): number[]
  binarySearch (sortedArr: number[], value: number): number
  deepCopy<T = unknown> (obj: T): T
  swap(arr: number[], i: number, j: number): void
}
