const input = require("fs").readFileSync("/dev/stdin", "utf8").split(/\n/);
const num = input[0].split(/\s/).map(Number);
const postCode = input[1].split("");

if (num[0] + num[1] + 1 != postCode.length) {
  console.log("No");
  return;
}

const n = postCode.filter((i) => i === "-");
if (n.length != 1) {
  console.log("No");
  return;
}

if (postCode.indexOf("-") != num[0]) {
  console.log("No");
  return;
}

console.log("Yes");
