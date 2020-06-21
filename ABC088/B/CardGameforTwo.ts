import * as fs from "fs";
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split(/\n/);
const card = input[1]
  .split(/\s/)
  .map(Number)
  .sort((a, b) => b - a);

var pointDifferential = 0;
for (let index = 0; index < card.length; index++) {
  if (index % 2 == 0) {
    pointDifferential += card[index];
  } else {
    pointDifferential -= card[index];
  }
}

console.log(pointDifferential);
