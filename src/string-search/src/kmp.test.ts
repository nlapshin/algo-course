import { expect } from 'chai'
import { KmpSearch } from './kmp'
import { fixtures, IFixture } from './fixtures'

describe('KmpSearch', () => {
  describe('createPISlow', () => {
    it('should calculate pi array using slow algo', () => {
      expect(new KmpSearch('aabaabaaaba').createPISlow()).to.deep.equal([
        0, 0, 1, 0, 1,
        2, 3, 4, 5, 2,
        3, 4
      ])

      expect(new KmpSearch('aabaabaaabaa').createPISlow()).to.deep.equal([
        0, 0, 1, 0, 1,
        2, 3, 4, 5, 2,
        3, 4, 5
      ])
    })
  })

  describe('createPIFast', () => {
    it('calculate pi array using fast algo', () => {
      expect(new KmpSearch('aabaabaaaba').createPIFast()).to.deep.equal([
        0, 1, 0, 1,
        2, 3, 4, 5, 2,
        3, 4
      ])

      expect(new KmpSearch('aabaabaaabaa').createPIFast()).to.deep.equal([
        0, 1, 0, 1,
        2, 3, 4, 5, 2,
        3, 4, 5
      ])
    })
  })

  describe('search', () => {
    it('should find index using kmp search', () => {
      for (let i = 0; i < fixtures.length; i++) {
        const { text, mask, expected } = fixtures[i]
        const kmp = new KmpSearch(mask)
        const result = kmp.search(text)

        expect(result).to.equal(expected)
      }
    })
  })
})
