const fs = require('fs')
const path = require('path')

const fixtures = []

for (let i = 0; i < 10; i++) {
  const input = readStringFromFile(`./data/test.${i}.in`)
  const expected = +readStringFromFile(`./data/test.${i}.out`)
  const [x] = input.split('\r\n').map(item => +item.trim())

  fixtures.push({ x, expected })
}

module.exports = fixtures

function readStringFromFile(filePath) {
  return fs.readFileSync(path.resolve(__dirname, filePath)).toString().trim()
}
