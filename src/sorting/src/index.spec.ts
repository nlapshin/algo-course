import assert from 'assert'
import { Tap } from './tap'
import { UtilsSorting } from './utils'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import {
  BubbleSorting,
  InsertionSorting,
  ShellSorting,
  SelectionSorting,
  HeapSorting,
  QuickSorting,
  MergeSorting,
  BucketSorting,
  CountingSorting,
  RadixSorting,
  SortingFunc,
  SortingWithMaxFunc
} from './'

const max = 65536

const tap = new Tap()
const utils = new UtilsSorting()
const reports = new Reports()
const fixturesSource = generateFixtures([
  Math.pow(10, 1),
  Math.pow(10, 2),
  Math.pow(10, 3),
  Math.pow(10, 4),
  Math.pow(10, 5),
  Math.pow(10, 6),
  Math.pow(10, 7)
  // Math.pow(10, 8)
  // Math.pow(10, 9)
], max)

bubbleSimpleTest(sliceFixtures(fixturesSource, 5))
bubbleOptimizeTest(sliceFixtures(fixturesSource, 5))
insertionSimpleTest(sliceFixtures(fixturesSource, 5))
insertionShiftTest(sliceFixtures(fixturesSource, 5))
insertionShiftBinaryTest(sliceFixtures(fixturesSource, 5))
shellSimpleTest(sliceFixtures(fixturesSource, 6))
selectionByMinTest(sliceFixtures(fixturesSource, 5))
heapSimpleTest(sliceFixtures(fixturesSource, 6))
quickSimpleTest(sliceFixtures(fixturesSource, 6))
quickOptimizeTest(sliceFixtures(fixturesSource, 6))
mergeSimpleTest(sliceFixtures(fixturesSource, 6))
bucketSimpleTest(sliceFixtures(fixturesSource, 7))
countingSimpleTest(sliceFixtures(fixturesSource, 7))
radixSimpleTest(sliceFixtures(fixturesSource, 7))

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

function bucketSimpleTest (fixtures: IFixture[]) {
  const bucketSorting = new BucketSorting()

  const name = 'bucket.simple'
  const handler = bucketSorting.simple.bind(bucketSorting)

  testMaxWrap(name, fixtures, handler)
}

function countingSimpleTest (fixtures: IFixture[]) {
  const countingSorting = new CountingSorting()

  const name = 'counting.simple'
  const handler = countingSorting.simple.bind(countingSorting)

  testMaxWrap(name, fixtures, handler)
}

function radixSimpleTest (fixtures: IFixture[]) {
  const radixSorting = new RadixSorting()

  const name = 'radix.simple'
  const handler = radixSorting.simple.bind(radixSorting)

  testMaxWrap(name, fixtures, handler)
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

function testMaxWrap (name: string, fixtures: IFixture[], handler: SortingWithMaxFunc) {
  const report: IReport = { name, sets: [] }

  for (const fixture of fixtures) {
    const duration = tap.test(`${name}.${fixture.count}`, testSortingMax(handler, fixture), 1)
    report.sets.push({ duration, name: fixture.count.toString() })
  }

  reports.add(report)
}

function testSortingMax (sortFunction: SortingWithMaxFunc, fixture: IFixture) {
  return () => {
    const result = sortFunction(fixture.input, max)

    assert.deepEqual(result, fixture.expected)
  }
}

function sliceFixtures (fixtures: IFixture[], count: number) {
  return fixtures.slice(0, count).map(fixture => {
    return {
      ...fixture,
      input: [...fixture.input]
    }
  })
}
