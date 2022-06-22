function createArray(length) {
  var arr = new Array(length || 0),
    i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }
  return arr;
}

const triangle = (a = [[]]) => {
  const s = createArray(a.length, a[0].length);
  s[0][0] = a[0][0];
  for (let i = 1; i < a[a.length - 1].length; i++) {
    for (let j = 0; j <= i; j++) {
      let max = 0;
      let top = 0;
      let topLeft = 0;
      if (j !== i) {
        top = a[i][j] + s[i - 1][j];
      }
      if (j !== 0) {
        topLeft = a[i][j] + s[i - 1][j - 1];
      }
      max = Math.max(top, topLeft);
      s[i][j] = max;
    }
  }
  return Math.max(...s[s.length - 1]);
};

const run = () => {
  const input = process.argv[2];
  if (!input)
    return console.error(
      "Please provide an input array like this: \nnode triangle.js '[3,1,5,2]'"
    );
  const inputParsed = JSON.parse(input);
  console.log("input:\t", inputParsed);
  console.log("longest path:\t", triangle(inputParsed));
};

run();
