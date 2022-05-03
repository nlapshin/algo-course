const NUM = 25

const HASHTAG = '# '
const DOT = '. '

for (let i = 0; i < NUM; i++) {
  let step = i

  for (let j = 0; j < NUM; j++) {
    process.stdout.write(condiction(i, j, step) ? HASHTAG : DOT)
  }

  process.stdout.write("\n")
}


function condiction(i, j, step) {
  if (i === 0 || j === 0 ) {
    return true
  }
  
  for (let offset = 1; offset <= 12; offset++) {
    if ((i + offset) === j - (offset - 1) * step) {
      return true
    }
  }

  return false
}

/*
# # # # # # # # # # # # # # # # # # # # # # # # # 
# . # . # . # . # . # . # . # . # . # . # . # . # 
# . . # . . # . . # . . # . . # . . # . . # . . # 
# . . . # . . . # . . . # . . . # . . . # . . . # 
# . . . . # . . . . # . . . . # . . . . # . . . . 
# . . . . . # . . . . . # . . . . . # . . . . . # 
# . . . . . . # . . . . . . # . . . . . . # . . . 
# . . . . . . . # . . . . . . . # . . . . . . . # 
# . . . . . . . . # . . . . . . . . # . . . . . . 
# . . . . . . . . . # . . . . . . . . . # . . . . 
# . . . . . . . . . . # . . . . . . . . . . # . . 
# . . . . . . . . . . . # . . . . . . . . . . . # 
# . . . . . . . . . . . . # . . . . . . . . . . . 
# . . . . . . . . . . . . . # . . . . . . . . . . 
# . . . . . . . . . . . . . . # . . . . . . . . . 
# . . . . . . . . . . . . . . . # . . . . . . . . 
# . . . . . . . . . . . . . . . . # . . . . . . . 
# . . . . . . . . . . . . . . . . . # . . . . . . 
# . . . . . . . . . . . . . . . . . . # . . . . . 
# . . . . . . . . . . . . . . . . . . . # . . . . 
# . . . . . . . . . . . . . . . . . . . . # . . . 
# . . . . . . . . . . . . . . . . . . . . . # . . 
# . . . . . . . . . . . . . . . . . . . . . . # . 
# . . . . . . . . . . . . . . . . . . . . . . . # 
# . . . . . . . . . . . . . . . . . . . . . . . .
*/
