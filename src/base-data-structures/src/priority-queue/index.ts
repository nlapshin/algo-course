import { IPriorityQueue, IQueueItem } from './model'

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private items: IQueueItem<T>[] = []

  list() {
    return this.items
  }

  enqueue(priority: number, item: T): void {
    let contain = false
    const queueItem = { priority, item }

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > priority) {
        this.items.splice(i, 0, queueItem)

        contain = true
        break
      }
    }

    if (!contain) {
      this.items.push(queueItem)
    }
  }
  
  dequeue(): IQueueItem<T> | undefined {
    return this.items.length > 0 ? this.items.shift() : undefined;
  }
}
