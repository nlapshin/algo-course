const { describe, test, assertEqual } = require('../test')
const fixtures = require('./fixtures')

const Primes = require('./index')
const primes = new Primes()

describe('primes.divide', function() {
  fixtures.forEach(({x, expected}) => {
    test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.divide(x)

      assertEqual(result, expected)
    })
  })
})

describe('primes.divideOptimise', function() {
  fixtures.forEach(({x, expected}) => {
    test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.divideOptimize(x)

      assertEqual(result, expected)
    })
  })
})

describe('primes.eratosfen', function() {
  fixtures.forEach(({x, expected}) => {
    test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.eratosfen(x)

      assertEqual(result, expected)
    })
  })
})
  