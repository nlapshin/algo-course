import { left, right } from './helper'

export class KmpSearch {
  private pattern: string
  private pi: number[]

  constructor (pattern: string) {
    this.pattern = pattern

    this.pi = this.createPIFast()
  }

  public search (text: string): number {
    let index = -1
    let k = 0

    for (let i = 0; i < text.length; i++) {
      while (k > 0 && (this.pattern[k] !== text[i])) {
        k = this.pi[k - 1]
      }

      if (this.pattern[k] === text[i]) {
        k++
      }

      if (k === this.pattern.length) {
        index = i - this.pattern.length + 1
        break
      }
    }

    return index
  }

  public createPISlow () {
    const pi: number[] = []

    for (let i = 0; i <= this.pattern.length; i++) {
      const line = this.pattern.slice(0, i)

      for (let len = 0; len < i; len++) {
        if (left(line, len) === right(line, len)) {
          pi[i] = len
        }
      }

      if (!pi[i]) {
        pi[i] = 0
      }
    }

    return pi
  }

  public createPIFast () {
    const pi: number[] = []

    pi[0] = 0

    const s = this.pattern
    const n = s.length

    for (let i = 1; i < n; i++) {
      let len = pi[i - 1]

      while ((len > 0) && (s[i] !== s[len])) {
        len = pi[len - 1]
      }

      if (s[i] === s[len]) {
        len++
      }

      pi[i] = len
    }

    return pi
  }
}
