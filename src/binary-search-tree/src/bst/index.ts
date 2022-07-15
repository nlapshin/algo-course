import { IBST } from './model';

import { BSTNode } from './node';

export class BST implements IBST {
  private root: BSTNode | null = null;

  insert (value: number): void {
    if (this.root === null) {
      this.root = new BSTNode(value);
    } else {
      this.root.insertAt(value);
    }
  }

  remove (value: number): void {
    if (this.root == null) {
      return;
    }

    this.root = this.root.remove(value);
  }

  search (value: number): boolean {
    return (this.root !== null) ? this.root.hasValue(value) : false;
  }

  sort (): number[] {
    return (this.root !== null) ? this.root.getValues() : [];
  };
}
