import { IShellSorting } from './model'

export class ShellSorting implements IShellSorting {
  simple (arr: number[]): number[] {
    const n = arr.length

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2))	{
      for (let i = gap; i < n; i++) {
        const current = arr[i]
        let j = i

        while (j >= gap && current <= arr[j - gap]) {
          arr[j] = arr[j - gap]

          j = j - gap
        }

        arr[j] = current
      }
    }

    return arr
  }
}
