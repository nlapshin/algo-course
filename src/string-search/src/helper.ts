export function left (line: string, shift: number) {
  return line.slice(0, shift)
}

export function right (line: string, shift: number) {
  return line.slice(line.length - shift)
}
