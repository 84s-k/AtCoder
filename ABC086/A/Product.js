function Main(input) {
  input = input.split(/\s+/);
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  if ((a * b) % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

