const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

const N = parseInt(input.trim());

function fatorial(num) {
    if (num === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(N));
