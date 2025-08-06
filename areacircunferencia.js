const fs = require("fs");
const R = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let areaCircunferencia= 3.1416*(R*R)
console.log(areaCircunferencia.toFixed(2))