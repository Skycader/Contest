const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = 0
let sum =  0
rl.question("", (userInput) => {
  sum+=userInput*1
  lines++
  console.log(sum,lines)
  if (lines==2) {
  rl.close();
  }
});
