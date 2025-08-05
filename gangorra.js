const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let lines = input.split(" ")

let P1 = parseInt(lines[0])
let C1 = parseInt(lines[1])
let P2 = parseInt(lines[2])
let C2 = parseInt(lines[3])

// Seu código vai aqui
let ladoEsquerdo = P1 * C1
let ladoDireito = P2 * C2

if(ladoEsquerdo == ladoDireito){
    console.log(0)
}else if(ladoEsquerdo > ladoDireito){
    console.log(-1)
}else{
    console.log(1)
}
