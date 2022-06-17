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

// describe('chess.knight', function() {
//   fixtures.knight.forEach(({pos, count, mask}) => {
//     test(`pos = ${pos}, count = ${count}, mask = ${mask}`, () => {
//       const result = chess.knight(pos)

//       assertEqualFixed(result.count, count)
//       assertEqualFixed(result.mask, mask)
//     })
//   })
// })

// describe('chess.rook', function() {
//   fixtures.rook.forEach(({pos, count, mask}) => {
//     test(`pos = ${pos}, count = ${count}, mask = ${mask}`, () => {
//       const result = chess.rook(pos)

//       assertEqualFixed(result.count, count)
//       assertEqualFixed(result.mask, mask)
//     })
//   })
// })

// describe('chess.bishop', function() {
//   fixtures.bishop.forEach(({pos, count, mask}) => {
//     test(`pos = ${pos}, count = ${count}, mask = ${mask}`, () => {
//       const result = chess.bishop(pos)

//       assertEqualFixed(result.count, count)
//       assertEqualFixed(result.mask, mask)
//     })
//   })
// })

// describe('chess.queen', function() {
//   fixtures.queen.forEach(({pos, count, mask}) => {
//     test(`pos = ${pos}, count = ${count}, mask = ${mask}`, () => {
//       const result = chess.queen(pos)

//       assertEqualFixed(result.count, count)
//       assertEqualFixed(result.mask, mask)
//     })
//   })
// })
