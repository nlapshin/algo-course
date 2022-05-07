class HappyNumbers {
  constructor(numbersLength) {
    this.numbersLength = numbersLength
    this.cache = {}
  }

  count() {
    let count = BigInt(0)

    const hash = this.calcHash()

    for (let key in hash) {
      count += BigInt(hash[key] * hash[key])
    }

    return count
  }

  calcHash() {
    const hash = {}
  
    const maxNumber = Math.pow(10, this.numbersLength) - 1
  
    for (let number = 0; number <= maxNumber; number++) {
      const sumOfNumber = this.sumOfEachNumber(number)

      hash[sumOfNumber] = (hash[sumOfNumber] || 0) + 1
    }
  
    return hash
  }

  sumOfEachNumber(number) {
    let sum = 0

    while (number !== 0) {
      sum += number % 10
      number = parseInt(number / 10)
    }

    return sum
  }
}

module.exports = HappyNumbers
