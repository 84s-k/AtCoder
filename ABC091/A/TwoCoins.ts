import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string)
  .split(/\s/)
  .map(Number);

console.log(input[0] + input[1] >= input[2] ? "Yes" : "No");
