import fs from 'fs'

export class RLE {
  public encode (text: string): string {
    let encodedText = ''
    let i = 0
    let count = 1

    while (i < text.length) {
      if (text[i] === text[i + 1]) {
        ++count
      } else {
        encodedText += `${count}${text[i]}`
        count = 1
      }

      i++
    }

    return encodedText
  }

  public decode (encodedText: string): string {
    let decodedText = ''
    let i = 0

    while (i < encodedText.length) {
      const count = +encodedText[i]
      const char = encodedText[i + 1]

      for (let j = 0; j < count; j++) {
        decodedText += char
      }

      i = i + 2
    }

    return decodedText
  }

  public encodeFile (inputFilePath: string, outputFilePath: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(inputFilePath)
      const writableStream = fs.createWriteStream(outputFilePath)

      readableStream.setEncoding('utf8')

      readableStream.on('data', (chunk) => {
        const encodedText = this.encode(chunk.toString())

        writableStream.write(encodedText)
      })

      readableStream.on('error', (err) => {
        reject(err)
      })

      writableStream.on('error', (err) => {
        reject(err)
      })

      readableStream.on('end', () => {
        resolve(true)
      })
    })
  }

  public decodeFile (inputFilePath: string, outputFilePath: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(inputFilePath)
      const writableStream = fs.createWriteStream(outputFilePath)

      readableStream.setEncoding('utf8')

      readableStream.on('data', (chunk) => {
        const encodedText = this.decode(chunk.toString())

        writableStream.write(encodedText)
      })

      readableStream.on('error', (err) => {
        reject(err)
      })

      writableStream.on('error', (err) => {
        reject(err)
      })

      readableStream.on('end', () => {
        resolve(true)
      })
    })
  }
}
