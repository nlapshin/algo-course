import * as fs from 'fs'
import * as path from 'path'

import { UtilsSorting } from '../utils'
import { IFixture, ISetFixtures } from './model'

const utils = new UtilsSorting()

export function generateFixtures (set = [10, 100, 1000, 10000]): IFixture[] {
  const fixtures = []

  for (const count of set) {
    const input = utils.generateRandomArray(count, 0, count)
    const expected = utils.sortArray(input)

    fixtures.push({ count, input, expected })
  }

  return fixtures
}

export function getSetFixtures (): ISetFixtures {
  return {
    random: getSetFixture('0.random'),
    digits: getSetFixture('1.digits'),
    sorted: getSetFixture('2.sorted'),
    revers: getSetFixture('3.revers')
  }
}

function getSetFixture (name: string): IFixture[] {
  const fixtures: IFixture[] = []

  for (let i = 0; i < 8 ; i++) {
    const input = readStringFromFile(`./data/${name}/test.${i}.in`)
    const output = readStringFromFile(`./data/${name}/test.${i}.out`)

    const [ count, inputStr ] = input.split('\r\n')

    const inputArr = inputStr.split(' ').map(v => +v)
    const outputArr = output.split(' ').map(v => +v)
  
    fixtures.push({ count: +count, input: inputArr, expected: outputArr })
  }

  return fixtures
}

function readStringFromFile(filePath: string) {
  return fs.readFileSync(path.resolve(__dirname, filePath)).toString().trim()
}
