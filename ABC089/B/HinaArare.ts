import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split(/\n/);
const hinaArare = input[1].split(/\s/);
const ret = hinaArare.filter((val, index) => hinaArare.indexOf(val) == index);
console.log(ret.length == 3 ? "Three" : "Four");
