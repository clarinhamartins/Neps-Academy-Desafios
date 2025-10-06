const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let um = parseInt(input[0]);
let b = parseInt(input[1]);

let calculo = Math.floor((um * 4 + b * 6) / 10);

console.log(calculo);