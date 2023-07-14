/* 12 july 2023 22:27 GMT+3 */
const f = (num) => {
  let str = String(num);
  let max = -1;
  for (let i = 0; i <= 9; i++) {
    if (str.includes(i.toString().repeat(3))) {
      max = i;
    }
  }
  if (max === -1) return '';
  return max.toString().repeat(3);
};

//??
let f = (str) => {
  let max = -1;
  for (let i = 0; i < 10; i++) {
    if (str.indexOf(i.toString().repeat(3)) > -1) {
      if (max < i.toString().repeat(3) * 1)
        max = i.toString().repeat(3) * 1;
    }
  }
  if (max == 0) max = '000';
  if (max != -1) return max.toString();
  return '';
};

//05.december.2022
const f = (num) => {
  for (let i = 9; i >= 0; i--) {
    if (num.indexOf(i.toString().repeat(3)) !== -1) {
      return i.toString().repeat(3);
    }
  }
  return '';
};
