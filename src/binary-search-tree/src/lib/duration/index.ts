import { performance } from 'perf_hooks';

export class Duration {
  private startTime: number = 0;
  private endTime: number = 0;

  public start (): void {
    this.startTime = performance.now();
  }

  public end (): void {
    this.endTime = performance.now();
  }

  public duration (): number {
    return +(this.endTime - this.startTime).toFixed(3);
  }
}
