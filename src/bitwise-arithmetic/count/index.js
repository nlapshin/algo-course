class Count {
  constructor() {
    this.count256 = new Map()

    this.fillCount256()
  }

  shift(mask) {
    let count = 0

    while(mask) {
      if (mask & 1 === 1) {
        count++
      }

      mask = mask >> 1
    }

    return count
  }

  shiftBigInt(mask) {
    let count = 0

    while(mask) {
      if ((mask & 1n) === 1n) {
        count++
      }

      mask = mask >> 1n
    }

    return count
  }

  shift255(mask) {
    let count = 0

    while(mask) {
      count += this.count256.get(mask & 255)

      mask = mask >> 8
    }

    return count
  }

  fillCount256() {
    for (let i = 0; i <= 255; i++) {
      this.count256.set(i, this.shift(i))
    }
  }
}

module.exports = Count
