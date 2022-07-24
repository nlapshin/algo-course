import assert from 'assert';
import { Tap } from '../lib/tap';

import { BinaryTreeNode } from './';

const tap = new Tap();

tap.test('insertAt', () => {
  const rootNode = new BinaryTreeNode(5);

  rootNode.insertAt(10, rootNode);
  assert.equal(rootNode?.right?.parent, rootNode);

  rootNode.insertAt(2, rootNode);
  assert.equal(rootNode?.left?.parent, rootNode);

  rootNode.insertAt(3, rootNode);
  assert.equal(rootNode?.left?.right?.parent, rootNode?.left);

  rootNode.insertAt(15, rootNode);
  assert.equal(rootNode?.right?.right?.parent, rootNode?.right);
});
