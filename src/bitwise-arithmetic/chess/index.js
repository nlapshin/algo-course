const Count = require('../count')

class Chess {
  constructor() {
    this.max = 9223372036854775808n
    this.map = this.numbers()
    this.count = new Count()

    this.side = {
      right: BigInt('0x7f7f7f7f7f7f7f7f'),
      left: BigInt('0xfefefefefefefefe'),
      max: BigInt('0xffffffffffffffff')
    }
  }

  king(pos) {
    const number = this.numberByPos(pos)

    const numberLeft = number & this.side.left
    const numberRight = number & this.side.right

    let mask = 
        number << 8n // 0 
      | numberRight << 9n // 1.5 
      | numberRight << 1n // 3 
      | numberRight >> 7n // 4.5 
      | number >> 8n // 6 
      | numberLeft >> 9n // 7.5 
      | numberLeft >> 1n // 9 
      | numberLeft << 7n // 10.5

    mask = mask & this.side.max

    const count = this.count.shiftBigInt(mask)

    return { mask, count }
  }

  knight(pos) {
    const variants = [[0, 0, 3], [3, 3, 0], [3, 3, 6], [6, 6, 3], [6, 6, 9], [9, 9, 6], [9, 9, 0], [0, 0, 9]]

    return this.calculate(pos, variants)
  }

  rook(pos) {
    const variants = []
    const directions = [0, 3, 6, 9]

    for (let i = 0; i < directions.length; i++) {
      const moves = []

      for (let j = 0; j < 8; j++) {
        moves.push(directions[i])

        variants.push([...moves])
      }
    }

    return this.calculate(pos, variants)
  }

  bishop(pos) {
    const variants = []
    const directions = [1.5, 4.5, 7.5, 10.5]

    for (let i = 0; i < directions.length; i++) {
      const moves = []

      for (let j = 0; j < 8; j++) {
        moves.push(directions[i])

        variants.push([...moves])
      }
    }

    return this.calculate(pos, variants)
  }

  queen(pos) {
    const variants = []
    const directions = [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5]

    for (let i = 0; i < directions.length; i++) {
      const moves = []

      for (let j = 0; j < 8; j++) {
        moves.push(directions[i])

        variants.push([...moves])
      }
    }

    return this.calculate(pos, variants)
  }

  calculate(pos, variants) {
    let count = 0
    let mask = 0n

    const number = this.numberByPos(pos)

    for (let i = 0; i < variants.length; i++) {
      let newPos = number
      const moves = variants[i]

      for (let j = 0; j < moves.length; j++) {
        const clockPos = moves[j]
        newPos = this.shift(clockPos, newPos)

        if (newPos === 0n) {
          break
        }
      }

      count += newPos > 0n ? 1 : 0
      mask += newPos
    }

    return { count, mask }
  }

  numberByPos(pos) {
    return pos === 0n ? 1n : 1n << BigInt(pos)
  }

  shift(number, clockPos) {
    const poses = {
      0: 8n, // left
      '1.5': 9n, // left
      3: 1n, // left
      '4.5': 7n, // rigth
      6: 8n, // right
      '7.5': 9n, // rigth
      9: 1n, // rigth
      '10.5': 7n, // left
    }

    let value = 0n
    const shiftValue = poses[clockPos]

    if (this.rightSide(number)) {
      if (clockPos >= 1.5 && clockPos <= 4.5) {
        return value
      }
    }

    if (this.leftSide(number)) {
      if (clockPos >= 7.5 && clockPos <= 10.5) {
        return value
      }
    }

    value = clockPos > 3 && clockPos <= 9 ? number >> shiftValue : number << shiftValue

    if (value > this.max) {
      return 0n
    }

    return value
  }

  leftSide(number) {
    return ((this.map[number] - 1) % 8) === 0
  }

  rightSide(number) {
    return (this.map[number] % 8) === 0
  }

  numbers() {
    const numbers = {}
    let key = 1n

    for (let i = 1; i <= 64; i++) {
      numbers[key] = i

      key = key << 1n
    }

    return numbers
  }

  showChessBox(numbers) {
    numbers = Array.isArray(numbers) !== false ? numbers : [numbers]
    let str = ''
  
    for (let num = BigInt("72057594037927936"), count = 64; count > 0; num = num === 0n ? 1n : num << 1n, count--) {
      // str += num + ' '
      str += numbers.includes(num) ? '. ' : '* '
  
      if ((count - 1) % 8 === 0) {
        str += '\n'
  
        num = num / BigInt(65536)
      }
    }
   
    console.log(str)
  }  
}

module.exports = Chess
