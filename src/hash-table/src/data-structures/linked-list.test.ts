import { expect } from 'chai'
import { LinkedList } from './linked-list'

describe('LinkedList', () => {
  it('append', () => {
    const linkedList = new LinkedList()

    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(1)

    expect(linkedList.head?.data).to.equal(2)
    expect(linkedList.head?.next?.data).to.equal(3)
    expect(linkedList.head?.next?.next?.data).to.equal(1)
    expect(linkedList.head?.next?.next?.next?.data).to.equal(undefined)
  })

  it('search', () => {
    const linkedList = new LinkedList()

    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(1)

    expect(linkedList.search(2)?.data).to.equal(2)
    expect(linkedList.search(3)?.data).to.equal(3)
    expect(linkedList.search(1)?.data).to.equal(1)
    expect(linkedList.search(10)).to.equal(null)
  })
})
