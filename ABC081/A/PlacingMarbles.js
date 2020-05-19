function Main(input) {
  var counter = 0;
  const s = input.split("");
  if (s[0] == "1") counter++;
  if (s[1] == "1") counter++;
  if (s[2] == "1") counter++;

  console.log(counter);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
