const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let X = Number(input);

if (X === 0) {
    console.log("0");
} else {
    let binario = "";

    while (X > 0) {
        binario = (X % 2) + binario;
        X = Math.floor(X / 2);
    }

    console.log(binario);
}
