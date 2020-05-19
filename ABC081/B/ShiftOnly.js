function Main(input) {
  var counter = 0;
  const inputStrings = input.split(/\n/);

  var sum = 0;
  inputStrings[1].split(/\s/).forEach((num) => {
    sum += Number(num);
  });

  while (true) {
    if (sum % 2 == 1) {
      break;
    }

    sum /= 2;
    counter++;
  }

  console.log(counter);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
