const input = require("fs").readFileSync("/dev/stdin", "utf8").split(/\s/);
const a = input[0] - 0 + (input[1] - 0);
const b = input[2] - 0 + (input[3] - 0);
console.log(a < b ? "Right" : a > b ? "Left" : "Balanced");
