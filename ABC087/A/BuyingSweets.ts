import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
  .split("\n")
  .map(Number);
const remainingMoney: number = (input[0] - input[1]) % input[2];
console.log(remainingMoney);
