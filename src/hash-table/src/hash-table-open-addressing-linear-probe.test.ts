import { expect } from 'chai'
import { HashTableOpenAddressingLinearProbe } from './hash-table-open-addressing-linear-probe'

describe('HashTableOpenAddressingLinearProbe', () => {
  it('should correct adding values to table and search them', () => {
    const hashTable = new HashTableOpenAddressingLinearProbe(100)

    hashTable.insert('dot')
    hashTable.insert('tod')
    hashTable.insert('o')

    expect(hashTable.search('dot')).to.equal('dot')
    expect(hashTable.search('tod')).to.equal('tod')
    expect(hashTable.search('o')).to.equal('o')
    expect(hashTable.search('dott')).to.equal(null)
  })

  it('should correct deleting values from table', () => {
    const hashTable = new HashTableOpenAddressingLinearProbe(100)

    hashTable.insert('dot')
    hashTable.insert('tod')

    expect(hashTable.search('dot')).to.equal('dot')
    expect(hashTable.search('tod')).to.equal('tod')

    hashTable.delete('tod')

    expect(hashTable.search('tod')).to.equal(null)

    hashTable.delete('dot')

    expect(hashTable.search('dot')).to.equal(null)
  })
})
