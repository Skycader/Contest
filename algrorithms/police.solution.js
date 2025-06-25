const f = (suspects, dead) =>
  Object.entries(suspects).find(([suspect, seen]) =>
    dead.every((dead) => seen.includes(dead)),
  )[0];

const f = (suspects, deadPeople) => {
  for (let [suspect, seenPeople] of Object.entries(suspects)) {
    if (deadPeople.every((deadMan) => seenPeople.includes(deadMan)))
      return suspect;
  }

  return null;
};
