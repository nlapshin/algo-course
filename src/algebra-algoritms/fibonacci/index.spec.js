const { describe, test, assertEqual } = require('../test')
const Report = require('../report')
const report = new Report()

const fixtures = require('./fixtures')

const Fibonacci = require('./index')
const fibonacci = new Fibonacci()

describe('fibonacci.recursion', function() {
  fixtures.forEach(({n, expected}) => {
    const duration = test(`n = ${n}`, () => {
      const result = fibonacci.recursion(n)

      assertEqual(result, expected)
    })

    report.add('recursion', `n = ${n}`, expected, duration)
  })
})


describe('fibonacci.iteration', function() {
  fixtures.forEach(({n, expected}) => {
    const duration = test(`n = ${n}`, () => {
      const result = fibonacci.iteration(n)

      assertEqual(result, expected)
    })

    report.add('iteration', `n = ${n}`, expected, duration)
  })
})

describe('fibonacci.goldenRatio', function() {
  fixtures.forEach(({n, expected}) => {
    const duration = test(`n = ${n}`, () => {
      const result = fibonacci.goldenRatio(n)

      assertEqual(result, expected)
    })

    report.add('goldenRatio', `n = ${n}`, expected, duration)
  })
})

describe('fibonacci.matrix', function() {
  fixtures.forEach(({n, expected}) => {
    const duration = test(`n = ${n}`, () => {
      const result = fibonacci.matrix(n)

      assertEqual(result, expected)
    })

    report.add('matrix', `n = ${n}`, expected, duration)
  })
})

report.show()
