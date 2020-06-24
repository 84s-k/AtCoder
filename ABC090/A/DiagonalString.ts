import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split(/\n/);
console.log(input[0].charAt(0) + input[1].charAt(1) + input[2].charAt(2));
