import { expect } from 'chai'
import { TriePrefixTree } from './trie-prefix-tree'

describe('TriePrefixTree', () => {
  it('should correct adding values to tree and search them', () => {
    const tree = new TriePrefixTree()

    tree.insert('do')
    tree.insert('dot')
    tree.insert('char')

    expect(tree.search('do')).to.equal(true)
    expect(tree.search('dot')).to.equal(true)
    expect(tree.search('char')).to.equal(true)
    expect(tree.search('d')).to.equal(false)
    expect(tree.search('dott')).to.equal(false)

    expect(tree.startsWith('d')).to.equal(true)
    expect(tree.startsWith('do')).to.equal(true)
    expect(tree.startsWith('dot')).to.equal(true)
    expect(tree.startsWith('dott')).to.equal(false)
    expect(tree.startsWith('c')).to.equal(true)
    expect(tree.startsWith('ch')).to.equal(true)
    expect(tree.startsWith('cha')).to.equal(true)
    expect(tree.startsWith('char')).to.equal(true)

    tree.insert('d')
    expect(tree.search('d')).to.equal(true)
  })
})
