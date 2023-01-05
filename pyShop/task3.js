const fs = require("fs");

try {
  var file = fs.readFileSync("books.csv", "utf8");
} catch (err) {
  throw err;
}

let arrayCsv = file
  .split("\n")
  .map((item) => item.trim())
  .map((item) => item.split("; "));

if (arrayCsv[0] === undefined || arrayCsv[0].length < 2) {
  throw "Not enoght data";
}

console.log(arrayCsv);

let headingData = arrayCsv[0];

let authorIndex = headingData
  .map((heading, i) => (heading === "Author" ? i : -1))
  .filter((i) => i !== -1)[0];

if (authorIndex === undefined) {
  throw "There is no author";
}

console.log(authorIndex);

arrayCsv = arrayCsv.slice(1);

let authorsObject = {};

let authorNames = []

for (let item of arrayCsv) {
  let book = {};

  for (let j = 0; j < item.length; j++) {
    if (j === authorIndex){
      continue
    }
    book[
      headingData[j].toLowerCase() === "annotation"
        ? "description"
        : headingData[j].toLowerCase()
    ] = item[j];
  }

  if (authorsObject[item[authorIndex]] === undefined) {
    authorNames.push(item[authorIndex])
    authorsObject[item[authorIndex]] = {
        "author": item[authorIndex],
        "books": [],
    };
  }

  authorsObject[item[authorIndex]].books.push(book);
}

let allAuthorsObject = []

for (let item of authorNames){
    allAuthorsObject.push((authorsObject[item]))
}

let resultObj = { authors: allAuthorsObject };

try {
  fs.writeFileSync("books.json", JSON.stringify(resultObj, null, "  "));
} catch (err) {
  throw err;
}
