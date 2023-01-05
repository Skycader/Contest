var p = new Promise((resolve, reject) => {
reject(Error('The Fails!'))
})
.catch(error => console.log(error.message))
.catch(error => console.log(error.message))
