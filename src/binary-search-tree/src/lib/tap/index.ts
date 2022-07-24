import { performance } from 'perf_hooks';
import chalk from 'chalk';

export class Tap {
  test (msg: string, handler: any, count = 1): number {
    const start = performance.now();

    let result;
    let error = '';

    try {
      for (let i = 0; i < count; i++) {
        result = handler();
      }
    } catch (err) {
      if (err instanceof Error) error = err.message;
    } finally {
      const end = performance.now();
      const duration = +(end - start).toFixed(3);

      const output = error
        ? chalk.red.bold(`${msg}. Error: ${error} ${duration}ms`)
        : chalk.green.bold(`${msg}. Success: ${duration}ms`);

      console.log(output);

      return duration;
    }
  }
}
