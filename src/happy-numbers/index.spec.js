const fs = require('fs')
const path = require('path')
const { performance } = require('perf_hooks');

const HappyNumbers = require('./index')

describe('happyNumber.count', function() {
  for (let i = 0; i < 1; i++) {
    const input = readStringFromFile(path.resolve(__dirname, `./fixtures/test.${i}.in`))
    const expected = BigInt(readStringFromFile(path.resolve(__dirname, `./fixtures/test.${i}.out`)))

    test(`N = ${input}`, function() {
      const happyNumbers = new HappyNumbers(input)
      const result = happyNumbers.count()

      assertEqual(result, expected)
    })
  }
})

function describe(message, handler) {
  console.log("\x1b[36m", message)

  handler()
}


function test(message, handler) {
  try {
    const start = performance.now()
  
    handler()
  
    const end = performance.now()
    const duration = (end - start).toFixed(3)
  
    console.log('\x1b[32m', `  ${message}. Success: ${duration}ms`)
  } catch(err) {
    console.log('\x1b[31m', `  ${message}. Error: ${err}`)
  }
}

function assertEqual(value, compareValue) {
  if (value !== compareValue) {
    throw `${value} don't equal ${compareValue}`
  }
}

function readStringFromFile(filePath) {
  return fs.readFileSync(filePath).toString().trim()
}
