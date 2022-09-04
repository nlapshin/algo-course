import { IHashTable } from './types'

export class HashTableBase implements IHashTable {
  protected size: number

  constructor (size: number) {
    this.size = size
  }

  public hash (key: string): number {
    let result = 0

    key.split('').forEach(char => {
      result += char.charCodeAt(0)
    })

    return result % this.size
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  insert (key: string): void {
    throw new Error('should be implemented')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search (key: string): string | null {
    throw new Error('should be implemented')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete (key: string): string | null {
    throw new Error('should be implemented')
  }
}
