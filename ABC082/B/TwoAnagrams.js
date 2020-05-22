const inputText = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(/\n/);
const a = inputText[0].split("").sort();
const b = inputText[1].split("").sort().reverse();

console.log(a < b ? "Yes" : "No");
