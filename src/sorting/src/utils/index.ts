import * as fs from 'fs'
import fse from 'fs-extra'

import { IUtilsSorting } from './model'

export class UtilsSorting implements IUtilsSorting {
  public generateRandomArray (count = 10, min = 0, max: number = count): number[] {
    const arr: number[] = []

    for (let i = 0; i < count; i++) {
      arr.push(this.getPseudoRandom(min, max))
    }

    return arr
  }

  public generateRandomFile (count = 10, max: number = count, pathname = __dirname): string {
    const arr: number[] = this.generateRandomArray(count, 0, max)

    const fileName = `${pathname}/test.${count}.${max}.in`

    const numbers = arr.join('\r\n')

    fse.ensureDirSync(pathname)
    fs.writeFileSync(fileName, numbers)

    return fileName
  }

  public sortArray (arr: number[]): number[] {
    return [...arr].sort((a, b) => a - b)
  }

  public binarySearch (sortedArr: number[], value: number): number {
    let start = 0
    let end = sortedArr.length - 1

    while (start <= end) {
      const medium = Math.floor((start + end) / 2)

      if (value === sortedArr[medium]) return medium

      if (value > sortedArr[medium]) {
        start = medium + 1
      } else {
        end = medium - 1
      }
    }

    return start
  }

  public findMinIndex (arr: number[], startIndex: number): number {
    let minIndex = startIndex

    for (let i = startIndex + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }

    return minIndex
  }

  public findMaxIndex (arr: number[], size: number): number {
    let maxIndex = 0

    for (let i = 1; i < size; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i
      }
    }

    return maxIndex
  }

  public heapify (arr: number[], root: number, size: number) {
    const l = 2 * root + 1
    const r = 2 * root + 2
    let x = root

    if (l < size && arr[l] > arr[x]) x = l
    if (r < size && arr[r] > arr[x]) x = r

    if (x === root) {
      return
    }

    this.swap(arr, x, root)
    this.heapify(arr, x, size)
  }

  public deepCopy<T = unknown> (obj: T): T {
    return JSON.parse(JSON.stringify(obj))
  }

  public swap (arr: number[], i: number, j: number): void {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  private getPseudoRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
