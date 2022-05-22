const fs = require('fs')
const path = require('path')

module.exports = {
  king: getFixtures('king'),
  knight: getFixtures('knight'),
  rook: getFixtures('rook'),
  bishop: getFixtures('bishop'),
  queen: getFixtures('queen')
}

function getFixtures(name) {
  const fixtures = []

  for (let i = 0; i < 10; i++) {
    const pos = +readStringFromFile(`./data/${name}/test.${i}.in`)
    const output = readStringFromFile(`./data/${name}/test.${i}.out`)
    const [count, mask] = output.split('\r\n').map(item => BigInt(item.trim()))
  
    fixtures.push({ pos, count, mask })
  }

  return fixtures
}

function readStringFromFile(filePath) {
  return fs.readFileSync(path.resolve(__dirname, filePath)).toString().trim()
}
