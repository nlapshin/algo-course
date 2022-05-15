class Matrix { 
  multiple(m1, m2) {
    return [
      [
        BigInt(m1[0][0]) * BigInt(m2[0][0]) + BigInt(m1[0][1]) * BigInt(m2[1][0]),
        BigInt(m1[0][0]) * BigInt(m2[1][0]) + BigInt(m1[0][1]) * BigInt(m2[1][1])
      ],
      [
        BigInt(m1[1][0]) * BigInt(m2[0][0]) + BigInt(m1[1][1]) * BigInt(m2[1][0]),
        BigInt(m1[1][0]) * BigInt(m2[1][0]) + BigInt(m1[1][1]) * BigInt(m2[1][1])
      ]
    ]
  }

  pow(m, n) {
    let result = m
    let started = m

    for (let i = 1; i < n; i++) {
      result = this.multiple(result, started)
    }

    return result
  }
}

module.exports = Matrix
