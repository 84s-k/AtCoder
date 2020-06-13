const input = require("fs").readFileSync("/dev/stdin", "utf8");
const number = parseInt(input.replace(" ", ""), 10);
const square = Math.sqrt(number);
console.log(square === parseInt(square, 10) ? "Yes" : "No");
