const { performance } = require('perf_hooks');

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

module.exports = {
  describe,
  test,
  assertEqual
}
