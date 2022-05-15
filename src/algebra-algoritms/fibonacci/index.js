const Matrix = require('../matrix')
const matrix = new Matrix()

class Fibonacci {
  recursion(n) {
    if (n < 2) {
      return BigInt(n)
    }

    return this.recursion(n - 1) + this.recursion(n - 2)
  }

  iteration(n) {
    if (n < 2) {
      return BigInt(n)
    }

    let previous = BigInt(0);
    let current = BigInt(1);

    for (let i = 1; i < n; i++) {
      let temp = current

      current += previous
      previous = temp
    }

    return current
  }

  goldenRatio(n) {
    const ratio = (1 + Math.sqrt(5)) / 2
    const result = (Math.pow(ratio, n) - Math.pow(1 - ratio, n)) / Math.sqrt(5)

    return BigInt(Math.round(result))
  }

  matrix(n) {
    if (n < 2) {
      return BigInt(n)
    }

    const mtrx = [
      [1, 1],
      [1, 0]
    ]

    const result = matrix.pow(mtrx, n)[0][1]

    return BigInt(result)
  }
}

module.exports = Fibonacci
