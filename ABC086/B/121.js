const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .replace(/\s/g, "");
const sqrt = Math.sqrt(input - 0);
console.log(Number.isInteger(sqrt) ? "YES" : "No");
