const f = (arr) => {
  const promise = new Promise((resolve, reject) => {
    const output = [];
    let count = 0;
    const length = arr.length;
    for (let item of arr) {
      setTimeout(() => {
        output.push(item);
        count++;
        if (count === length) {
          resolve(output);
        }
      }, item);
    }
  });

  return promise;
};

f([5, 4, 3, 2, 1]).then((res) => console.log(res));
