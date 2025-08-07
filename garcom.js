const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.split('\n');
const n = parseInt(linhas[0]);

let coposQuebrados = 0;

for (let i = 1; i <= n; i++) {
    const [L, C] = linhas[i].trim().split(' ').map(Number);

    if (L > C) {
        coposQuebrados += C;
    }
}

console.log(coposQuebrados);