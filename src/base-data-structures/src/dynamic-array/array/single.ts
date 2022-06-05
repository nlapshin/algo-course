import { IDynamicArray } from './model'
import { BaseArray } from './base'

export class SingleArray<T = number> extends BaseArray<T> implements IDynamicArray<T> {
  add(item: T, index: number) {
    this.expand(index)
    this.arr[index] = item
  }

  remove(index: number): T {
    return this.shrink(index)
  }

  private expand(index: number): void {
    const size = this.size()
    const newSize = size + 1

    const resizeArr: T[] = new Array(newSize)

    for (let i = 0; i < index; i++) {
      resizeArr[i] = this.arr[i]
    }

    for (let i = index + 1; i < newSize; i++) {
      resizeArr[i] = this.arr[i]
    }

    this.arr = resizeArr
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
