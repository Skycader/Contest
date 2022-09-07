async function promiseHelloWorld() {
    return 'Hello World!';
  }

  promiseHelloWorld().then(res => console.log(res))