import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split(/\n/);
var ret = "";
for (let index = 0; index < input.length; index++) {
  ret += input[index].split("")[index];
}

console.log(ret);
