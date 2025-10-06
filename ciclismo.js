const fs = require('fs')
const input = fs.readFileSync(0, 'utf8')

let X = parseFloat(input)

let metros = X * 1.823 * 0.9144

console.log(metros.toFixed(2))