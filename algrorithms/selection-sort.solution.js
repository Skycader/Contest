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
