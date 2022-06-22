// Funktionsweise:

// 2^5 2^4 2^3 2^2 2^1 2^0
// 32  16  8   4   2   1

// -> Input: 25
// 1. Größte Zweierpotenz bestimmen
// 2. Diese von Dezimalzahl abziehen
// 3. Den Rest rekursiv in Funktion reingeben

const binary = (n, print = true) => {
  if (n <= 0) return 0;
  let ex = 0;
  while (n >= Math.pow(2, ex + 1)) {
    ex++;
  }
  const rest = n - Math.pow(2, ex);
  const result = Math.pow(10, ex) + binary(rest, false);
  if (print) {
    console.log("decimal = ", n);
    console.log("binaryary = ", result);
  }
  return result;
};

const run = () => {
  const input = process.argv[2];
  if (!input)
    return console.error(
      "Please provide an input number like this: \nnode binary.js 42"
    );
  binary(input);
};

run();
