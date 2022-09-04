import { HashTableOpenAddressingBase } from './hash-table-open-addressing-base'
import { IHashTable } from './types'

export class HashTableOpenAddressingLinearProbe extends HashTableOpenAddressingBase implements IHashTable {
  private PROBE_CONSTANT = 2

  protected probe (i: number): number {
    return this.PROBE_CONSTANT * i
  }
}
