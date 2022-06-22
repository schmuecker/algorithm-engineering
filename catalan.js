const catalan = (count) => {
  const n = count - 2;
  const c = [];
  c.push(1);
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    let cat = 0;
    for (let j = 0; j <= i; j++) {
      counter++;
      cat += c[j] * c[i - j];
    }
    c[i + 1] = cat;
  }
  console.log(counter);
  return c;
};

const run = () => {
  const input = process.argv[2];
  if (!input)
    return console.error(
      "Please provide an input number like this: \nnode catalan.js 42"
    );
  const result = catalan(input);
  console.log(result);
};

run();
