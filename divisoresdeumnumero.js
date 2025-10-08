const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim()
const N = Number(input)

let divisores = []
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisores.push(i)
  }
}

console.log(divisores.length + " divisor(es): " + divisores.join(' '))

const soma = divisores.reduce((a, b) => a + b, 0)
console.log("Soma de divisores = " + soma)

if (divisores.length === 2) {
  console.log('Primo')
} else {
  console.log('Nao primo')
}
