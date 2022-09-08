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

  public boyerMooreSearch (text: string, mask: string): number {
    const charTable = this.makeCharTable(mask)
    const offsetTable = this.makeOffsetTable(mask)

    let i = mask.length - 1

    while (i <= text.length) {
      let count = mask.length - 1

      while (mask[count] === text[i]) {
        if (count === 0) {
          return i
        }

        i--
        count--
      }

      const charCode = text.charCodeAt(i)
      i += Math.max(offsetTable[mask.length - 1 - count], charTable[charCode])
    }

    return -1
  }

  private makeOffsetTable (mask: string): number[] {
    const table = []
    table.length = mask.length

    let lastPrefixPosition = mask.length

    for (let i = mask.length; i > 0; i--) {
      if (this.isPrefix(mask, i)) {
        lastPrefixPosition = i
      }

      table[mask.length - i] = lastPrefixPosition - 1 + mask.length
    }

    for (let i = 0; i < mask.length - 1; i++) {
      const suffix = this.suffixLength(mask, i)
      table[suffix] = mask.length - 1 - i + suffix
    }

    return table
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

  private isPrefix (mask: string, i: number): boolean {
    for (let k = 0; i < mask.length; ++k, ++i) {
      if (mask[i] !== mask[k]) {
        return false
      }
    }

    return true
  }

  private suffixLength (mask: string, i: number) {
    const n = mask.length
    let k = 0
    let m = n - 1

    for (; i >= 0 && mask[i] === mask[m]; --i, --m) {
      k += 1
    }

    return k
  }
}
