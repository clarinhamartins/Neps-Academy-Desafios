const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const N = parseInt(input[0]);
const postes = input.slice(1).map(Number);

let substituir = 0;
let consertar = 0;

for (let altura of postes) {
    if (altura < 50) {
        substituir++;
    } else if (altura < 85) {
        consertar++;
    }
}

console.log(substituir + " " + consertar);
