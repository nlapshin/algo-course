export interface IDynamicArray<T = number> {
  size(): number

  add(item: T, index?: number): void
  addStart(item: T): void
  addEnd(item: T): void
  addMiddle(item: T): void

  remove(index: number): T
  removeStart(): T
  removeEnd(): T
  removeMiddle(): T
}
