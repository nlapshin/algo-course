import { IDynamicArray } from './model'

export class BaseArray<T = number> implements IDynamicArray<T> {
  protected arr: T[]

  constructor(initArr: T[] =  new Array(0)) {
    this.arr = initArr
  }

  get(): T[] {
    return this.arr
  }

  size(): number {
    return this.arr.length
  }

  add(item: T, index: number) {
    this.arr[index] = item
  }

  addStart(item: T) {
    this.add(item, 0)
  }

  addMiddle(item: T) {
    this.add(item, Math.ceil(this.size() / 2))
  }

  addEnd(item: T) {
    this.add(item, this.size())
  }

  remove(index: number): T {
    return this.arr[index]
  }

  removeStart(): T {
    return this.remove(0)
  }

  removeMiddle(): T {
    return this.remove(Math.ceil(this.size() / 2))
  }

  removeEnd(): T {
    return this.remove(this.size() - 1)
  }
}
