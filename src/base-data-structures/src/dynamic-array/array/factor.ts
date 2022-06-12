import { IDynamicArray } from './model'
import { BaseArray } from './base'
import { SingleArray } from './single'

export class FactorArray<T = number> extends BaseArray<T> implements IDynamicArray<T> {
  private vectorMaxSize: number
  private vectorFillness: number
  private vector: SingleArray<T>

  constructor(initArr: T[] =  new Array(0), vectorMaxSize: number = 10) {
    super(initArr)

    this.vectorMaxSize = vectorMaxSize
    this.vectorFillness = 0
    this.vector = new SingleArray()
  }

  size(): number {
    return this.vector.size()
  }

  add(item: T, index: number) {
    this.vector.add(item, index)
    this.vectorFillness++

    if (this.vectorFillness === this.vectorMaxSize) {
      this.expand()
    }
  }

  remove(index: number): T {
    return this.shrink(index)
  }

  private expand(): void {
    const newSize = 2 * this.vectorMaxSize

    let resizeArr: T[] = new Array(this.arr.length + newSize)

    resizeArr = ([] as T[]).concat(this.arr, this.vector.get())
    
    this.arr = resizeArr

    this.vectorFillness = 0
    this.vectorMaxSize = newSize
    this.vector = new SingleArray()
  }

  private shrink(index: number): T {
    const size = this.size()
    const newSize = size - 1

    const resizeArr: T[] = new Array(newSize)
    const value = this.arr[index]

    for (let i = 0; i < index; i++) {
      resizeArr[i] = this.arr[i]
    }

    for (let i = index + 1; i < size; i++) {
      resizeArr[i - 1] = this.arr[i]
    }

    this.arr = resizeArr

    return value
  }
}
