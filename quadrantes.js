const [X, Y] = input.trim().split("\n").map(Number);

if (X > 0 && Y > 0) {
    console.log("Q1");
} else if (X < 0 && Y > 0) {
    console.log("Q2");
} else if (X < 0 && Y < 0) {
    console.log("Q3");
} else if (X > 0 && Y < 0) {
    console.log("Q4");
} else if (X === 0 || Y === 0){
    console.log("eixos");
}