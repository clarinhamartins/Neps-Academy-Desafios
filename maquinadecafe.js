const fs = require('fs')
const input = fs.readFileSync(0,'utf8').trim().split('\n').map(Number)

let U1 = parseInt(input[0])
let U2 = parseInt(input[1])
let U3 = parseInt(input[2])

let total1 = U2*2 + U3*4 

let total2 = U1*2 + U3*2

let total3 = U1*4 + U2*2

let resposta = Math.min(total1,total2,total3)
console.log(resposta)