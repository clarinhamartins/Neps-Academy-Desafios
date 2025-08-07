let linhas = input.trim().split('\n');
let n = Number(linhas[0]); 
let situacao_Lampada = linhas[1].trim().split(' ').map(Number);

let a = 0;
let b = 0;

for (let i = 0; i < n; i++) {
    if (situacao_Lampada[i] === 1) {
        if (a === 0) {
            a = 1;
        } else {
            a = 0;
        }
    } else if (situacao_Lampada[i] === 2) {
        if (b === 1) {
            b = 0;
        } else {
            b = 1;
        }
        if (a === 1) {
            a = 0;
        } else {
            a = 1;
        }
    }
}
console.log(a);
console.log(b);