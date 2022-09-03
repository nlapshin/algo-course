export type comparatorFn<T> = (a: T, b: T) => boolean

export class Node<T> {
  data: T
  // eslint-disable-next-line no-use-before-define
  next: Node<T> | null = null

  constructor (data: T) {
    this.data = data
  }
}

export class LinkedList<T = number> {
  private _head: Node<T> | null = null
  private comparator: comparatorFn<T>

  constructor (comparator?: comparatorFn<T>) {
    this.comparator = comparator || ((a: T, b: T) => a === b)
  }

  public get head (): Node<T> | null {
    return this._head
  }

  public append (data: T): void {
    if (!this._head) {
      this._head = new Node(data)
    } else {
      let current = this._head

      while (current.next !== null) {
        current = current.next
      }

      current.next = new Node(data)
    }
  }

  public search (data: T): Node<T> | null {
    if (!this._head) {
      return null
    }

    let current: Node<T> | null = this._head

    while (current !== null) {
      if (this.comparator(data, current.data)) {
        return current
      }

      current = current.next
    }

    return null
  }
}
