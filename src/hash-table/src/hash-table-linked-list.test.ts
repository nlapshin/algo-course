import { expect } from 'chai'
import { HashTableLinkedList } from './hash-table-linked-list'

describe('HashTableLinkedList', () => {
  it('should correct adding values to table and search them', () => {
    const hashTable = new HashTableLinkedList(100)

    hashTable.insert('dot')
    hashTable.insert('tod')
    hashTable.insert('o')

    expect(hashTable.search('dot')).to.equal('dot')
    expect(hashTable.search('tod')).to.equal('tod')
    expect(hashTable.search('o')).to.equal('o')
    expect(hashTable.search('dott')).to.equal(null)
  })
})
