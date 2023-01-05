
const fs = require("fs");

try {
  var file = fs.readFileSync("books.csv", "utf8");
} catch (err) {
  throw err;
}

let arrayCsv = file
  .split("\n")
  .map((item) => item.trim())
  .filter((item)=>(item != ''))
  .map((item) => item.split("; "));

if (arrayCsv[0] === undefined || arrayCsv[0].length < 2) {
  throw "Not enoght data";
}

//delete arrayCsv[0]

//arrayCsv.map(item=>console.log(item[1]))

let obj = {} 

for (let item of arrayCsv.slice(1) ) {
		if (item) {
			if (!obj[item[1]]) obj[item[1]] = []
			obj[item[1]].push([item[0],item[2]])
		}

}

let obj2 = {"authors": [] }
function renderBook(book) {
	return {"title" : book[0], "description" : book[1]}
}
for (let item of Object.entries(obj) ) {
	obj2["authors"].push(
		{
			"author" : item[0],
			"books": item[1].map((item) => renderBook(item))
		}
	)
}

console.log(JSON.stringify(obj2, null, 2))

/*
for (let item of Object.entries(obj) ) {
	console.log(item[1])
}
*/


