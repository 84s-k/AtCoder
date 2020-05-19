function Main(input) {
  var counter = 0;
  var inputNumbers = input.split(/\n/)[1].split(/\s/);

  while (inputNumbers.every((num) => num % 2 === 0)) {
    inputNumbers = inputNumbers.map((num) => num / 2);
    counter++;
  }

  console.log(counter);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
