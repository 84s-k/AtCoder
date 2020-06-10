const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(/\n/);
const _ = input.shift();
const ret = input.filter((val, index) => input.indexOf(val) == index);
console.log(ret.length);
