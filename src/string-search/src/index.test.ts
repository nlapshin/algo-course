import { expect } from 'chai'
import { StringSearch, stringSearchFn } from './index'

import { fixtures, IFixture } from './fixtures'

describe('StringSearch', () => {
  describe('fullScan', () => {
    it('should find index using full scanning way', () => {
      const stringSearch = new StringSearch()

      testWrap(fixtures, stringSearch.fullScan.bind(stringSearch))
    })
  })
})

function testWrap (fixtures: IFixture[], handler: stringSearchFn) {
  for (let i = 0; i < fixtures.length; i++) {
    const { text, mask, expected } = fixtures[i]
    const result = handler(text, mask)

    expect(result).to.equal(expected)
  }
}
