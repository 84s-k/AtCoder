import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split(/\s/);
let cnt = 0;
for (
  let index = parseInt(input[0], 10);
  index <= parseInt(input[1], 10);
  index++
) {
  let s = index.toString();
  let n = s.split("").reverse().join("");
  if (s === n) cnt++;
}

console.log(cnt);
