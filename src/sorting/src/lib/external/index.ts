import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { IExternalSorting } from './model'

export class ExternalSorting implements IExternalSorting {
  private utils: IUtilsSorting = new UtilsSorting()

  tFiles (arr: number[], files: number): number[] {
    const n = arr.length - 1

    this.simpleSort(arr, 0, n)

    return arr
  }
}
