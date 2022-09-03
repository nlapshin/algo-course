export interface IHashTable {
  hash(key: string): number
  insert(key: string): void
  search(key: string): string | null
}
