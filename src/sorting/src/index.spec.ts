import assert from 'assert'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, InsertionSorting, ShellSorting, SelectionSorting, HeapSorting, QuickSorting, MergeSorting, SortingFunc } from './'

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()
const fixturesSource = generateFixtures([Math.pow(10, 1), Math.pow(10, 2), Math.pow(10, 3), Math.pow(10, 4), Math.pow(10, 5), Math.pow(10, 6)])

// bubbleSimpleTest(utils.deepCopy(fixturesSource).slice(0, 5))
// bubbleOptimizeTest(utils.deepCopy(fixturesSource).slice(0, 5))
// insertionSimpleTest(utils.deepCopy(fixturesSource).slice(0, 5))
// insertionShiftTest(utils.deepCopy(fixturesSource).slice(0, 5))
// insertionShiftBinaryTest(utils.deepCopy(fixturesSource).slice(0, 5))
// shellSimpleTest(utils.deepCopy(fixturesSource).slice(0, 6))
// selectionByMinTest(utils.deepCopy(fixturesSource).slice(0, 5))
// heapSimpleTest(utils.deepCopy(fixturesSource).slice(0, 6))
// quickSimpleTest(utils.deepCopy(fixturesSource).slice(0, 6))
// quickOptimizeTest(utils.deepCopy(fixturesSource).slice(0, 6))
mergeSimpleTest(utils.deepCopy(fixturesSource).slice(0, 1))

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

function selectionByMinTest (fixtures: IFixture[]) {
  const selectionSorting = new SelectionSorting()

  const name = 'selection.byMin'
  const handler = selectionSorting.byMin.bind(selectionSorting)

  testWrap(name, fixtures, handler)
}

function heapSimpleTest (fixtures: IFixture[]) {
  const heapSorting = new HeapSorting()

  const name = 'heap.simple'
  const handler = heapSorting.simple.bind(heapSorting)

  testWrap(name, fixtures, handler)
}

function quickSimpleTest (fixtures: IFixture[]) {
  const quickSorting = new QuickSorting()

  const name = 'quick.simple'
  const handler = quickSorting.simple.bind(quickSorting)

  testWrap(name, fixtures, handler)
}

function quickOptimizeTest (fixtures: IFixture[]) {
  const quickSorting = new QuickSorting()

  const name = 'quick.optimize'
  const handler = quickSorting.optimize.bind(quickSorting)

  testWrap(name, fixtures, handler)
}

function mergeSimpleTest (fixtures: IFixture[]) {
  const mergeSorting = new MergeSorting()

  const name = 'merge.simple'
  const handler = mergeSorting.simple.bind(mergeSorting)

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

    // assert.deepEqual(result, fixture.expected)
  }
}
