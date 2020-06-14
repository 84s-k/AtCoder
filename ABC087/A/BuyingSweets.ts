import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
  .split("\n")
  .map(Number);
let remainingMoney: number = input[0];
remainingMoney -= input[1];
const donutsCount: number = Math.floor(remainingMoney / input[2]);
remainingMoney -= input[2] * donutsCount;

console.log(remainingMoney);
