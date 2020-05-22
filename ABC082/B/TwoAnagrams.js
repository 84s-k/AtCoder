const inputText = require("fs").readFileSync("/dev/stdin", "utf8").split(/\n/);
const a = inputText[0].split("").sort();
const b = inputText[1].split("").sort().reverse();

if (a < b) {
  console.log("YES");
} else {
  console.log("No");
}
