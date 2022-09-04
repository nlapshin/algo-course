import { HashTableBase } from './hash-table-base'
import { IHashTable } from './types'

export class HashTableOpenAddressingBase extends HashTableBase implements IHashTable {
  private list: (string | null)[] = []

  public insert (key: string): void {
    let counter = 0
    const hashKey = this.hash(key)

    while (true) {
      const probe = this.probe(counter)
      const hashKeyProbe = hashKey + probe

      if (!this.list[hashKeyProbe]) {
        this.list[hashKeyProbe] = key

        break
      }

      counter++
    }
  }

  public search (key: string): string | null {
    let result = null
    let counter = 0

    const hashKey = this.hash(key)

    while (true) {
      const probe = this.probe(counter)
      const hashKeyProbe = hashKey + probe

      if (this.list[hashKeyProbe] === key) {
        result = this.list[hashKeyProbe]

        break
      }

      if (this.list.length < hashKeyProbe) {
        break
      }

      counter++
    }

    return result
  }

  public delete (key: string): string | null {
    let counter = 0
    let deleteValue = null

    const hashKey = this.hash(key)

    while (true) {
      const probe = this.probe(counter)
      const hashKeyProbe = hashKey + probe

      if (this.list[hashKeyProbe] === key) {
        deleteValue = this.list[hashKeyProbe]
        this.list[hashKeyProbe] = null

        break
      }

      if (this.list.length < hashKeyProbe) {
        break
      }

      counter++
    }

    return deleteValue
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected probe (i: number): number {
    throw new Error('should be implemented')
  }
}
