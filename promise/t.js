
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

fn()
