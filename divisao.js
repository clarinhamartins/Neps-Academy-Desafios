const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let A = parseFloat(input.split("\n")[0])
let B = parseFloat(input.split("\n")[1])

// Seu código vai aqui
let n1 = A
let n2 = B 
console.log(A/B)