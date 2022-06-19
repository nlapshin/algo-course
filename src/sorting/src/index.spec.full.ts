import assert from 'assert'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { getSetFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, InsertionSorting, ShellSorting, SelectionSorting, HeapSorting, QuickSorting, MergeSorting, SortingFunc } from './'

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()

const fixtures = getSetFixtures()

// bubble-simple
bubbleSimpleTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
bubbleSimpleTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
bubbleSimpleTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
bubbleSimpleTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')


// bubble-optimize
bubbleOptimizeTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
bubbleOptimizeTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
bubbleOptimizeTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
bubbleOptimizeTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')


// insertion-simple
insertionSimpleTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
insertionSimpleTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
insertionSimpleTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
insertionSimpleTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')


// insertion-shift
insertionShiftTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
insertionShiftTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
insertionShiftTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
insertionShiftTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')


// insertion-shift-binary
insertionShiftBinaryTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
insertionShiftBinaryTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
insertionShiftBinaryTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
insertionShiftBinaryTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')

// shell-simple
shellSimpleTest(utils.deepCopy(fixtures.random).slice(0, 8), 'random')
shellSimpleTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
shellSimpleTest(utils.deepCopy(fixtures.sorted).slice(0, 8), 'sorted')
shellSimpleTest(utils.deepCopy(fixtures.revers).slice(0, 8), 'revers')

// selection-by-min
selectionByMinTest(utils.deepCopy(fixtures.random).slice(0, 6), 'random')
selectionByMinTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
selectionByMinTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
selectionByMinTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')

// heap-simple
heapSimpleTest(utils.deepCopy(fixtures.random).slice(0, 8), 'random')
heapSimpleTest(utils.deepCopy(fixtures.digits).slice(0, 8), 'digits')
heapSimpleTest(utils.deepCopy(fixtures.sorted).slice(0, 8), 'sorted')
heapSimpleTest(utils.deepCopy(fixtures.revers).slice(0, 8), 'revers')

// quick-simple
quickSimpleTest(utils.deepCopy(fixtures.random).slice(0, 8), 'random')
quickSimpleTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
quickSimpleTest(utils.deepCopy(fixtures.sorted).slice(0, 6), 'sorted')
quickSimpleTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')

// quick-optimize
quickOptimizeTest(utils.deepCopy(fixtures.random).slice(0, 8), 'random')
quickOptimizeTest(utils.deepCopy(fixtures.digits).slice(0, 6), 'digits')
quickOptimizeTest(utils.deepCopy(fixtures.sorted).slice(0, 8), 'sorted')
quickOptimizeTest(utils.deepCopy(fixtures.revers).slice(0, 6), 'revers')

reports.showConsole()


function bubbleSimpleTest (fixtures: IFixture[], type: string) {
  const bubbleSorting = new BubbleSorting()

  const name = `${type}.bubble.simple`
  const handler = bubbleSorting.simple.bind(bubbleSorting)

  testWrap(name, fixtures, handler)
}

function bubbleOptimizeTest (fixtures: IFixture[], type: string) {
  const bubbleSorting = new BubbleSorting()

  const name = `${type}.bubble.optimize`
  const handler = bubbleSorting.optimize.bind(bubbleSorting)

  testWrap(name, fixtures, handler)
}

function insertionSimpleTest (fixtures: IFixture[], type: string) {
  const insertionSorting = new InsertionSorting()

  const name = `${type}.insertion.simple`
  const handler = insertionSorting.simple.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function insertionShiftTest (fixtures: IFixture[], type: string) {
  const insertionSorting = new InsertionSorting()

  const name = `${type}.insertion.shift`
  const handler = insertionSorting.shift.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function insertionShiftBinaryTest (fixtures: IFixture[], type: string) {
  const insertionSorting = new InsertionSorting()

  const name = `${type}.insertion.shiftBinary`
  const handler = insertionSorting.shiftBinary.bind(insertionSorting)

  testWrap(name, fixtures, handler)
}

function shellSimpleTest (fixtures: IFixture[], type: string) {
  const shellSorting = new ShellSorting()

  const name = `${type}.shell.simple`
  const handler = shellSorting.simple.bind(shellSorting)

  testWrap(name, fixtures, handler)
}

function selectionByMinTest (fixtures: IFixture[], type: string) {
  const selectionSorting = new SelectionSorting()

  const name = `${type}.selection.byMin`
  const handler = selectionSorting.byMin.bind(selectionSorting)

  testWrap(name, fixtures, handler)
}

function heapSimpleTest (fixtures: IFixture[], type: string) {
  const heapSorting = new HeapSorting()

  const name = `${type}.heap.simple`
  const handler = heapSorting.simple.bind(heapSorting)

  testWrap(name, fixtures, handler)
}

function quickSimpleTest (fixtures: IFixture[], type: string) {
  const quickSorting = new QuickSorting()

  const name = `${type}.quick.simple`
  const handler = quickSorting.simple.bind(quickSorting)

  testWrap(name, fixtures, handler)
}

function quickOptimizeTest (fixtures: IFixture[], type: string) {
  const quickSorting = new QuickSorting()

  const name = `${type}.quick.optimize`
  const handler = quickSorting.optimize.bind(quickSorting)

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
