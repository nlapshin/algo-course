export class StateMachineSearch {
  private pattern: string
  private alphabet: string
  private delta: { [key: string]: number }[]

  constructor (pattern: string, alphabet: string) {
    this.pattern = pattern
    this.alphabet = alphabet

    this.delta = this.createDelta()
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
}
