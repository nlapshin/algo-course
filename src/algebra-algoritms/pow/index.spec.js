const { describe, test, assertEqualFixed } = require('../test')
const Report = require('../report')
const report = new Report()

const fixtures = require('./fixtures')

const Pow = require('./index')
const pow = new Pow()

describe('pow.iteration', function() {
  fixtures.forEach(({x, n, expected}) => {
    const duration = test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.iteration(x, n)

      assertEqualFixed(result, expected)
    })

    report.add('iteration', `x = ${x}, n = ${n}.`, expected, duration)
  })
})

describe('pow.multiplication', function() {
  fixtures.forEach(({x, n, expected}) => {
    const duration = test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.multiplication(x, n)

      assertEqualFixed(result, expected)
    })

    report.add('multiplication', `x = ${x}, n = ${n}.`, expected, duration)
  })
})

describe('pow.binaryDecomposition', function() {
  fixtures.forEach(({x, n, expected}) => {
    const duration = test(`x = ${x}, n = ${n}. Result = ${expected}`, () => {
      const result = pow.binaryDecomposition(x, n)

      assertEqualFixed(result, expected)
    })

    report.add('binaryDecomposition', `x = ${x}, n = ${n}.`, expected, duration)
  })
})

report.show()
