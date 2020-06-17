import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
  .split(/\n/)
  .map(Number);

let x = input[3];
let count = 0;
for (let a = 0; a <= input[0]; a++) {
  for (let b = 0; b <= input[1]; b++) {
    for (let c = 0; c <= input[2]; c++) {
      if (a * 500 + b * 100 + c * 50 === x) count++;
    }
  }
}

console.log(count);
