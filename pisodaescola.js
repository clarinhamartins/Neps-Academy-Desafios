const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const L = input[0]
const C = input[1]

const tipo1 = L * C + (L - 1) * (C - 1)

const tipo2 = 2 * (L - 1) + 2  * (C - 1)
console.log(tipo1)
console.log(tipo2)