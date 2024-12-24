const binarySearch = (api, target) => {
  let start = 0;
  let end = api.getLength() - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    let middleElement = api.get(middle);
    if (middleElement < target) {
      start = middle + 1;
    }

    if (middleElement > target) {
      end = middle - 1;
    }

    if (middleElement === target) return middle;
  }
  return -1;
};
