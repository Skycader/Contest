function calc() {
  let args = [];

  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  let total = 0;

  let ft = []; //first three

  while (args.length > 1) {
    for (var i = 0; i < 3; i++) {
      ft.push(args[0]);
      args.shift();
    }

    args.unshift(subCalc(ft[0], ft[1], ft[2]));
    ft = [];
  }

  return args[0] + "";
}

function subCalc(opr1, opr, opr2) {
  switch (opr) {
    case "+":
      return (1 * opr1) + (1 * opr2);
      break;
    case "*":
      return (1 * opr1) * (1 * opr2);
      break;
    case "/":
      return (1 * opr1) / (1 * opr2);
      break;
    case "-":
      return (1 * opr1) - (1 * opr2);
      break;
  }
}

module.exports = { calc };

console.log(calc('2', '+', '2', '*', '2') === '8')
console.log(calc('999999999999', '*', '2', '*', '2') === '3999999999996')
console.log(calc('5', '*', '12', '/', '2') === '30')
console.log(calc('2','+','2','+','2','+','2','+','2','+','2','+','2','+','2') === '16')
console.log(calc('2', '/', '44','-','5'))