Рекурсивно:

const flatten = arr => [].concat(...arr.map(n => Array.isArray(n) ? flatten(n) : n));

или

function flatten(arr) {
  const result = [];

  for (const n of arr) {
    if (n?.constructor === Array) {
      [].push.apply(result, flatten(n));
    } else {
      result.push(n);
    }
  }

  return result;
}

Без рекурсии:

function flatten(arr) {
  const result = [];
  const stack = [];

  for (let i = 0; i < arr.length || stack.length; i++) {
    if (i >= arr.length) {
      [ arr, i ] = stack.pop();
    } else if (arr[i] instanceof Array) {
      stack.push([ arr, i ]);
      arr = arr[i];
      i = -1;
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}

или

function flatten(arr) {
  const result = [...arr];
  let i = 0;

  while (i < result.length) {
    if (result[i] instanceof Array) {
      result.splice(i, 1, ...result[i]);
    } else {
      i++;
    }
  }

  return result;
}
