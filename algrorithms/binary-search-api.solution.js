/**
 * Эталонная функция
 * 20 jan 2025
 */
const binarySearch = (api, target) => {
  const length = api.getLength();

  let start = 0;
  let end = length;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    let middleElement = api.get(middle);
    if (target > middleElement) {
      start = middle + 1;
    }

    if (target < middleElement) {
      end = middle - 1;
    }

    if (target === middleElement) {
      return middle;
    }
  }

  return -1;
};

const binarySearch2 = (api, target) => {
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
