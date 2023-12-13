const fs = require('fs')

const buf = fs.readFileSync(process.argv[2])
const str = buf.toString()

const numofNL = (str.match(/\n/g) || []).length

console.log(numofNL)