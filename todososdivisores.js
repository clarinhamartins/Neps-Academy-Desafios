const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let saida = ''
for(let i=0; i<=input; i++){
   if(input%i ==0){
       saida += i + ' '
   }
}

console.log(saida)