var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    return new Promise(function(resolve, reject) {
        resolve(`data is ${data}`);
    });
});

p2.then(function(data) {
    console.log(data);
});
