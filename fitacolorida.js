const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const fita = input[1].split(' ').map(Number);

let distEsq = new Array(N).fill(N);
let ultima = -N;
for (let i = 0; i < N; i++) {
    if (fita[i] === 0) {
        ultima = i;
    }
    distEsq[i] = i - ultima;
}

let distDir = new Array(N).fill(N);
ultima = 2*N;
for (let i = N-1; i >= 0; i--) {
    if (fita[i] === 0) {
        ultima = i;
    }
    distDir[i] = ultima - i;
}

for (let i = 0; i < N; i++) {
    if (fita[i] === -1) {
        let d = Math.min(distEsq[i], distDir[i]);
        fita[i] = d >= 9 ? 9 : d;
    }
}

console.log(fita.join(' '));
