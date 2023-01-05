Promise.resolve('foo')
  .then(Promise.resolve('bar'))
  .then(Promise.resolve('bar2'))
  .then(function (result) {
    console.log(result);
  });
