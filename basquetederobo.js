const input = require("fs").readFileSync(0, "utf8").trim();
const D = parseInt(input);

if (D <= 800) {
  console.log(1);
} else if (D <= 1400) {
  console.log(2);
} else {
  console.log(3);
}