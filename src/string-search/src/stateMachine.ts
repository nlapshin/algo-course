export class StateMachineSearch {
  private pattern: string
  private alphabet: string
  private delta: { [key: string]: number }[]

  constructor (pattern: string, alphabet: string) {
    this.pattern = pattern
    this.alphabet = alphabet

    this.delta = this.createDelta()

    console.log(this.delta)
  }

  public search (text: string): number {
    let shift = 0

    for (let i = 0; i < text.length; i++) {
      shift = this.delta[shift][text[i]]

      if (shift === this.pattern.length) {
        return i - this.pattern.length + 1
      }
    }

    return -1
  }

  private createDelta () {
    const arr = []

    for (let i = 0; i < this.pattern.length; i++) {
      const inst: { [key: string]: number } = {}

      const current = this.pattern.slice(0, i)

      for (const char of this.alphabet) {
        const possible = current + char
        let shift = i + 1

        while (this.pattern.slice(0, shift) !== possible.slice(possible.length - shift)) {
          shift--
        }

        inst[char] = shift
      }

      arr.push(inst)
    }

    return arr
  }

  // private left(pattern: string, number)
}

// aabaabaaabaa
//    a b c
// 0  1 0 0
// 1  2 0 0
// 2  2 3 0
// 3  4 0 0
// 4  5 0 0
// 5  2 6 0
// 6  7 0 0
// 7  8 0 0
// 8  9 0 0
// 9  0 10 0
// 10 11 0 0
// 11 12 0 0
// 12 - - -
