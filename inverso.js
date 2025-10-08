const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numeros = input.map(Number);

numeros.reverse();

for (let num of numeros) {
    console.log(num);
}