import assert from 'assert'
import { Tap } from './tap'

import { Reports } from './reports'
import { IReport } from './reports/model'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, SortingFunc } from './'

const tap = new Tap()
const reports = new Reports()
const fixtures = generateFixtures([10, 100, 1000])

bubbleSimpleTest()

reports.showConsole()

function bubbleSimpleTest () {
  const bubbleSorting = new BubbleSorting()

  const name = 'bubble.simple'
  const handler = bubbleSorting.simple.bind(bubbleSorting)

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
