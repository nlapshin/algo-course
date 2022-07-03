import assert from 'assert'
import * as path from 'path'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import {
  ExternalSorting
} from './'

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()
const externalSorting = new ExternalSorting()

const max = Math.pow(2, 16)
const outputDir = path.resolve(__dirname, 'fixtures/__data__');

(async () => {
  const numbers = [
    Math.pow(10, 2)
    // Math.pow(10, 3),
    // Math.pow(10, 4),
    // Math.pow(10, 5),
    // Math.pow(10, 6)
  ]

  for (const num of numbers) {
    const inputFile = utils.generateRandomFile(num, max, outputDir)
    const outputFile = inputFile.replace('.in', '.out')

    await externalSorting.tFiles(inputFile, outputFile, 10, num)
  }
})()
