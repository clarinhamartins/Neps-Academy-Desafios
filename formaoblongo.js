const fs = require('fs')
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number)

let X = input[0]
let E = input[1]

if(Math.abs(X - E) === 1){
   console.log(X * E)
}else{
    console.log('NAO FORMA OBLONGO!')
}