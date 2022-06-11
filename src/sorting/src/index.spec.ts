import assert from 'assert'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, InsertionSorting, ShellSorting, SortingFunc } from './'

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()
const fixturesSource = generateFixtures([Math.pow(10, 2), Math.pow(10, 3), Math.pow(10, 4), Math.pow(10, 5), Math.pow(10, 6)])

bubbleSimpleTest(utils.deepCopy(fixturesSource).slice(0, 4))
bubbleOptimizeTest(utils.deepCopy(fixturesSource).slice(0, 4))
insertionSimpleTest(utils.deepCopy(fixturesSource).slice(0, 4))
insertionShiftTest(utils.deepCopy(fixturesSource).slice(0, 4))
insertionShiftBinaryTest(utils.deepCopy(fixturesSource).slice(0, 4))
shellSimpleTest(utils.deepCopy(fixturesSource).slice(0, 5))

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

function shellSimpleTest (fixtures: IFixture[]) {
  const shellSorting = new ShellSorting()

  const name = 'shell.simple'
  const handler = shellSorting.simple.bind(shellSorting)

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
