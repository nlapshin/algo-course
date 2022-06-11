export interface IUtilsSorting {
  generateRandomArray(count: number, min?: number, max?: number): number[]
  sortArray(arr: number[]): number[]
  swap(arr: number[], i: number, j: number): void
}
