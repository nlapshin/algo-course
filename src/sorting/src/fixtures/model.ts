export interface IFixture {
  count: number
  input: number[]
  expected: number[]
}

export interface ISetFixtures {
  random: IFixture[]
  digits: IFixture[]
  sorted: IFixture[]
  revers: IFixture[]
}
