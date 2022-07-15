import { IUtils } from './model';

export class Utils implements IUtils {
  public generateRandomUniqArray (count = 10, min = 0, max: number = count): number[] {
    const set = new Set<number>();

    while (set.size < count) {
      set.add(this.getPseudoRandom(min, max));
    }

    return [...set];
  }

  public shuffleArray (array: number[]): number[] {
    const workArray = [...array];
    const shuffleArray = [];

    while (workArray.length) {
      const num = workArray.splice(this.getPseudoRandom(0, workArray.length - 1), 1);
      shuffleArray.push(num[0]);
    }

    return shuffleArray;
  }

  private getPseudoRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
