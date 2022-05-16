class Pow {
  iteration(x, n) {
    let result = 1

    for (let i = 1; i <= n; i++) {
      result *= x
    }

    return result
  }

  multiplication(x, n) {
    if (n === 0) {
      return 1
    }

    let result = x
    let i = 2

    for (; i*2 <= n; i *= 2) {
      result *= result
    }

    i = (i / 2)

    for (; i < n; i++) {
      result *= x
    }
    
    return result
  }

  binaryDecomposition(x, n) {
    let result = 1

    while(n) {
      if (n % 2 === 0) {
        n = n / 2

        x *= x
      } else {
        n = n - 1

        result *= x
      }
    }
    
    return result
  }

  round(num, decimals = 11) {
    return Number((Math.round(num + "e" + decimals)  + "e-" + decimals));
  }
}

module.exports = Pow
