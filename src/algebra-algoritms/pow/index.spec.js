const { describe, test, assertEqual } = require('../test')

const Pow = require('./index')
const pow = new Pow()

const fixtures = [
  { x: 0, n: 1, expected: 0 },
  { x: 1, n: 1, expected: 1 },
  { x: 1, n: 2, expected: 1 },
  { x: 2, n: 2, expected: 4 },
  { x: 2, n: 3, expected: 8 },
  { x: 2, n: 16, expected: 65536 },
  { x: 2, n: 32, expected: 4294967296 },
  { x: 2, n: 37, expected: 137438953472 },
  { x: 2, n: 55, expected: 36028797018963970 },
  { x: 3, n: 3, expected: 27 },
  { x: 3, n: 5, expected: 243 },
  { x: 3, n: 10, expected: 59049 },
  { x: 5, n: 23, expected: 11920928955078124 },
  { x: 10, n: 10, expected: 10000000000 }
]

describe('pow.iteration', function() {
  fixtures.forEach(({x, n, expected}) => {
    test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.iteration(x, n)

      assertEqual(result, expected)
    })
  })
})

describe('pow.multiplication', function() {
  fixtures.forEach(({x, n, expected}) => {
    test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.multiplication(x, n)

      assertEqual(result, expected)
    })
  })
})

describe('pow.binaryDecomposition', function() {
  fixtures.forEach(({x, n, expected}) => {
    test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.binaryDecomposition(x, n)

      assertEqual(result, expected)
    })
  })
})
