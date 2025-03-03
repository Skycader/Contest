const f = (num) => {
  let index = 0;
  let res = 0;
  while (num > 100) {
    index++;
    res += Math.floor(100 / index);
    num -= 100;
  }
  index++;
  res += Math.floor(num / index);
  return res;
};
