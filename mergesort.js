const sort = (list = []) => {
  if (list.length === 1) {
    return list;
  }
  const middle = Math.floor(list.length / 2);
  const left = sort(list.slice(0, middle));
  const right = sort(list.slice(middle, list.length));
  return merge(left, right);
};

let swaps = 0;

const merge = (left = [], right = []) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
    swaps++;
  }
  return [...result, ...left, ...right];
};

const run = () => {
  const input = process.argv[2];
  if (!input)
    return console.error(
      "Please provide an input array like this: \nnode mergesort.js '[3,1,5,2]'"
    );
  const inputParsed = JSON.parse(input);
  console.log("input:\t", inputParsed);
  console.log("sorted:\t", sort(inputParsed));
  console.log("swaps:\t", swaps);
};

run();
