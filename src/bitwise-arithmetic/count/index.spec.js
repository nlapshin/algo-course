const { describe, test, assertEqual } = require('../test')

const fixtures = [
  { mask: '000', expected: 0 },
  { mask: '001', expected: 1 },
  { mask: '010', expected: 1 },
  { mask: '011', expected: 2 },
  { mask: '100', expected: 1 },
  { mask: '101', expected: 2 },
  { mask: '111', expected: 3 },
  { mask: '101010100100', expected: 5 },
  { mask: '10101010011100011100', expected: 10 }
]

const Count = require('./index')
const count = new Count()

describe('count.shift', function() {
  fixtures.forEach(({mask, expected}) => {
    test(`mask = ${mask}, count = ${expected}`, () => {
      const result = count.shift(parseInt(mask, 2))

      assertEqual(result, expected)
    })
  })
})

describe('count.shift255', function() {
  fixtures.forEach(({mask, expected}) => {
    test(`mask = ${mask}, count = ${expected}`, () => {
      const result = count.shift255(parseInt(mask, 2))

      assertEqual(result, expected)
    })
  })
})
