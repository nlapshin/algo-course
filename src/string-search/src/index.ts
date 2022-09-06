export type stringSearchFn = (text: string, mask: string) => number;

export class StringSearch {
  public fullScan (text: string, mask: string): number {
    let i = 0

    while (i < text.length) {
      let count = 0

      while (mask[count] === text[i + count]) {
        if (count === (mask.length - 1)) {
          return i
        }

        count++
      }

      i++
    }

    return -1
  }
}
