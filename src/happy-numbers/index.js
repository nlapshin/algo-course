class HappyNumbers {
  constructor(numbersLength) {
    this.numbersLength = parseInt(numbersLength)
    this.cache = {}
  }


  count() {
    let count = BigInt(0)
    let min = 0
    let max = this.numbersLength * 9

    let hash = {}

    console.log(max)

    // for (let i = min; i <= max; i++) {
    //   if (i < 10) {
    //     hash[i] = 1
    //   } else {
    //     hash[i] = 0
    //   }

    //   // for (let j = i - 9; j <= i; j++) {
    //   //   if (j < 0) {
    //   //     continue
    //   //   }

    //   //   if (!hash[i]) {
    //   //     hash[i] = 0
    //   //   }

    //   //   if (j < 10) {
    //   //     hash[i] = j
    //   //   } else {
    //   //     hash[i] = 10 - Math.abs(j - 10)
    //   //   }

    //     // if (j >= 10 && j < 20) {
    //     //   hash[i] += 10 - Math.abs(j - 10) - 1
    //     // }
    //   // }
    // // }

    // for (let key in hash) {
    //   count += BigInt(hash[key] * hash[key])
    // }
  
    return count
  }


  // count() {
  //   let count = BigInt(0)
  //   let min = 0
  //   let max = this.numbersLength * 9

  //   let hash = {}

  //   console.log(max)

  //   for (let i = min; i <= max; i++) {
  //     for (let j = i - 9; j <= i; j++) {
  //       if (j < 0) {
  //         continue
  //       }

  //       if (!hash[i]) {
  //         hash[i] = 0
  //       }

  //       if (j < 10) {
  //         hash[i] += j + 1
  //       }

  //       if (j >= 10 && j < 20) {
  //         hash[i] += 10 - Math.abs(j - 10) - 1
  //       }
  //     }
  //   }

  //   for (let key in hash) {
  //     count += BigInt(hash[key] * hash[key])
  //   }
  
  //   return count
  // }

  // count() {
  //   let count = BigInt(0)

  //   const hash = this.calcHash()

  //   for (let key in hash) {
  //     count += BigInt(hash[key] * hash[key])
  //   }

  //   return count
  // }

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
