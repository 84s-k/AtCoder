const inputNumbers = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(/\s/)
  .map(Number);

const ret = Math.ceil((inputNumbers[0] + inputNumbers[1]) / 2);
console.log(ret);
