const { describe, test, assertEqual } = require('../test')
const fixtures = require('./fixtures')
const Report = require('../report')
const report = new Report()

const Primes = require('./index')
const primes = new Primes()

describe('primes.divide', function() {
  fixtures.forEach(({x, expected}) => {
    const duration = test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.divide(x)

      assertEqual(result, expected)
    })

    report.add('divide', `x = ${x}.`, expected, duration)
  })
})

describe('primes.divideOptimise', function() {
  fixtures.forEach(({x, expected}) => {
    const duration = test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.divideOptimize(x)

      assertEqual(result, expected)
    })

    report.add('divideOptimise', `x = ${x}.`, expected, duration)
  })
})

describe('primes.eratosfen', function() {
  fixtures.forEach(({x, expected}) => {
    const duration = test(`x = ${x}, Result = ${expected}`, () => {
      const result = primes.eratosfen(x)

      assertEqual(result, expected)
    })

    report.add('eratosfen', `x = ${x}.`, expected, duration)
  })
})
  