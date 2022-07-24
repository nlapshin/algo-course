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

  remove (value: number): BinaryTreeNode | null {
    if (this.root == null) {
      return null;
    }

    this.root = this.root.remove(value);

    return this.root;
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
}
