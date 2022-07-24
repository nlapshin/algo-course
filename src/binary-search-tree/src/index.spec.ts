import assert from 'assert';
import { Tap } from './lib/tap';
import { Duration } from './lib/duration';
import { Reports } from './lib/reports';
import { Utils } from './utils';
import { BST } from './bst';
import { IBST } from './bst/model';

import { AVL } from './avl';

const tap = new Tap();
const reports = new Reports();
const utils = new Utils();
const bstRandom = new BST();
const bstSort = new BST();

const avlRandom = new AVL();
const avlSort = new AVL();

const values = utils.generateRandomUniqArray(1000, 0, 10000);
const valuesSort = [...values].sort((a, b) => a - b);
const valuesShuffle = utils.shuffleArray(values);

for (const value of values) {
  bstRandom.insert(value);
}

for (const value of valuesSort) {
  bstSort.insert(value);
}

// for (const value of values) {
//   avlRandom.insert(value);
// }

// for (const value of valuesSort) {
//   avlSort.insert(value);
// }

searching('searching.bstRandom', bstRandom, valuesShuffle);
searching('searching.bstSort', bstSort, valuesShuffle);

removing('removing.bstRandom', bstRandom, valuesShuffle);
removing('removing.bstSort', bstSort, valuesShuffle);

reports.showConsole();

function searching (name: string, bst: IBST, values: number[]): void {
  const duration = new Duration();

  duration.start();

  for (const value of values) {
    const res = bst.search(value);

    assert.equal(res, true);
  }

  duration.end();

  reports.addToSet({ name: 'searching', sets: [{ duration: duration.duration(), name }] });
}

function removing (name: string, bst: IBST, values: number[]): void {
  const duration = new Duration();

  duration.start();

  for (const value of values) {
    bst.remove(value);
  }

  duration.end();

  reports.addToSet({ name: 'removing', sets: [{ duration: duration.duration(), name }] });
}
