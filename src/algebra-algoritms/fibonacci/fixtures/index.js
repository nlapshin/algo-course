const fs = require('fs')
const path = require('path')

const fixtures = []

for (let i = 0; i < 11; i++) {
  const n = +readStringFromFile(`./data/test.${i}.in`)
  const expected = BigInt(readStringFromFile(`./data/test.${i}.out`))

  fixtures.push({ n, expected })
}

module.exports = fixtures

function readStringFromFile(filePath) {
  return fs.readFileSync(path.resolve(__dirname, filePath)).toString().trim()
}
