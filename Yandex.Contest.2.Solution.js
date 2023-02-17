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

 /* 22.01.2023 18:31 */
const f = hubs => {
	let res = {}
	for (let hub of hubs) {
		res[hub.browserName] = res[hub.browserName] || {active: 0, total: 0}
		res[hub.browserName].active += hub.active
		res[hub.browserName].total += hub.total
	}
	return res
}

  
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

  const s = (arr) => {
    const obj = {}
    for (let item of arr) {
      if (!obj[item.browserName]) obj[item.browserName]={}
      if (!obj[item.browserName].total) obj[item.browserName].total=0
      if (!obj[item.browserName].active) obj[item.browserName].active=0
      obj[item.browserName].total += item.total
      obj[item.browserName].active += item.active
    }
    return obj
  }

  const f2 = (arr) => {
    const obj = {}
    for (let item of arr) {
      if (!obj[item.browserName]) obj[item.browserName] = {}
      if (!obj[item.browserName].total) obj[item.browserName].total = 0
      if (!obj[item.browserName].active) obj[item.browserName].active = 0
      obj[item.browserName].total+=item.total
      obj[item.browserName].active+=item.active
    }
    return obj
  }
  
  console.log(s(hubs))

  
