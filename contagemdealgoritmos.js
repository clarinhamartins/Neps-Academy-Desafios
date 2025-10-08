const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const N = Number(input[0]);
const numeros = input.slice(1, N + 1);

let contagem = new Array(10).fill(0);

for (let num of numeros) {
  for (let digito of num) {
    contagem[Number(digito)]++;
  }
}

for (let i = 0; i < 10; i++) {
  console.log(`${i} - ${contagem[i]}`);
}