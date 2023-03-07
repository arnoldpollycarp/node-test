const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync("./content/first.txt", 'utf8')

writeFileSync("./content/apol.txt", `Here is the third test for file write: ${first}`, 
{ flag: 'a' })

console.log(first)