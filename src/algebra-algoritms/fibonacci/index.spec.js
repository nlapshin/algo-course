const { describe, test, assertEqual } = require('../test')

const fixtures = require('./fixtures')

const Fibonacci = require('./index')
const fibonacci = new Fibonacci()

// describe('fibonacci.recursion', function() {
//   fixtures.forEach(({n, expected}) => {
//     test(`n = ${n}`, () => {
//       const result = fibonacci.recursion(n)

//       assertEqual(result, expected)
//     })
//   })
// })


// describe('fibonacci.iteration', function() {
//   fixtures.forEach(({n, expected}) => {
//     test(`n = ${n}`, () => {
//       const result = fibonacci.iteration(n)

//       assertEqual(result, expected)
//     })
//   })
// })

// describe('fibonacci.goldenRatio', function() {
//   fixtures.forEach(({n, expected}) => {
//     test(`n = ${n}`, () => {
//       const result = fibonacci.goldenRatio(n)

//       assertEqual(result, expected)
//     })
//   })
// })

describe('fibonacci.matrix', function() {
  fixtures.forEach(({n, expected}) => {
    test(`n = ${n}`, () => {
      const result = fibonacci.matrix(n)

      assertEqual(result, expected)
    })
  })
})
