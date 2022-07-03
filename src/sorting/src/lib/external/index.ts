import * as fs from 'fs'
import fse from 'fs-extra'
import readline from 'readline'
import { pipeline } from 'stream/promises'

import { UtilsSorting } from '../../utils'
import { IUtilsSorting } from '../../utils/model'

import { MergeSorting } from '../merge'
import { IMergeSorting } from '../merge/model'

import { IExternalSorting } from './model'

export class ExternalSorting implements IExternalSorting {
  private utils: IUtilsSorting = new UtilsSorting()
  private mergeSorting: IMergeSorting = new MergeSorting()

  async tFiles (inputFile: string, outputFile: string, rowCount: number, maxCount: number): Promise<void> {
    const fileStream = fs.createReadStream(inputFile)

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    })

    let count = 0
    let part = 0
    const partArr = []
    const tmpFiles = []

    for await (const line of rl) {
      partArr.push(+line)
      count = count + 1

      if (count % rowCount === 0) {
        part = part + 1
        const sortArr = this.mergeSorting.simple(partArr)

        const tmpFile = this.writeToFile(inputFile, part, sortArr)
        tmpFiles.push(tmpFile)

        partArr.length = 0
      }
    }

    await this.merge(tmpFiles, outputFile)
  }

  private async merge (tmpFiles: string[], outputFile: string) {
    fse.ensureFileSync(outputFile)
    const fileStream = fs.createWriteStream(outputFile)

    const activeReaders = tmpFiles.map(
      name => readline.createInterface(
        { input: fs.createReadStream(name), crlfDelay: Infinity }
      )[Symbol.asyncIterator]()
    )

    const values = await Promise.all<number>(activeReaders.map(r => r.next().then(e => parseInt(e.value))))

    return pipeline(
      async function * () {
        while (activeReaders.length > 0) {
          const [minVal, i] = values.reduce((prev, cur, idx) => cur < prev[0] ? [cur, idx] : prev, [Infinity, -1])

          yield `${minVal}\n`
          const res = await activeReaders[i].next()

          if (!res.done) {
            values[i] = parseInt(res.value)
          } else {
            values.splice(i, 1)
            activeReaders.splice(i, 1)
          }
        }
      },
      fileStream
    )
  }

  private writeToFile (inputFile: string, part: number, arr: number[]): string {
    const filePath = inputFile.replace('.in', '.part') + '.' + part

    fse.ensureFileSync(filePath)
    fs.writeFileSync(filePath, arr.join('\n'))

    return filePath
  }
}
