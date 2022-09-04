import { TriePrefixTreeNode } from './trie-prefix-tree-node'

export class TriePrefixTree {
  private rootList: {[key: string]: TriePrefixTreeNode} = {}

  public insert (key: string): void {
    const firstChar = key[0]

    if (!this.rootList[firstChar]) {
      this.rootList[firstChar] = new TriePrefixTreeNode(firstChar)
    }

    let currentNode = this.rootList[firstChar]

    for (let i = 1; i < key.length; i++) {
      const bite = key[i]

      const nodeLeaf: TriePrefixTreeNode | undefined = currentNode.findLeaf(bite)
      currentNode = nodeLeaf || currentNode.push(bite)
    }

    currentNode.setValue(key)
  }

  public search (key: string): boolean {
    const currentNode = this.findNode(key)

    return currentNode?.value === key
  }

  public startsWith (key: string): boolean {
    const currentNode = this.findNode(key)

    return currentNode !== undefined
  }

  private findNode (key: string): TriePrefixTreeNode | undefined {
    let currentNode: TriePrefixTreeNode | undefined

    for (let i = 0; i < key.length; i++) {
      const bite = key[i]

      if (i === 0) {
        currentNode = this.rootList[bite]
      } else {
        currentNode = currentNode?.findLeaf(bite)
      }

      if (!currentNode) {
        return undefined
      }
    }

    return currentNode
  }
}
