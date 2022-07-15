export class BSTNode {
  private left: BSTNode | null = null;
  private right: BSTNode | null = null;

  constructor (private readonly value: number) {

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

  public insertAt (value: number): void {
    const compareRes = this.compare(value);

    if (compareRes === 0) {
      return;
    }

    if (compareRes === -1) {
      if (this.left !== null) {
        this.left.insertAt(value);
      } else {
        this.left = new BSTNode(value);
      }

      return;
    }

    if (compareRes === 1) {
      if (this.right !== null) {
        this.right.insertAt(value);
      } else {
        this.right = new BSTNode(value);
      }
    }
  }

  public remove (value: number): BSTNode | null {
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

  public getDeepestLeftLeaf (): BSTNode | null {
    return this.left ? this.left?.getDeepestLeftLeaf() : this;
  }

  public getDeepestRightLeaf (): BSTNode | null {
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
