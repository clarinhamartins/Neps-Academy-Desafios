const input = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const [n1, n2, n3, n4] = input;

if (n1 === n3 || n2 === n4) {
  console.log("V");
} else {
  console.log("F");
}