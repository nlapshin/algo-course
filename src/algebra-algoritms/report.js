module.exports = class Report {
  constructor() {
    this.reports = {}
  }

  add(name, input, output, duration) {
    if (!this.reports[name]) {
      this.reports[name] = []
    }

    this.reports[name].push({ name, input, output, duration })
  }

  show() {
    const columns = Object.keys(this.reports)
    const rows = this.reports[columns[0]].map(item => item.input)
    let head = this.spaces(40)

    // this.spaces(10) + 

    for (let column of columns) {
      head += this.spaces(5) + `${column}` + this.spaces(5)
    }

    // this.spaces(10) + this.spaces(column.length / 2) + 

    console.log("\x1b[0m", head)

    // console.log(rows)

    for (let name of rows) {
      let row = `${name}` + this.spaces(40 - name.length)

      for (let column of columns) {
        const item = this.reports[column].find(item => item.input === name)
        const duration = `${item.duration}ms`

        row += this.spaces(5) + this.spaces((column.length - duration.length) / 2) + `${item.duration}ms` + this.spaces(5)
      }

      console.log(row)
    }
  }

  spaces(num) {
    let str = ''

    for (let i = 0; i < num; i++) {
      str += ' '
    }

    return str
  }
}
