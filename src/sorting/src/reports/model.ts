export interface IReportSet {
  name: string
  duration: number
}

export interface IReport {
  name: string
  sets: IReportSet[]
}

export interface IReports {
  add (report: IReport): void
  showConsole (): void
}
