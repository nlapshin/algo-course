export class BinaryTreeNode {
  public left: BinaryTreeNode | null = null;
  public right: BinaryTreeNode | null = null;
  public parent: BinaryTreeNode | null = null;

  constructor (private readonly value: number) {}

  public get height (): number {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  public get leftSubtreeHeight (): number {
    return this.left ? this.left.height + 1 : 0;
  }

  public get rightSubtreeHeight (): number {
    return this.right ? this.right.height + 1 : 0;
  }

  public get balanceFactor (): number {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }

  public get sideRelativeToParent (): 'left' | 'right' | null {
    if (!this.parent) {
      return null;
    }

    return this.parent.right === this ? 'right' : 'left';
  }

  public makeNode (value: number): BinaryTreeNode {
    return new BinaryTreeNode(value);
  }

  public find (value: number): BinaryTreeNode | null {
    const compareRes = this.compare(value);

    if (compareRes === 0) {
      return this;
    }

    if (compareRes === -1) {
      return this.left ? this.left.find(value) : null;
    } else {
      return this.right ? this.right.find(value) : null;
    }
  }

  public hasValue (value: number): boolean {
    const compareRes = this.compare(value);

    if (compareRes === 0) {
      return true;
    }

    if (compareRes === -1) {
      return this?.left !== null && this.left.hasValue(value);
    } else {
      return this?.right !== null && this.right.hasValue(value);
    }
  }

  public getValues (): number[] {
    if (this.left === null && this.right === null) {
      return [this.value];
    }

    const arr: number[] = [];

    if (this.left !== null) {
      arr.push(...this.left.getValues());
    }

    arr.push(this.value);

    if (this.right !== null) {
      arr.push(...this.right.getValues());
    }

    return arr;
  }

  public insertAt (value: number, parent: BinaryTreeNode): BinaryTreeNode | null {
    const compareRes = this.compare(value);

    if (compareRes === 0) {
      return null;
    }

    if (compareRes === -1) {
      if (this.left !== null) {
        this.left.insertAt(value, this);
      } else {
        this.left = this.makeNode(value);
      }

      this.parent = parent;

      return this.left;
    }

    if (compareRes === 1) {
      if (this.right !== null) {
        this.right.insertAt(value, this);
      } else {
        this.right = this.makeNode(value);
      }

      this.parent = parent;

      return this.right;
    }

    return null;
  }

  public remove (value: number): BinaryTreeNode | null {
    const compareRes = this.compare(value);

    if (compareRes === 0) {
      if (!this.left && !this.right) {
        return null;
      }

      if (this.left && !this.right) {
        return this.left;
      }

      if (!this.left && this.right) {
        return this.right;
      }

      if (this.left && this.right) {
        let newValue = this.left.getDeepestRightLeaf();

        if (newValue) {
          newValue.right = this.right;

          return newValue;
        }

        newValue = this.right.getDeepestLeftLeaf();

        if (newValue) {
          newValue.left = this.left;

          return newValue;
        }
      }
    }

    if (compareRes === -1 && this.left !== null) {
      this.left = this.left.remove(value);
    } else if (this.right !== null) {
      this.right = this.right.remove(value);
    }

    return this;
  }

  public getDeepestLeftLeaf (): BinaryTreeNode | null {
    return this.left ? this.left?.getDeepestLeftLeaf() : this;
  }

  public getDeepestRightLeaf (): BinaryTreeNode | null {
    return this.right ? this.right?.getDeepestRightLeaf() : this;
  }

  public compare (value: number): -1 | 1 | 0 {
    if (value < this.value) {
      return -1;
    } else if (value > this.value) {
      return 1;
    } else {
      return 0;
    }
  };
}
