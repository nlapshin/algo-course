import { UtilsSorting } from '../utils'
import { IFixture } from './model'

const utils = new UtilsSorting()

export function generateFixtures (set = [10, 100, 1000, 10000]): IFixture[] {
  const fixtures = []

  for (const count of set) {
    const input = utils.generateRandomArray(count)
    const expected = utils.sortArray(input)

    fixtures.push({ count, input, expected })
  }

  return fixtures
}
