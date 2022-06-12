import assert from 'assert'
import { PriorityQueue } from './'

const pqueue = new PriorityQueue()

pqueue.enqueue(1, 'A')
pqueue.enqueue(2, 'B')
pqueue.enqueue(3, 'C')
pqueue.enqueue(1, 'AZ')
pqueue.enqueue(2, 'BZ')
pqueue.enqueue(2, 'BBZ')
pqueue.enqueue(4, 'D')
pqueue.enqueue(10, 'I')
pqueue.enqueue(3, 'CZ')
pqueue.enqueue(6, 'E')

assert.deepEqual(pqueue.list(), [
  { priority: 1, item: 'A' },
  { priority: 1, item: 'AZ' },
  { priority: 2, item: 'B' },
  { priority: 2, item: 'BZ' },
  { priority: 2, item: 'BBZ' },
  { priority: 3, item: 'C' },
  { priority: 3, item: 'CZ' },
  { priority: 4, item: 'D' },
  { priority: 6, item: 'E' },
  { priority: 10, item: 'I' }

])
