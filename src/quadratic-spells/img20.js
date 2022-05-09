const NUM = 25

const HASHTAG = '# '
const DOT = '. '

for (let i = 0; i < NUM; i++) {
  for (let j = 0; j < NUM; j++) {
    process.stdout.write(condiction(i, j) ? HASHTAG : DOT)
  }

  process.stdout.write("\n")
}


function condiction(i, j) {
  return (j % 2 !== 0 && i % 2 !== 0) || (i % 2 === 0) && (j % 2 === 0)
}

/*
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
. # . # . # . # . # . # . # . # . # . # . # . # . 
# . # . # . # . # . # . # . # . # . # . # . # . # 
*/