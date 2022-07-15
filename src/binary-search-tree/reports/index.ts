import Table from 'cli-table3';

import { IReport, IReports, IReportSet } from './model';

export class Reports implements IReports {
  private readonly list: IReport[];

  constructor () {
    this.list = [];
  }

  public addToSet (report: IReport): void {
    const index = this.list.findIndex(item => item.name === report.name);

    if (index >= 0) {
      this.list[index].sets = [...this.list[index].sets, ...report.sets];
    } else {
      this.list.push(report);
    }
  }

  public showConsole (): void {
    const sets = this.findMaxSets();

    const table = new Table({
      head: ['', ...sets.map(set => set.name)]
    });

    this.list.forEach(report => {
      const row = [report.name];

      report.sets.forEach(set => {
        row.push(`${set.duration}ms`);
      });

      table.push(row);
    });

    console.log(table.toString());
  }

  private findMaxSets (): IReportSet[] {
    return this.list.reduce<IReportSet[]>((maxSets, item) => {
      return item.sets.length > maxSets.length ? item.sets : maxSets;
    }, []);
  }
}
