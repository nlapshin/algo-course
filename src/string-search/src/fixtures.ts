export interface IFixture {
  text: string
  mask: string
  expected: number
}

export const fixtures: IFixture[] = [
  { text: 'abcd', mask: 'a', expected: 0 },
  { text: 'abcd', mask: 'bcd', expected: 1 },
  { text: 'abcd', mask: 'cd', expected: 2 },
  { text: 'abcd', mask: 'd', expected: 3 },
  { text: 'abcd', mask: 'abcd', expected: 0 },
  { text: 'abcd', mask: 'e', expected: -1 },
  { text: 'abcd', mask: 'abcde', expected: -1 }
]
