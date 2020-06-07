const input = require("fs").readFileSync("/dev/stdin", "utf8");
const ret = 48 - Number(input);

console.log(ret);
