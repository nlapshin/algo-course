import assert from 'assert';
import { Tap } from './lib/tap';
import { Duration } from './lib/duration';
import { Reports } from './lib/reports';
import { Utils } from './utils';
import { BST } from './bst';
import { IBST } from './bst/model';

import { AVL } from './avl';
import { IAVL } from './avl/model';

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

for (const value of values) {
  avlRandom.insert(value);
}

for (const value of valuesSort) {
  avlSort.insert(value);
}

searching('searching.bstRandom', bstRandom, valuesShuffle);
searching('searching.bstSort', bstSort, valuesShuffle);

removing('removing.bstRandom', bstRandom, valuesShuffle);
removing('removing.bstSort', bstSort, valuesShuffle);

searching('searching.avlRandom', avlRandom, valuesShuffle);
searching('searching.avlSort', avlSort, valuesShuffle);

removing('removing.avlRandom', avlRandom, valuesShuffle);
removing('removing.avlSort', avlSort, valuesShuffle);

reports.showConsole();

function searching (name: string, tree: IBST | IAVL, values: number[]): void {
  const duration = new Duration();

  duration.start();

  for (const value of values) {
    const res = tree.search(value);

    assert.equal(res, true);
  }

  duration.end();

  reports.addToSet({ name: 'searching', sets: [{ duration: duration.duration(), name }] });
}

function removing (name: string, tree: IBST | IAVL, values: number[]): void {
  const duration = new Duration();

  duration.start();

  for (const value of values) {
    tree.remove(value);
  }

  duration.end();

  reports.addToSet({ name: 'removing', sets: [{ duration: duration.duration(), name }] });
}
