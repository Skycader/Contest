let obj = {
  text: 1,
  children: [
    { text: 2, children: [ {text: 11} ] },
    { text: 3 },
    {
      text: 4,
      children: [{ text: 5 }, { text: 6 }],
    },
  ],
};

const f = (obj) => {
  console.log(obj.text);
  if (obj.children != undefined) {
    obj.children.map((item) => f(item));
  }
  if (obj.children) f(obj.children);
};

f(obj);
