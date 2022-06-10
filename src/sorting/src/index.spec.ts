import { Tap } from './tap'

import { generateFixtures } from './fixtures'
import { IFixture } from './fixtures/model'

import { BubbleSorting, SortingFunc } from './'

const tap = new Tap()
const fixtures = generateFixtures()

const bubbleSorting = new BubbleSorting()

for (const fixture of fixtures) {
  tap.test(`bubble.${fixture.count}`, testSorting(bubbleSorting.simple.bind(bubbleSorting), fixture), 1)
}

function testSorting (sortFunction: SortingFunc, fixture: IFixture) {
  return () => {
    const result = sortFunction(fixture.input)

    console.log(result)
  }
}
