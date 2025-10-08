const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numeros = input.map(Number);

const pares = input.filter(n => n % 2 === 0);
const impares = input.filter(n => n % 2 !== 0);

console.log(pares.join(' '));
console.log(impares.join(' '));