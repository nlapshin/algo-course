const { describe, test, assertEqualFixed } = require('../test')

const fixtures = require('./fixtures')

const Chess = require('./index')
const chess = new Chess()

describe('chess.king', function() {
  fixtures.king.forEach(({pos, count, mask}) => {
    test(`pos = ${pos}, count = ${count}, mask = ${mask}`, () => {
      const result = chess.king(pos)

      assertEqualFixed(result.count, count)
      assertEqualFixed(result.mask, mask)
    })
  })
})
