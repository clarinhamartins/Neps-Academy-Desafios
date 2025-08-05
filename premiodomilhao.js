const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);;


// Seu código vai aqui
let n = input[0];
let acessos = input.slice(1);

let total = 0;
let dias = 0;

for (let i = 0; i < n; i++) {
    total += acessos[i];
    if (total >= 1000000) {
        dias = i + 1;
        break;
    }
}

console.log(dias);