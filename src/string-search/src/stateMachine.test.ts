import { expect } from 'chai'
import { StateMachineSearch } from './stateMachine'

describe('StateMachineSearch', () => {
  describe('search', () => {
    it('should find index using state machine search', () => {
      const stateMachineSearch = new StateMachineSearch('aabaabaaabaa', 'abc')

      expect(stateMachineSearch.search('aabaaabaabaaabaa')).to.equal(4)
      expect(stateMachineSearch.search('aabaabaaabaa')).to.equal(0)
      expect(stateMachineSearch.search('aaabaabaaabaa')).to.equal(1)
      expect(stateMachineSearch.search('ababaabaaabaa')).to.equal(-1)
    })
  })
})
