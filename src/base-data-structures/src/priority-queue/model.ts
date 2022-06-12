export interface IQueueItem<T = number> {
  priority: number
  item: T
}

export interface IPriorityQueue<T = number> {
  enqueue(priority: number, item: T): void
  dequeue(): IQueueItem<T> | undefined
}
