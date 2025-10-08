const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const N = parseInt(input[0]);
const UM = input.slice(1).map(Number);

let maisDeUmPico = false;

for (let i = 1; i < N - 1; i++) { 
    if (UM[i - 1] > UM[i] && UM[i] < UM[i + 1]) {
        maisDeUmPico = true;
        break;
    }
}

console.log(maisDeUmPico ? 'S' : 'N');