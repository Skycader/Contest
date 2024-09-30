const f = (arr) => {
  const output = [];

  for (let item of arr) {
    output[item] = item;
  }

  return output.filter((num) => num);
};

const a = [9, 8, 6, 2, 21, 1];
const b = [1, 2, 6, 8, 9, 21];

console.log(f(a), b);
