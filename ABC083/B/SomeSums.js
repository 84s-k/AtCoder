const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(/\s/)
  .map(Number);

var ret = 0;
for (var i = 1; i <= input[0]; i++) {
  var s = i.toString().split("");
  var sum = s.map(Number).reduce((a, b) => a + b);
  if (input[1] <= sum && sum <= input[2]) ret += i;
}

console.log(ret);
