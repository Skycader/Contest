/*
Помните о том, что интерпретатор JavaScript всегда сначала выполняет синхронный код, а затем асинхронный.
*/
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');
