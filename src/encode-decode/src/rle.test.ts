import fs from 'fs'
import { expect } from 'chai'
import { RLE } from './rle'

describe('RLE', () => {
  describe('encode and decode', () => {
    it('should encode and decode using rle', () => {
      const rle = new RLE()

      const text = 'AAAAAAABBBBBBCCCCDDABCD'
      const encodedText = rle.encode(text)

      expect(rle.encode(text)).to.equal(encodedText)
      expect(rle.decode(encodedText)).to.equal(text)
    })
  })

  describe('encodeFile and decodeFile', () => {
    it('should encode and decode file using rle', async () => {
      const rle = new RLE()

      const inputFilePath = './src/test-file'
      const encodedFilePath = './src/test-file-encoded'
      const decodedFilePath = './src/test-file-decoded'

      try {
        await rle.encodeFile(inputFilePath, encodedFilePath)
        await rle.decodeFile(encodedFilePath, decodedFilePath)

        const inputData = fs.readFileSync(inputFilePath).toString()
        const resultData = fs.readFileSync(decodedFilePath).toString()

        expect(inputData).to.equal(resultData)
      } finally {
        fs.unlinkSync(encodedFilePath)
        fs.unlinkSync(decodedFilePath)
      }
    })
  })
})
