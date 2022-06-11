import Table from 'cli-table3'

import { IReport, IReports, IReportSet } from './model'

export class Reports implements IReports {
  private list: IReport[]

  constructor () {
    this.list = []
  }

  public add (report: IReport) {
    this.list.push(report)
  }

  public showConsole () {
    const sets = this.findMaxSets()

    const table = new Table({
      head: ['', ...sets.map(set => set.name)]
    })

    this.list.forEach(report => {
      const row = [report.name]

      report.sets.forEach(set => {
        row.push(set.duration + 'ms')
      })

      table.push(row)
    })

    console.log(table.toString())
  }

  private findMaxSets (): IReportSet[] {
    return this.list.reduce((maxSets, item) => {
      return item.sets.length > maxSets.length ? item.sets : maxSets
    }, [] as IReportSet[])
  }
}
