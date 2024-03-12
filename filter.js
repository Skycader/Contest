const f = (arr, func) => {
  const result = [];
  for (let item of arr) {
    func(item) ? result.push(item) : "";
  }
  return result;
};

module.exports = f;
