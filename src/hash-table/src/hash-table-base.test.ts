import { expect } from 'chai'
import { HashTableBase } from './hash-table-base'

describe('HashTableBase', () => {
  describe('hash', () => {
    it('should create hash by key', () => {
      const hashTable = new HashTableBase(100)

      expect(hashTable.hash('dot')).to.equal(27)
      expect(hashTable.hash('tod')).to.equal(27)
      expect(hashTable.hash('o')).to.equal(11)
    })
  })
})
