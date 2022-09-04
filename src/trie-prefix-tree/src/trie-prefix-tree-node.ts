export class TriePrefixTreeNode {
  // eslint-disable-next-line no-use-before-define
  public leafs: TriePrefixTreeNode[] = []

  private _bite: string
  private _value: string | null = null

  constructor (bite: string) {
    this._bite = bite
  }

  public get bite (): string {
    return this._bite
  }

  public get value (): string | null {
    return this._value
  }

  public push (bite: string): TriePrefixTreeNode {
    const leaf = new TriePrefixTreeNode(bite)

    this.leafs.push(leaf)

    return leaf
  }

  public setValue (value: string) {
    this._value = value
  }

  public findLeaf (bite: string): TriePrefixTreeNode | undefined {
    return this.leafs.find(leaf => this.compare(leaf.bite, bite))
  }

  private compare (bite: string, compareBite: string): boolean {
    return bite.charCodeAt(0) === compareBite.charCodeAt(0)
  }
}
