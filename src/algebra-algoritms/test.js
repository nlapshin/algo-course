const { performance } = require('perf_hooks');

function describe(message, handler) {
  console.log("\x1b[36m", message)

  handler()
}


function test(message, handler) {
  const start = performance.now()
  
  let error = ''
  
  try {
    handler()
  } catch(err) {
    error = err
  } finally {
    const end = performance.now()
    const duration = (end - start).toFixed(3)

    const color = error ? '\x1b[31m' : '\x1b[32m'
    const output = error ? `  ${message}. Error: ${error} ${duration}ms` : `  ${message}. Success: ${duration}ms`

    console.log(color, output)

    return duration
  }
}

function assertEqual(value, compareValue) {
  if (value !== compareValue) {
    throw `${value} don't equal ${compareValue}`
  }
}

function assertEqualFixed(value, compareValue, fixed = 0) {
  const arrValue = value.toString().split('.')
  const arrCompareValue = compareValue.toString().split('.')

  if (arrValue[0] !== arrCompareValue[0]) {
    throw `${value} don't equal ${compareValue}`
  }

  if (arrValue[1] && arrCompareValue[1]) {
    if (round(value, arrCompareValue[1].length) !== compareValue) {
      throw `${value} don't equal ${compareValue}`
    }
  }
}

function assertDeepEqual(value, compareValue) {
  if (JSON.stringify(value) !== JSON.stringify(compareValue)) {
    throw `${value} don't equal ${compareValue}`
  }
}

function round(num, decimals = 11) {
  return Number((Math.round(num + "e" + decimals)  + "e-" + decimals));
}


module.exports = {
  describe,
  test,
  assertEqual,
  assertEqualFixed,
  assertDeepEqual
}
