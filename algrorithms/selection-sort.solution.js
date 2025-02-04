const f = (api) => {
  const length = api.getLength();
  let sorted = 0;
  let minIndex = 0;
  while (sorted < length) {
    for (let i = sorted; i < length; i++) {
      if (api.get(i) < api.get(minIndex)) {
        minIndex = i;
      }
    }

    let replace = api.get(sorted);
    api.set(sorted, api.get(minIndex));
    api.set(minIndex, replace);
    sorted++;
    minIndex = sorted;
  }
};

/** 04 feb 2025 */
const f2 = (api) => {
  const length = api.getLength();
  let sorted = 0;
  let minIndex = 0;

  for (let j = 0; j < length; j++) {
    minIndex = sorted;
    for (let i = sorted; i < length; i++) {
      if (api.get(i) < api.get(minIndex)) minIndex = i;
    }
    swap = [api.get(minIndex), api.get(sorted)];
    api.set(sorted, swap[0]);
    api.set(minIndex, swap[1]);
    sorted++;
  }
};
