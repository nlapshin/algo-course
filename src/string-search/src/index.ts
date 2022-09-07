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

  public fullScanWithShiftTable (text: string, mask: string): number {
    const chatTable = this.makeCharTable(mask)

    let i = 0

    while (i <= text.length - mask.length) {
      let count = mask.length - 1

      while (count >= 0 && mask[count] === text[i + count]) {
        count--

        if (count === -1) {
          return i
        }
      }

      const charCode = text.charCodeAt(i + mask.length - 1)
      i = i + chatTable[charCode]
    }

    return -1
  }

  private makeCharTable (mask: string): number[] {
    const table = []

    for (let i = 0; i < 65536; i++) {
      table.push(mask.length)
    }

    for (let i = 0; i < mask.length - 1; i++) {
      const code = mask.charCodeAt(i)
      table[code] = mask.length - 1 - i
    }

    return table
  }
}
