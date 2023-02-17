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

const f = hubs => {
	let res = {}
	for (let hub of hubs) {
		res[hub.browserName] = res[hub.browserName] || {active: 0, total: 0}
		res[hub.browserName].active += hub.active
		res[hub.browserName].total += hub.total
	}
	return res
}

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

module.exports=f
// console.log(f(hubs))
