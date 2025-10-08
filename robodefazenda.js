const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = input[0]; 
const C = input[1];
const S = input[2];
const comandos = input.slice(3);

let pos = 1;
let passagens = 0;

if (pos === S) {
    passagens = 1;
}

for (let i = 0; i < C; i++) {
    pos = (pos + comandos[i] - 1 + N) % N + 1;
    if (pos === S) passagens++;
}

console.log(passagens);
