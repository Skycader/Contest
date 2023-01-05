
console.log('start');

const fn1 = () => Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const promise1 = fn1()
const fn2 = () => {
	setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

}
const timer1 = fn2()
console.log('end');
