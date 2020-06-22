import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8") as number;
console.log(input < 3 ? 0 : Math.floor(input / 3));
