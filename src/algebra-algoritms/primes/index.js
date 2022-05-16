class Primes {
  constructor() {
    this.cache = {}
  }

  divide(x) {
    let count = 0

    for (let i = 2; i <= x; i++) {
      count += this.isPrime(i) ? 1 : 0
    }

    return count
  }

  divideOptimize(x) {
    let count = 0

    for (let i = 2; i <= x; i++) {
      count += this.isPrimeOptimize(i) ? 1 : 0
    }

    return count
  }

  eratosfen(x) {
    if (x < 2) {
      return 0
    }

    let count = 1
    const list = new Set()

    for (let i = 2; i <= x; i++) {
      if (i % 2 !== 0) {
        list.add(i)
      }
    }

    let [curDelimer] = list

    while(curDelimer) {
      count++

      for (let num of list) {
        if (num % curDelimer === 0) {
          list.delete(num)
        }
      }

      [curDelimer] = list
    }

    return count
  }

  isPrime(num) {
    let isPrime = true

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false

        break
      }
    }

    return isPrime
  }

  isPrimeOptimize(num) {
    let isPrime = true

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false

        break
      }
    }

    return isPrime
  }
}

module.exports = Primes
