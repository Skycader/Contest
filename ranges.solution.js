/* Fri 02 February 2024 */
const generator = () => {
  const result = [];

  let prev = null;

  return (num) => {
    num !== null
      ? prev !== null
        ? prev + 1 !== num
          ? result.push([num])
          : (result[result.length - 1][1] = num)
        : result.push([num])
      : null;
    prev = num;
    if (num === null) return result;
  };
};
const f = generator();
a = [1, 2, 3, 5, 8, null];
a.reduce((total, item) => f(item));

const f = (arr) =>
  arr
    .map(
      (() => {
        const result = [];
        arr.push(null);
        let prev = null;

        return (num) => {
          num !== null
            ? prev !== null
              ? prev + 1 !== num
                ? result.push([num])
                : (result[result.length - 1][1] = num)
              : result.push([num])
            : null;
          prev = num;
          if (num === null) return result;
        };
      })(),
    )
    .filter(Boolean);

const f = (arr) =>
  arr.map(
    (() => {
      const result = [];
      let prev = null;

      return (num) => {
        prev !== null
          ? prev + 1 !== num
            ? result.push([num])
            : (result[result.length - 1][1] = num)
          : result.push([num]);
        prev = num;
        if (num === "END") return result;
      };
    })(),
  );

const f = (arr) =>
  arr
    .map(func)
    .at(-1)
    .map((element) =>
      element.length === 2 ? `${element[0]}->${element[1]}` : `${element[0]}`,
    )
    .slice(0, -1);

const generateFunc = () => {
  let prevNum = null;
  const result = [];
  return (currentNum) => {
    if (prevNum === null) {
      result.push([currentNum]);
      prevNum = currentNum;
    } else {
      if (prevNum + 1 === currentNum) {
        result[result.length - 1][1] = currentNum;
      }

      if (prevNum + 1 !== currentNum) {
        result.push([currentNum]);
      }
      prevNum = currentNum;

      if (currentNum === "END") return result;
    }
  };
};

const func = generateFunc();

/*Thu 05 January 2023  17:58 */
const f = (nums) => {
  const res = [];

  for (let start = 0, i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1 || nums.length === i) {
      res.push(nums[start] + (start < i - 1 ? `->${nums[i - 1]}` : ``));
      start = i;
    }
  }

  return res;
};

/* Mon 29 december 2022 09:17 */

const f = (nums) => {
  const res = [];
  for (let start = 0, i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1 || i === nums.length) {
      res.push(nums[start] + (start < i - 1 ? `->${nums[i - 1]}` : ``));
      start = i;
    }
  }
  return res;
};

/* Mon 26 december 2022 22:43 */
const f = (nums) => {
  const res = [];
  for (let start = 0, i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1 || i == nums.length) {
      res.push(nums[start] + (start < i - 1 ? `->${nums[i - 1]}` : ``));
      start = i;
    }
  }
  return res;
};

const summaryRanges = (nums) => {
  let i = 0;
  let arr = [];
  let chain = 0;
  for (let item of nums) {
    if (nums[i + 1] == item + 1 && chain == 0) {
      //chain begin
      chain = 1;
      arr.push(`${item}->`);
    }
    if (nums[i + 1] != item + 1) {
      //chain break
      chain = 0;
      if (arr[arr.length - 1]?.slice(-2) == "->") {
        arr[arr.length - 1] += item;
      } else arr.push(`${item}`);
    }
    i++;
  }
  return arr;
};

const f = (nums) => {
  /* 12 december 2022 */
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], " ", nums[i + 1]);
    if (nums[i] + 1 !== nums[i + 1]) {
      //detected break
      stack.push(nums[i] + ";");
      console.log("PUSHING1: ", nums[i]);
      if (nums[i + 1] + 1 == nums[i + 2]) stack.push(nums[i + 1] + "->");
      console.log("PUSHING2: ", nums[i + 1]);
    }
  }
  return stack;
};

const f = (nums) => {
  let arr = [];
  let chain = 0;
  let i = 0;
  for (let num of nums) {
    if (num + 1 == nums[i + 1] && chain == 0) {
      arr.push(`${num}->`);
      chain = 1;
    }
    if (num + 1 !== nums[i + 1]) {
      chain = 0;
      if (arr[arr.length - 1]?.slice(-2) == "->") {
        arr[arr.length - 1] += num;
      } else {
        arr.push(num.toString());
      }
    }
    i++;
  }
  return arr;
};

const f = (nums) => {
  let i = 0;
  let arr = [];
  let chain = false;
  for (let num of nums) {
    if (num + 1 == nums[i + 1]) {
      if (!chain) {
        chain = true;
        arr.push(num);
      }
    } else {
      if (chain) {
        arr[arr.length - 1] = arr[arr.length - 1] + "->" + num;
      } else {
        arr.push(num.toString());
      }
      chain = false;
    }

    i++;
  }
  return arr;
};

const arr = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(arr));
