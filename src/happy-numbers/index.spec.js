const fs = require('fs')
const path = require('path')
const { describe, test, assertEqual } = require('./test')

const HappyNumbers = require('./index')

describe('happyNumber.count', function() {
  for (let i = 0; i < 10; i++) {
    const input = readStringFromFile(`./fixtures/test.${i}.in`)
    const expected = BigInt(readStringFromFile(`./fixtures/test.${i}.out`))

    test(`N = ${input}`, function() {
      const happyNumbers = new HappyNumbers(input)
      const result = happyNumbers.count()

      assertEqual(result, expected)
    })
  }
})

function readStringFromFile(filePath) {
  return fs.readFileSync(path.resolve(__dirname, filePath)).toString().trim()
}
