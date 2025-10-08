const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const precos = input[1].split(' ').map(Number);

console.log(((precos[precos.length - 1] - precos[0]) * 100).toFixed(2));
