const input = require("fs").readFileSync("/dev/stdin", "utf8").split("/");
input[0] = "2018";
console.log(input[0] + "/" + input[1] + "/" + input[2]);
