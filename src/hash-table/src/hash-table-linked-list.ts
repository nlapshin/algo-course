import { HashTableBase } from './hash-table-base'
import { LinkedList } from './data-structures/linked-list'
import { IHashTable } from './types'

export class HashTableLinkedList extends HashTableBase implements IHashTable {
  private list: LinkedList<string>[] = []

  public insert (key: string): void {
    const hashKey = this.hash(key)

    if (!this.list[hashKey]) {
      this.list[hashKey] = new LinkedList()
    }

    this.list[hashKey].append(key)
  }

  public search (key: string): string | null {
    const hashKey = this.hash(key)
    const node = this.list[hashKey] ? this.list[hashKey].search(key) : null

    return node?.data || null
  }
}
