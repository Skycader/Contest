const f = () => 5
const fn = () => () => new Promise(f)
const fn = () => new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
})
fn()

