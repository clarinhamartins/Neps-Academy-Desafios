const fs = require('fs');

function contarEscadinhas(N, sequencia) {
    if (N <= 1) {
        return N;
    }

    let numeroDeEscadinhas = 1;
    let diferencaAtual = sequencia[1] - sequencia[0];

    for (let i = 2; i < N; i++) {
        let novaDiferenca = sequencia[i] - sequencia[i - 1];

        if (novaDiferenca !== diferencaAtual) {
            numeroDeEscadinhas++;
            diferencaAtual = novaDiferenca;
        }
    }

    return numeroDeEscadinhas;
}

function main() {
    try {
        const input = fs.readFileSync(0, 'utf8').trim().split('\n');
        
        const N = parseInt(input[0].trim(), 10);
        
        const sequencia = input[1].trim().split(/\s+/).map(Number);
        
        const resultado = contarEscadinhas(N, sequencia);
        
        console.log(resultado);
        
    } catch (e) {
    }
}

main();