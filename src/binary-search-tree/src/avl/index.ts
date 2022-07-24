import { IAVL } from './model';

import { BinaryTreeNode } from '../node';
import { BST } from '../bst';

export class AVL extends BST implements IAVL {
  insert (value: number): BinaryTreeNode | null {
    const node = super.insert(value);

    this.root = this.rebalance(node);

    return node;
  }

  remove (value: number): boolean {
    const node = this.find(value);

    if (node) {
      const found = super.remove(value);

      this.root = this.rebalance(node.parent);

      return found;
    }

    return false;
  }

  public rebalance (node: BinaryTreeNode | null): BinaryTreeNode | null {
    let current = node;
    let newParent = null;

    while (current) {
      newParent = this.balance(current);
      current = current.parent;
    }

    return newParent;
  }

  public balance (node: BinaryTreeNode): BinaryTreeNode | null {
    if (node.balanceFactor > 1) {
      if ((node.left as BinaryTreeNode).balanceFactor < 0) {
        return this.leftRightRotation(node);
      }

      return this.rightRotation(node);
    } else if (node.balanceFactor < -1) {
      if ((node.right as BinaryTreeNode).balanceFactor > 0) {
        return this.rightLeftRotation(node);
      }

      return this.leftRotation(node);
    }

    return node;
  }

  public leftRotation (node: BinaryTreeNode): BinaryTreeNode | null {
    if (!node.right) {
      return null;
    }

    const newParent = node.right;
    const grandparent = node.parent;
    const previousLeft = newParent.left;

    this.swapParentChild(node, newParent, grandparent);

    newParent.setLeftAndUpdateParent(node);
    node.setRightAndUpdateParent(previousLeft);

    return newParent;
  }

  public rightRotation (node: BinaryTreeNode): BinaryTreeNode | null {
    if (!node.left) {
      return null;
    }

    const newParent = node.left;
    const grandparent = node.parent;
    const previousRight = newParent.right;

    this.swapParentChild(node, newParent, grandparent);

    newParent.setRightAndUpdateParent(node);
    node.setLeftAndUpdateParent(previousRight);

    return newParent;
  }

  public leftRightRotation (node: BinaryTreeNode): BinaryTreeNode | null {
    if (!node.left) {
      return null;
    }

    this.leftRotation(node.left);
    return this.rightRotation(node);
  }

  public rightLeftRotation (node: BinaryTreeNode): BinaryTreeNode | null {
    if (!node.right) {
      return null;
    }

    this.rightRotation(node.right);
    return this.leftRotation(node);
  }

  private swapParentChild (oldChild: BinaryTreeNode, newChild: BinaryTreeNode, parent: BinaryTreeNode | null): void {
    if (parent) {
      const side = oldChild.isParentRightChild ? 'Right' : 'Left';

      parent[`set${side}AndUpdateParent`](newChild);
    } else {
      newChild.parent = null;
    }
  }
}
