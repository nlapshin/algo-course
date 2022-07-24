import { IBST } from './model';

import { BinaryTreeNode } from '../node';

export class BST implements IBST {
  public root: BinaryTreeNode | null = null;

  insert (value: number): BinaryTreeNode | null {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);

      return this.root;
    } else {
      return this.root.insertAt(value, this.root);
    }
  }

  remove (value: number): boolean {
    const { found: nodeToRemove, parent } = this.findNodeAndParent(value); // <1>

    if (!nodeToRemove) return false; // <2>

    const removedNodeChildren = this.combineLeftIntoRightSubtree(nodeToRemove);

    if (nodeToRemove === this.root) {
      this.root = removedNodeChildren;

      if (this.root) {
        this.root.parent = null;
      }
    } else if (nodeToRemove.isParentLeftChild) {
      parent?.setLeftAndUpdateParent(removedNodeChildren);
    } else {
      parent?.setRightAndUpdateParent(removedNodeChildren);
    }

    return true;

    // if (this.root == null) {
    //   return null;
    // }

    // this.root = this.root.remove(value);

    // return this.root;
  }

  find (value: number): BinaryTreeNode | null {
    return (this.root !== null) ? this.root.find(value) : null;
  }

  search (value: number): boolean {
    return (this.root !== null) ? this.root.hasValue(value) : false;
  }

  sort (): number[] {
    return (this.root !== null) ? this.root.getValues() : [];
  };

  private findNodeAndParent (value: number, node: BinaryTreeNode | null = this.root, parent: BinaryTreeNode | null = null): { found: BinaryTreeNode | null; parent: BinaryTreeNode | null} {
    if (!node || node.value === value) {
      return { found: node, parent };
    } if (value < node.value) {
      return this.findNodeAndParent(value, node.left, node);
    }
    return this.findNodeAndParent(value, node.right, node);
  }

  private combineLeftIntoRightSubtree (node: BinaryTreeNode | null): BinaryTreeNode | null {
    if (node?.right) {
      const leftmost = node.right.getDeepestLeftLeaf();

      leftmost?.setLeftAndUpdateParent(node.left);

      return node.right;
    }

    return node?.left ?? null;
  }
}
