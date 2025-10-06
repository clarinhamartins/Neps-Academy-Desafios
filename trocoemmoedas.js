const fs = require('fs')
const input = fs.readFileSync(0, 'utf8')

let C = parseInt(input)
const moedas = [100, 50, 25, 10, 5, 1]
let quantidade = []

let totalMoedas = 0

for (let i = 0; i < moedas.length; i++) {
    let q = Math.floor(C / moedas[i])
    quantidade.push(q)
    totalMoedas += q
    C -= q * moedas[i]
}

console.log(totalMoedas)
for (let i = 0; i < quantidade.length; i++) {
    console.log(quantidade[i])
}