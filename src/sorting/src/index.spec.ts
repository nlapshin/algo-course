import assert from 'assert'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, InsertionSorting, SortingFunc } from './'

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()
const fixturesSource = generateFixtures([10, 100, 1000])

bubbleSimpleTest(utils.deepCopy(fixturesSource))
bubbleOptimizeTest(utils.deepCopy(fixturesSource))
insertionSimpleTest(utils.deepCopy(fixturesSource))
insertionShiftTest(utils.deepCopy(fixturesSource))
insertionShiftBinaryTest(utils.deepCopy(fixturesSource))

reports.showConsole()

function bubbleSimpleTest (fixtures: IFixture[]) {
  const bubbleSorting = new BubbleSorting()

  const name = 'bubble.simple'
  const handler = bubbleSorting.simple.bind(bubbleSorting)

  testWrap(name, fixtures, handler)
}

function bubbleOptimizeTest (fixtures: IFixture[]) {
  const bubbleSorting = new BubbleSorting()

  const name = 'bubble.optimize'
  const handler = bubbleSorting.optimize.bind(bubbleSorting)

  testWrap(name, fixtures, handler)
}

function insertionSimpleTest (fixtures: IFixture[]) {
  const insertionSorting = new InsertionSorting()

  const name = 'insertion.simple'
  const handler = insertionSorting.simple.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function insertionShiftTest (fixtures: IFixture[]) {
  const insertionSorting = new InsertionSorting()

  const name = 'insertion.shift'
  const handler = insertionSorting.shift.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function insertionShiftBinaryTest (fixtures: IFixture[]) {
  const insertionSorting = new InsertionSorting()

  const name = 'insertion.shiftBinary'
  const handler = insertionSorting.shiftBinary.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function testWrap (name: string, fixtures: IFixture[], handler: SortingFunc) {
  const report: IReport = { name, sets: [] }

  for (const fixture of fixtures) {
    const duration = tap.test(`${name}.${fixture.count}`, testSorting(handler, fixture), 1)
    report.sets.push({ duration, name: fixture.count.toString() })
  }

  reports.add(report)
}

function testSorting (sortFunction: SortingFunc, fixture: IFixture) {
  return () => {
    const result = sortFunction(fixture.input)

    assert.deepEqual(result, fixture.expected)
  }
}
