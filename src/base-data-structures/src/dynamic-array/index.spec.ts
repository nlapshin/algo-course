import { Tap } from '../../tap'

import { IDynamicArray, SingleArray } from './array'

const tap = new Tap()
const count = 10000

tap.test('single.array.addStart', addStart(new SingleArray()), count)
tap.test('single.array.addEnd', addEnd(new SingleArray()), count)
tap.test('single.array.addMiddle', addMiddle(new SingleArray()), count)

tap.test('single.array.removeStart', removeStart(new SingleArray(generateArr(count))), count)
tap.test('single.array.removeEnd', removeEnd(new SingleArray(generateArr(count))), count)
tap.test('single.array.removeMiddle', removeMiddle(new SingleArray(generateArr(count))), count)

function addStart(arr: IDynamicArray) {
  let item = 0
  let step = 3

  return () => {
    arr.addStart(item)

    item = item + step
  }
}

function addEnd(arr: IDynamicArray) {
  let item = 0
  let step = 3

  return () => {
    arr.addEnd(item)

    item = item + step
  }
}

function addMiddle(arr: IDynamicArray) {
  let item = 0
  let step = 3

  return () => {
    arr.addMiddle(item)

    item = item + step
  }
}

function removeStart(arr: IDynamicArray) {
  return () => {
    arr.removeStart()
  }
}

function removeEnd(arr: IDynamicArray) {
  return () => {
    arr.removeEnd()
  }
}

function removeMiddle(arr: IDynamicArray) {
  return () => {
    arr.removeMiddle()
  }
}

function generateArr(count = 100, start = 0, step = 3) {
  const arr = []

  for (let i = start; i < count * step; i = i + step) {
    arr.push(i)
  }

  return arr
}
