var hubs = [
  {
    host: "hub01",
    browserName: "firefox",
    active: 3,
    total: 10,
  },
  {
    host: "hub02",
    browserName: "chrome",
    active: 2,
    total: 5,
  },
  {
    host: "hub03",
    browserName: "firefox",
    active: 0,
    total: 10,
  },
];

//Нужно посчитать общее число каждого вида браузеров и активное в данный момент.
//Результат для конкретного примера:
/*
{
  firefox: {
    active: 3,
    total: 20
  },
  chrome: {
    active: 2,
    total: 5
   }
}
*/

const sol = (arr) => {
  let res = {};
  for (item of arr) {
    let obj = res[item.browserName];
    obj = obj == undefined ? {} : obj;
    obj.active = obj.active == undefined ? 0 : obj.active;
    obj.active += item.active;
    obj.total = obj.total == undefined ? 0 : obj.total;
    obj.total+= item.total;
    res[item.browserName] = obj;
  }

  return res;
};

console.log(sol(hubs));

/*
 if (res[item.browserName] == undefined) {
      res[item.browserName] = {}
    }

    if (res[item.browserName].active == undefined) {
      res[item.browserName].active = 0
       
    }
    res[item.browserName].active = (res[item.browserName].active + item.active)
    */
