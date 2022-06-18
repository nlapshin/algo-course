const Count = require('../count')

class Chess {
  constructor() {
    this.max = 9223372036854775808n
    this.map = this.numbers()
    this.count = new Count()

    this.side = {
      right: BigInt('0x7f7f7f7f7f7f7f7f'),
      right2: BigInt('0x3f3f3f3f3f3f3f3f'),
      left: BigInt('0xfefefefefefefefe'),
      left2: BigInt('0xfcfcfcfcfcfcfcfc'),
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
    const number = this.numberByPos(pos)

    const numberLeft = number & this.side.left
    const numberLeft2 = number & this.side.left2
    const numberRight = number & this.side.right
    const numberRight2 = number & this.side.right2

    let mask =
        numberRight << 8n << 8n << 1n // 0,0,3
      | numberRight2 << 1n << 1n << 8n // 3,3,0
      | numberRight2 << 1n << 1n >> 8n // 3,3,6
      | numberRight >> 8n >> 8n << 1n // 6,6,3
      | numberLeft >> 8n >> 8n >> 1n // 6,6,9
      | numberLeft2 >> 1n >> 1n >> 8n // 9,9,6
      | numberLeft2 >> 1n >> 1n << 8n // 9,9,0
      | numberLeft << 8n << 8n >> 1n // 0,0,9

    mask = mask & this.side.max
  
    const count = this.count.shiftBigInt(mask)

    return { mask, count }
  }

  rook(pos) {
    const number = this.numberByPos(pos)
    const xCoef = BigInt(Math.ceil((pos + 1) / 8) - 1)
    const yCoef = BigInt(pos + 1) - xCoef * 8n - 1n

    const xPos = (255n << (8n * xCoef)) - number
    const yPos = (BigInt('0x101010101010101') << yCoef) ^ number

    let mask = xPos | yPos

    const count = this.count.shiftBigInt(mask)

    return { mask, count }
  }


  bishop(pos) {
    const number = this.numberByPos(pos)

    const leftInclineBase = BigInt('0x102040810204080')
    const rightInclineBase = BigInt('0x8040201008040201')

    const yCoord = BigInt(Math.ceil((pos + 1) / 8))
    const xCoord = BigInt(pos + 1) - (yCoord - 1n) * 8n

    const sumCoord = xCoord + yCoord
    const subCoord = yCoord - xCoord

    const leftInclineShift = 8n * this.abs(sumCoord - 8n - 1n)
    const leftIncline = sumCoord > 9n ? leftInclineBase << leftInclineShift : leftInclineBase >> leftInclineShift

    const rightInclineShift = 8n * this.abs(subCoord)
    const rightIncline = subCoord > 0n ? rightInclineBase << rightInclineShift : rightInclineBase >> rightInclineShift

    const mask = ((rightIncline | leftIncline) ^ number) & this.side.max
    const count = this.count.shiftBigInt(mask)

    return { mask, count }
  }

  queen(pos) {
    const { mask: mask1, count: count1 } = this.rook(pos)
    const { mask: mask2, count: count2 } = this.bishop(pos)

    return { mask: mask1 | mask2, count: count1 + count2 }
  }

  abs(n) {
    return n < 0n ? -n : n
  }

  numberByPos(pos) {
    return pos === 0n ? 1n : 1n << BigInt(pos)
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
