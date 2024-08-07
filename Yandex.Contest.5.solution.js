/* 02 may 2024 */
//Solved within 1 try though it's been 10 months+

const f =
  (...funs) =>
  (arg) =>
    funs.reduce((total, fun) => (total += fun(arg)), 0);

/* 14 june 2023 */
const f =
  (...funs) =>
  (arg) =>
    funs.reduce((total, fun) => fun(total), arg);

const flow2 = (...funs) => {
  return function (arg) {
    let res = 0;
    for (let item of funs) {
      res += item(arg);
    }
    return res;
    //return funs.reduce((total,fun)=>{console.log(fun(arg)); return total+=fun(arg)},0)
  };
};

const flow =
  (...funs) =>
  (arg) =>
    funs.reduce((total, fun) => (total += fun(arg)), 0);

const add = (x) => (y) => y + x;
const multiple = (x) => (y) => y * x;

const o = flow(
  add(2), //<- 4
  multiple(3), //<- 6
)(4); //18 (4+2)*3
console.log(o);
