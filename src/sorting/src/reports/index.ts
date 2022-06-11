import Table from 'cli-table3'

import { IReport, IReports } from './model'

export class Reports implements IReports {
  private list: IReport[]

  constructor () {
    this.list = []
  }

  public add (report: IReport) {
    this.list.push(report)
  }

  public showConsole () {
    const sets = this.list[0].sets

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
}
